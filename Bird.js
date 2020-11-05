class Bird{
    constructor(x,y){
        var options={
           // restitution : 0.8,
            density:1.0,
            friction:1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width= 50;
        this.height=50;
        World.add(ourWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        pos.x= mouseX;
        pos.y= mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(2);
        stroke("blue");
        rect(0,0,this.width, this.height);
        pop();
    }



}