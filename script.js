let boxTop = 200;
let boxLeft = 200;

function arrows(event) {
    
    if(event.key === "ArrowDown") {
        boxTop = boxTop + 10;
    }

    if(event.key === "ArrowUp") {
        boxTop = boxTop - 10;
    }

    if(event.key === "ArrowRight") {
        boxLeft = boxLeft + 10;
    }

    if(event.key === "ArrowLeft") {
        boxLeft = boxLeft - 10;
    }
}

document.addEventListener('keydown', (event) => {
        
    arrows(event);
    document.getElementById("box").style.top = boxTop + "px";
    document.getElementById("box").style.left = boxLeft + "px";
});
