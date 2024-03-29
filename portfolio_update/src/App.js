import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeReviewCard from "./components/Home";
import Particles from 'react-particles-js';
import "./components/ParticlesContainer.css"
import COLOR_IMAGE1 from './colorMe1.jpg'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Router>
    <Route exact path="/"><RecipeReviewCard /></Route>
          <Particles
            // ClassName="particles-js"
            // id="particles-js"
            params={{
              particles: {
                number: {
                  value: 300,
                  density: {
                    enable: true,
                    value_area: 2000
                  }
                },
                color: {
                  value: "#5adbd5"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#5adbd5"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 5,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#898a7c",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: true,
                    mode: "grab"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 100,
                    size: 30,
                    duration: 2,
                    opacity: 4,
                    speed: 1
                  },
                  repulse: {
                    distance: 50
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true,
              config_demo: {
                hide_card: true,
                background_color: "#b61924",
                background_image: "",
                background_position: "100% 100%",
                background_repeat: "no-repeat",
                background_size: "cover"
              }
            }}
          >

          </Particles>
          
        
    </Router>
  );
}

export default App;
