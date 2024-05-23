import React, { useRef, useEffect, useState } from 'react';
import '../../App.css';

const CanvasAnimation = () => {
    const canvasRef = useRef(null);
    const [balls, setBalls] = useState([]);
    const BALL_NUM = 30;
    const R = 2;
    const alpha_f = 0.03;
    const dis_limit = 260;
    const link_line_width = 0.8;
    const ball_color = { r: 207, g: 255, b: 4 };
    const mouse_ball = { x: 0, y: 0, vx: 0, vy: 0, r: 0, type: 'mouse' };

    const getRandomSpeed = (pos) => {
        const min = -1, max = 1;
        switch(pos) {
            case 'top': return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
            case 'right': return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
            case 'bottom': return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
            case 'left': return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
            default: return;
        }
    };

    const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const randomNumFrom = (min, max) => Math.random() * (max - min) + min;
    const randomSidePos = (length) => Math.ceil(Math.random() * length);

    const getRandomBall = () => {
        const pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
        const speed = getRandomSpeed(pos);
        return {
            x: pos === 'top' || pos === 'bottom' ? randomSidePos(canvasRef.current.width) : (pos === 'right' ? canvasRef.current.width + R : -R),
            y: pos === 'left' || pos === 'right' ? randomSidePos(canvasRef.current.height) : (pos === 'bottom' ? canvasRef.current.height + R : -R),
            vx: speed[0],
            vy: speed[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
        };
    };

    const renderBalls = (ctx) => {
        balls.forEach(b => {
            if (!b.hasOwnProperty('type')) {
                ctx.fillStyle = `rgba(${ball_color.r},${ball_color.g},${ball_color.b},${b.alpha})`;
                ctx.beginPath();
                ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
            }
        });
    };

    const updateBalls = () => {
        const newBalls = balls.map(b => {
            b.x += b.vx;
            b.y += b.vy;
            b.phase += alpha_f;
            b.alpha = Math.abs(Math.cos(b.phase));
            return (b.x > -50 && b.x < canvasRef.current.width + 50 && b.y > -50 && b.y < canvasRef.current.height + 50) ? b : null;
        }).filter(b => b !== null);
        setBalls(newBalls);
    };

    const renderLines = (ctx) => {
        for (let i = 0; i < balls.length; i++) {
            for (let j = i + 1; j < balls.length; j++) {
                const fraction = getDisOf(balls[i], balls[j]) / dis_limit;
                if (fraction < 1) {
                    const alpha = (1 - fraction).toString();
                    ctx.strokeStyle = `rgba(150,150,150,${alpha})`;
                    ctx.lineWidth = link_line_width;
                    ctx.beginPath();
                    ctx.moveTo(balls[i].x, balls[i].y);
                    ctx.lineTo(balls[j].x, balls[j].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
    };

    const getDisOf = (b1, b2) => {
        const delta_x = Math.abs(b1.x - b2.x);
        const delta_y = Math.abs(b1.y - b2.y);
        return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
    };

    const addBallIfy = () => {
        if (balls.length < BALL_NUM) {
            setBalls(prevBalls => [...prevBalls, getRandomBall()]);
        }
    };

    const render = (ctx) => {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        renderBalls(ctx);
        renderLines(ctx);
        updateBalls();
        addBallIfy();
    };

    const initBalls = (num) => {
        const initialBalls = [];
        for (let i = 0; i < num; i++) {
            initialBalls.push({
                x: randomSidePos(canvasRef.current.width),
                y: randomSidePos(canvasRef.current.height),
                vx: getRandomSpeed('top')[0],
                vy: getRandomSpeed('top')[1],
                r: R,
                alpha: 1,
                phase: randomNumFrom(0, 10)
            });
        }
        setBalls(initialBalls);
    };

    const initCanvas = () => {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        initCanvas();
        initBalls(BALL_NUM);

        const handleResize = () => {
            initCanvas();
        };

        window.addEventListener('resize', handleResize);

        const animationFrameId = window.requestAnimationFrame(function renderLoop() {
            render(ctx);
            window.requestAnimationFrame(renderLoop);
        });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;

        const handleMouseEnter = () => {
            setBalls(prevBalls => [...prevBalls, mouse_ball]);
        };

        const handleMouseLeave = () => {
            setBalls(prevBalls => prevBalls.filter(b => !b.hasOwnProperty('type')));
        };

        const handleMouseMove = (e) => {
            mouse_ball.x = e.pageX;
            mouse_ball.y = e.pageY;
        };

        canvas.addEventListener('mouseenter', handleMouseEnter);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('mouseenter', handleMouseEnter);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas ref={canvasRef} />
    );
};

export default CanvasAnimation;
