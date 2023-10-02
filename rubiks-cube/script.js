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

const handleOnDown = e => {
    cube.dataset.mouseXDownAt = e.clientX;
    cube.dataset.mouseYDownAt = e.clientY;
}

const handleOnUp = () => {25
  cube.dataset.mouseXDownAt = "0";  
  cube.dataset.prevXPercentage = cube.dataset.percentageX;
  cube.dataset.mouseYDownAt = "0";  
  cube.dataset.prevYPercentage = cube.dataset.percentageY;
}

const handleOnMove = e => {
    if(cube.dataset.mouseYDownAt === "0") return;
    if(cube.dataset.mouseXDownAt === "0") return;
    const mouseDeltaY = parseFloat(cube.dataset.mouseYDownAt) - e.clientY, 
        maxDeltaY = window.innerHeight / 2;
    const mouseDeltaX = parseFloat(cube.dataset.mouseXDownAt) - e.clientX,
          maxDeltaX = window.innerWidth / 2;

    const percentageY = (mouseDeltaY / maxDeltaY) * 100,
            nextPercentageUnconstrainedY = parseFloat(cube.dataset.prevYPercentage) + percentageY,
            nextPercentageY = nextPercentageUnconstrainedY;
    const percentageX = (mouseDeltaX / maxDeltaX) * 100,
          nextPercentageUnconstrainedX = parseFloat(cube.dataset.prevXPercentage) + percentageX,
          nextPercentageX = nextPercentageUnconstrainedX

    cube.dataset.percentageY = nextPercentageY;
    cube.dataset.percentageX = nextPercentageX;
    console.log(nextPercentageY, nextPercentageX);
    cube.animate({
        transform: `rotateX(${nextPercentageY*3.6}deg) rotateY(${nextPercentageX*3.6}deg)`
    },{ fill: "forwards" });
    
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e =>  handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);