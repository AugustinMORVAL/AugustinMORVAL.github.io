// Neural Network Background Animation
const canvas = document.getElementById('neural-network-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Neuron {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speed = Math.random() * 0.5 + 0.2;
        this.connections = [];
        this.color = `rgba(0, ${Math.floor(Math.random() * 155) + 100}, ${Math.floor(Math.random() * 155) + 100}, 0.5)`;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = 0;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        this.connections.forEach(connection => {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${Math.random() * 0.2 + 0.1})`;
            ctx.lineWidth = Math.random() * 0.5 + 0.5;
            ctx.stroke();
        });
    }
}

const neurons = Array(150).fill().map(() => new Neuron());

neurons.forEach(neuron => {
    const connectionsCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < connectionsCount; i++) {
        const randomNeuron = neurons[Math.floor(Math.random() * neurons.length)];
        if (randomNeuron !== neuron) {
            neuron.connections.push(randomNeuron);
        }
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    neurons.forEach(neuron => {
        neuron.update();
        neuron.draw();
    });
    requestAnimationFrame(animate);
}

animate();

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Scroll animation for sections
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Add neuron nodes to the page
function addNeuronNodes() {
    const nodeCount = 20;
    const main = document.querySelector('main');
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.classList.add('neuron-node');
        node.style.left = `${Math.random() * 100}%`;
        node.style.top = `${Math.random() * 100}%`;
        main.appendChild(node);
    }
}

addNeuronNodes();