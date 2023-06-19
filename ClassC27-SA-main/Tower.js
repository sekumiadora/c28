class Tower{
  constructor(x,y,w,h){
    var opitions = {
        isStatic: true
    }
    this.image = loadImage("assets/tower.png");
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x,y,this.w,this.h,opitions);
    World.add(world,this.body)
  }
  display(){
    var pos = this.body.position
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    //rect(pos.x,pos.y,this.w,this.h)
    image(this.image,0,0,this.w,this.h)
    pop()
  }

}