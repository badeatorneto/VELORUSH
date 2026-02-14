
function updatePhysics(){
    car.x += car.speed;
}
document.addEventListener("keydown",e=>{
    if(e.key==="ArrowRight") car.speed=2;
});
document.addEventListener("keyup",e=>{
    if(e.key==="ArrowRight") car.speed=0;
});
