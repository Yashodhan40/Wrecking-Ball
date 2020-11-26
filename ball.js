class Ball{
    constructor(x,y,r){
        var options={
            density:1
        }
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("crimson");
        ellipseMode(CENTER);
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }
}