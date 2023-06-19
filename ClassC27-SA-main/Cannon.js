class Cannon {
    constructor(x, y, w, h, angle) {

        var opitions = {
            isStatic: true
        }
        this.base_image = loadImage("assets/cannon_base.png");
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.body = Bodies.rectangle(x, y, this.w, this.h, opitions);
        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        imageMode(CENTER)
        //rect(pos.x,pos.y,this.w,this.h)
        image(this.base_image,0, 20, 200, 200)
        pop()
    }
}