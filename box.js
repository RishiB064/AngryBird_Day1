// create a new class
class Box
{
  constructor(x, y, width, height) 
  {
    //give options for the box
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    //add the box to the world
    World.add(world, this.body);
  }
  //display the box
  display()
  {
    //nameSpace the position and angle
    var pos =this.body.position;
    var angle = this.body.angle;

    //rotate the box
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }

}
