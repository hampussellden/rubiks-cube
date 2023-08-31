const cube = document.querySelector('.cube');
const colors = ['#f7f7f7', '#ffea00', '#ff0000', '#ff7b00', '#289617', '#341796'];
const directions = ['front', 'back', 'left', 'right', 'top', 'bottom']
const squares = 16;

for(var direction of directions){
    const div = document.createElement('div');
    div.classList.add(direction);
    div.classList.add('side');
    cube.appendChild(div);

    for (var i = 0; i < squares; i++) {
        const span = document.createElement('span');
        span.classList.add('span');
        span.style.backgroundColor = colors[directions.indexOf(direction)];
        div.appendChild(span);
    }

    div.querySelector('span').style.backgroundColor  = colors[colors[directions.indexOf(direction)]];
}

var isKeyDown = false;
const startX = -290;
const startY = -140;

function rotateCube(x, y) {
    console.log(x, y)
    let Xvalue = Math.floor((x / 2) + 100)
    let Yvalue = Math.floor((y / 2) + 100)

    cube.style.transform = `rotateX(-${Yvalue}deg) rotateY(${Xvalue}deg)`
}

rotateCube(startX, startY)

document.documentElement.addEventListener('mousedown', function (e) {
    isKeyDown = true;
    rotateCube(e.clientX, e.clientY)
})
document.documentElement.addEventListener('mouseup', function (e) {
    isKeyDown = false;
    rotateCube(startX, startY)
})
document.documentElement.addEventListener('mousemove', function (e) {
    isKeyDown && rotateCube(e.clientX, e.clientY)
})
