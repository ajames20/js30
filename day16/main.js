const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px

function shadow(e) {
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    let x = e.offsetX;
    let y = e.offsetY;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offseTop;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(255, 20, 25, 0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(50, 23, 235, 0.7),
        ${yWalk}px ${xWalk  * -1}px 0 rgba(50, 233, 25, 0.7)`;
}

hero.addEventListener('mousemove', shadow);
