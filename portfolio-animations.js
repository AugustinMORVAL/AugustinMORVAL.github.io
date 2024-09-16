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

// Skill nodes animation
class SkillNode {
    constructor(element) {
        this.element = element;
        this.x = element.offsetLeft + element.offsetWidth / 2;
        this.y = element.offsetTop + element.offsetHeight / 2;
        this.connections = [];
    }
}

class Synapse {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.length = 0;
        this.progress = 0;
        this.speed = Math.random() * 0.02 + 0.005;
    }

    update() {
        this.progress += this.speed;
        if (this.progress > 1) {
            this.progress = 0;
        }
    }

    draw(ctx) {
        const dx = this.end.x - this.start.x;
        const dy = this.end.y - this.start.y;
        const x = this.start.x + dx * this.progress;
        const y = this.start.y + dy * this.progress;

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.7)';
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.strokeStyle = 'rgba(200, 200, 200, 0.2)';
        ctx.stroke();
    }
}

function initializeSkillNetwork() {
    const skillNetwork = document.querySelector('.skill-network');
    const canvas = document.getElementById('skill-canvas');
    const ctx = canvas.getContext('2d');
    const skillNodes = document.querySelectorAll('.skill-node');

    function resizeCanvas() {
        canvas.width = skillNetwork.offsetWidth;
        canvas.height = skillNetwork.offsetHeight;
    }

    function positionNodes() {
        const containerWidth = skillNetwork.offsetWidth;
        const containerHeight = skillNetwork.offsetHeight;
        const nodeCount = skillNodes.length;
        const radius = Math.min(containerWidth, containerHeight) * 0.35;
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;

        skillNodes.forEach((node, index) => {
            const angle = (index / nodeCount) * Math.PI * 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            node.style.left = `${x - node.offsetWidth / 2}px`;
            node.style.top = `${y - node.offsetHeight / 2}px`;
        });
    }

    const nodes = Array.from(skillNodes).map(node => new SkillNode(node));
    const synapses = [];

    // Create connections
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            synapses.push(new Synapse(nodes[i], nodes[j]));
        }
    }

    function drawConnections() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        synapses.forEach(synapse => {
            synapse.update();
            synapse.draw(ctx);
        });
    }

    function animate() {
        drawConnections();
        requestAnimationFrame(animate);
    }

    function init() {
        resizeCanvas();
        positionNodes();
        nodes.forEach(node => {
            node.x = node.element.offsetLeft + node.element.offsetWidth / 2;
            node.y = node.element.offsetTop + node.element.offsetHeight / 2;
        });
    }

    window.addEventListener('resize', () => {
        init();
    });

    init();
    animate();
}

document.addEventListener('DOMContentLoaded', initializeSkillNetwork);