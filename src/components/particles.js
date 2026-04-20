import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine/+esm"
import { loadSlim } from "https://cdn.jsdelivr.net/npm/@tsparticles/slim/+esm"

await loadSlim(tsParticles);

await tsParticles.load({
    id: "tsparticles",
    options: {   
        particles: {
            color: {
                value: '#dead'
            },
            links: {
                enable: true,
                color: '#beef'
            },
            move: {
                enable: true
            },
            size: {
                value: {min:2, max:5}
            },
            number: {
                value: 250
            }
        }
    }
    });

// domItem(0) returns the first tsParticles instance loaded in the dom
const particles = tsParticles.item(0);

document.querySelector("#btn1").addEventListener("click", e => {
    if (particles.animationStatus) {
        particles.pause();
        e.target.innerText = "Play"
    } else {
        particles.play();
        e.target.innerText = "Stop"
    }
    console.log({particles, e}, particles.options)
});