// When the target show up
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(.4rem)', 'blur(0)'],
                    translate: ['0 4rem', 0],
                },
                {
                    duration: 1000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            // Stop observing after once
            obs.unobserve(entry.target);
        }
    });
};

// Observation setting
const fadeObserver = new IntersectionObserver(animateFade);

// Observe the elements with .fadein
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
});