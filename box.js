class Box{
    constructor(x,y,width,height){
        var options={
            'friction':1,
           'restitution':0.8,
           'density':0.04
        }
        //this.x=x;
        //this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
        
    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("cyan");
        strokeWeight(6);
        stroke("black");
        rect(0,0,this.width,this.height);
        pop();
    }
}