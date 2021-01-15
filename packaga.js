class packageSprite{
    constructor(x,y,width,height){

        var options={
            restitution: 1.0
        }

       this.body = Bodies.rectangle(x,y,width,height, options) ;
       World.add(world,this.body);
    } 

    display(){
        var pos= this.body.position;
        rectMode(CENTER);
        this.image = loadImage("helicoper.png");
    }
}