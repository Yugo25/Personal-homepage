/*
loading transition
================================================ */
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
    // While loading -- grey screen
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        }, 
        {
            duration: 2000,
            delay: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    // While loading -- green screen
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh']
        },
        {
            duration: 2000,
            delay: 800,
            easing: 'ease',
            fill: 'forwards',
        }
    );

    // While loading -- text
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8   // 80% of the animation duration
            },
            {
                opacity: 0,
                offset: 1  // 100% of the animation duration
            },
        ],
        {
            duration: 1200,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});