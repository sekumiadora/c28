class Cannon2 {
    constructor(x, y, w, h, angle) {

        var opitions = {
            isStatic: true
        }
        this.base_image = loadImage("assets/CANON.png");
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.body = Bodies.rectangle(x, y, this.w, this.h, opitions);
        World.add(world, this.body)
    }
    display() {
        console.log(this.angle)
        if(keyIsDown(UP_ARROW)&& this.angle>-6){
          this.angle -= 1;

        }
        if(keyIsDown(DOWN_ARROW) && this.angle<47){
            this.angle += 1;
        }

        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        rotate(this.angle)
        imageMode(CENTER)
        //rect(pos.x,pos.y,this.w,this.h)
        image(this.base_image,0, 20, 200, 200)
        pop()
    }
}