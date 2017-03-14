const pressed = [];
const secretCode = 'andrew';

window.addEventListener('keyup', function(e) {
    // console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.lenght - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        cornify_add();
    }

});
