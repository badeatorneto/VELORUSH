
let car = {x:50,y:200,speed:0};

function startGame(){
    requestAnimationFrame(loop);
}

function loop(){
    updatePhysics();
    render();
    requestAnimationFrame(loop);
}

function render(){
    let c=document.getElementById("game");
    let ctx=c.getContext("2d");
    ctx.fillStyle="black";
    ctx.fillRect(0,0,800,400);
    ctx.fillStyle="cyan";
    ctx.fillRect(car.x,car.y,40,20);
}
