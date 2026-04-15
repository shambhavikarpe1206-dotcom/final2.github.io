// Typing effect
let text = ["CSE Student", "AI Enthusiast", "Future Developer"];
let i = 0, j = 0;
let current = "", isDeleting = false;

function type() {
    current = text[i];
    
    if (!isDeleting) {
        document.getElementById("typing").innerHTML = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = current.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 }
  }
});
