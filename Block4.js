class Block4{
    constructor(x, y, width, height,angle) {
        var options = {
            restitution:0.1,
            friction:1.5,
            density:0.5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
      }
      display(){
         var pos =this.body.position;
      rectMode(CENTER);
      fill("orange");
      rect(pos.x, pos.y, this.width, this.height);
      }
}