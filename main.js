const wrapper = document.getElementById('wrapper');
let animationFrameId;

function handleMouseMove(event) {
    const rect = wrapper.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const rotateX = (mouseY / rect.height - 0.5) * 3; // Adjust the multiplier for desired rotation sensitivity
    const rotateY = (mouseX / rect.width - 0.5) * -3; // Adjust the multiplier for desired rotation sensitivity
    
    wrapper.style.transition = 'transform 0.1s ease-in-out';
    wrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(() => {
        wrapper.style.transition = 'none';
    });
}

function resetTransform() {
    wrapper.style.transition = 'transform 0.3s ease-in-out';
    wrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

wrapper.addEventListener('mousemove', handleMouseMove);
wrapper.addEventListener('mouseleave', resetTransform);
