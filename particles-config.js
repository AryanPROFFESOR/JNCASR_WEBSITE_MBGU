particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 25,  // You can adjust this number (more or fewer DNAs)
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "shape": {
      "type": "image",
      "image": {
        "src": "DNA_IMAGE.png", // your file, should be in same folder
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8,
      "random": false
    },
    "size": {
      "value": 20,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // DNA images connect when cursor near
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.7
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
