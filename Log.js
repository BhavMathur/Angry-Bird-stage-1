class Log{
    constructor(x,y,h,angle){
        var options={
           // restitution : 0.8,
            density:1.0,
            friction:1.0
            
        }
        this.body = Bodies.rectangle(x,y,20,h,options);
        this.width= 20;
        this.height=h;
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
