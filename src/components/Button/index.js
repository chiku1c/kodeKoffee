import styled, { keyframes } from 'styled-components';

const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`;

const steam = keyframes`
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
`;

const ButtonStyle = styled.div`
  .btn-glow {
    width: 100%;
    max-width: 220px;
    height: 50px;
    border: 1px solid #ed3c29;
    border-radius: 0.5rem;
    outline: none;
    color: #fff;
    background: #0f2944;
    cursor: pointer;
    position: relative;
    z-index: 0;
    overflow: hidden;
    text-transform: uppercase;
    padding: 0.75rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: 'Airbnb Cereal App3';
    transform: skewX(-12deg);
    transition: background 0.3s ease-in-out;
  }

  .btn-glow:hover {
    background: linear-gradient(to bottom right, #fa610a, #ed3c29);
  }

  .btn-glow:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(320deg, #e91e63, #ff5722, #ffeb3b, #b9ff68, #0fac81, #084298, #771afe, #970374, #e91e63);
    background-size: 500%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    animation: ${glowing} 15s linear infinite;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .btn-glow:hover:before {
    opacity: 1;
  }

  .btn-glow:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom right, #fa610a, #ed3c29);
    border-radius: 0.5rem;
    z-index: -2;
    animation: ${steam} 20s linear infinite;
  }

  .btn-glow span {
    display: inline-block;
    transform: skewX(12deg);
  }

  @media (min-width: 768px) {
    .md\:w-\[138px\] {
      width: 138px;
    }
  }
`;

export default function StyledButton() {
  return (
    <ButtonStyle>
      <button className="btn-glow md:w-[138px] w-full">
        <span>Launch app</span>
      </button>
    </ButtonStyle>
  );
}
