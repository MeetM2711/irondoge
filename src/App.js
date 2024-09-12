import React, { useCallback } from 'react';
import Header from './components/Header.jsx';
import Main from './pages/main.jsx';
// import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function App() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="App">
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 100,
          interactivity: {
            modes: {
              push: {
                quantity: 8,
              },
              repulse: {
                distance: 800,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "bottom-right", // Set direction to bottom-right
              enable: true,
              outModes: {
                default: "out", // Particles will loop infinitely
              },
              random: true,
              speed: 4,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      ></Particles> */}

      <Header />
      <Main />
    </div>
  );
}

export default App;
