class Meeseeks {
  constructor(x, y, width, height) {
    var options = {
      'density':1.0,
      'friction': 1.0,
      'restitution' : 0.0

    };
    this.body = Matter.Bodies.rectangle(x, y, 50, 50, options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body);
  };


  display(){
    var pos = this.body.position;
    var move = 1;
    pos.x = mouseX;
    pos.y = mouseY;
    


    push();
    translate(pos.x, pos.y);
    stroke('white')
    fill('blue')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
};



