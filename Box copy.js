class Log{
    constructor(x,y,w,angle){
        var options={
            restitution : 0.8,
            density:1.0
            
        }
        this.body = Bodies.rectangle(x,y,w,20,options);
        this.width= w;
        this.height=20;
        Matter.Body.setAngle(this.body,angle);
        World.add(ourWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(255);
        stroke("green");
        rect(0,0,this.width, this.height);
        pop();
    }



}
