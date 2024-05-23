import './App.css';
import Layout from './components/Layout/Index';
import Header from './components/Header/index';
import Section from './components/Section';
import StyledSection from './components/Section/StyledSection';
import styled from 'styled-components';
import DownloadappSection from './components/Section/Downloadaap';
import AvatarSection from './components/Section/AvatarSection';
import Sectiontherd from './components/Section/Sectiontherd';
import MetaverseComponent from './components/Section/MetaverseComponent';
import EmblaCarouselComponent from './components/Carousel/EmblaCarousel';
import Slider from './components/Carousel/EmblaCarousel';
import Textsection from './components/Section/Textsection';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-particles';

const Container = styled.div`
  max-width: 1200px;
  margin: 7px auto 0;
  padding: 0 20px;
`;





function App() {

  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#ed3c29"],
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 2 },
      },
      links: {
        enable: true,
        distance: 120,
        color: '#808080',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: 'none',
        random: false,
        straight: false,
        outModes: 'out',
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: 'grab',
        },
        onClick: {
          enable: false,
          mode: 'push',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: -1,
          },
        },
        push: {
          quantity: 8,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <><Layout>
      <div className="layout-content">
        <Header />
      </div>
      <Container>
        <Particles options={options} init={particlesInit} />
        <Section />
      </Container>
      <Container>
        <StyledSection />
      </Container>
      <DownloadappSection />
      <AvatarSection />
      <Sectiontherd />
      <MetaverseComponent />
      <Slider />
      <Textsection />
      <Slider />
    </Layout></>
  );
}

export default App;
