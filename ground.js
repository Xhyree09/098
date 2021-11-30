
class Ground {

  constructor(x,y,w,h){

    let g_opts = {
      isStatic:true
    }

    this.body = Bodies.rectangle(x,y,w,h,g_opts);
    this.w = w;
    this.h = h;
    //this.x = x;
    //this.y = y;
    World.add(world,this.body);

  }

  show(){
    var pos = this.body.position
    rectMode(CENTER);
    fill("#c660ce");
    rect(pos.x,pos.y,this.w,this.h)  ;
  }


}

