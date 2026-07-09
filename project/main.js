import { drawGrid } from "@/utils/grid.js";
import { drawAxes } from '@/utils/axes.js';
import { vector } from "@/utils/vec3.js";



let tex;
let tex2;
let tex3;
let tex4;
let tex5;
let tex6;
//We can use this to load textures or sounds
export function preload() {
    let p = new URL(import.meta.url).pathname
    p = p.substring(0, p.lastIndexOf('/') + 1)
    tex = loadImage(p + 'Doom_cover_art.jpg')
    tex2 = loadImage(p + 'DirtyMetalWall.png')
    tex3 = loadImage(p + 'HexagonFloor.png')
    tex4 = loadImage(p + 'Stone.png')
    tex5 = loadImage(p + 'fairs.jpg')
    tex6 = loadImage(p + 'Ceiling.png')
}


//We can use this to load textures or sounds




let cam;

let Move = vector(0, 0, 0)
let ot = 0;

let collisionArray = []

export function setup() {

    console.log(collisionArray.length)
    makeBB(250, 0, 10, 500)
    makeBB(-250, 0, 10, 500)
    //makeBB(0,250,500,10)
    makeBB(0, -250, 500, 10)
    makeBB(250,500,10,500)
    makeBB(0,750,500,10)
    makeBB(-250,500,10,500)
    makeBB(-125,250,150,10)
    makeBB(125,250,150,10)
}

export function draw(t, dt) {
    background(50, 50, 50);
    ambientLight(180, 180, 180);
    directionalLight(255, 255, 255, 0, 1, 0);
    drawGrid();
    drawAxes();
    //make the right wall
    push()
    translate(250, -150, 0)
    texture(tex2)
    rotateX(90)
    box(10, 500, 300)
    pop()
    //make the left wall
    push()
    translate(-250, -150, 0)
    texture(tex2) 
    rotateX(-180)
    box(10, 300, 500)
    pop()
    rotateY(90)
    //make the front wall
    push()
    translate(250, -150, 0)
    texture(tex2)
    rotateX(90)
    box(10, 500, 300)
    pop()
    //make the top of doorway
    push()
    translate(0, -30, 0)
    translate(-250, -240, 0)
    texture(tex2)
    box(11, 150, 500)
    pop()
    //makes the sides of doorway
    push()
    translate(-250, -90, 150)
    texture(tex2)
    rotateX(-180)
    box(10, 210, 200)
    rotateX(180)
    translate(0, 0, -300)
    rotateX(-180)
    box(10, 210, 200)
    pop()
    rotateY(-90) // copies te room we jst make but without the doorway wall.
    translate(0, 0, 500)
    rotateY(180)
    push()
    translate(250, -150, 0)
    texture(tex2)
    rotateX(90)
    box(10, 500, 300)
    pop()
    push()
    translate(-250, -150, 0)
    texture(tex2)
    rotateX(-180)
    box(10, 300, 500)
    pop()
    rotateY(90)
    push()
    translate(250, -150, 0)
    texture(tex2)
    rotateX(90)
    box(10, 500, 300)
    pop()
    rotateY(-90)
    translate(0, 0, 500)

    texture(tex3)
    textureWrap(REPEAT, REPEAT)
    beginShape();
    vertex(5000, 0, 5000, 0, 0);
    vertex(5000, 0, -5000, 3500, 0)
    vertex(-5000, 0, -5000, 3500, 3500)
    vertex(-5000, 0, 5000, 0, 3500)
    endShape()
    texture(tex4)
    beginShape();
    vertex(250, 0, -80, 0, 0);
    vertex(250, -50, -80, 30, 0);
    vertex(130, -50, -50, 30, 30);
    vertex(130, 0, -50, 0, 30);
    endShape()
    beginShape();
    vertex(130, -50, -50, 0, 0);
    vertex(130, 0, -50, 30, 0);
    vertex(130, 0, 50, 30, 30)
    vertex(130, -50, 50, 0, 30)
    endShape()
    beginShape();
    vertex(130, 0, 50, 0, 0)
    vertex(130, -50, 50, 30, 0)
    vertex(250, -50, 80, 30, 30)
    vertex(250, 0, 80, 0, 30)
    endShape()
    beginShape();
    vertex(250, -50, 80, 0, 0);
    vertex(130, -50, 50, 50, 0);
    vertex(130, -50, -50, 50, 50);
    vertex(250, -50, -80, 0, 50)
    endShape()
    texture(tex5)
    beginShape()
    vertex(240, -70, -80, 400, 400)
    vertex(240, -70, 80, 0, 400)
    vertex(240, -265, 80, 0, 0)
    vertex(240, -265, -80, 400, 0)
    endShape()
    texture(tex6)
    beginShape();
    vertex(5000, -300, 5000, 0, 0);
    vertex(5000, -300, -5000, 3500, 0)
    vertex(-5000, -300, -5000, 350, 3500)
    vertex(-5000, -300, 5000, 0, 3500)
    endShape()

    let oldPosition = vector(Move.x, Move.y, Move.z);

    let v = createVector(0, -100);
    v.rotate(ot);
    let forward = vector(v.x, 0, v.y);
    v.rotate(90);
    let right = vector(v.x, 0, v.y);

    if (keyIsDown(65)) {
        Move = Move.plus(right.times(-0.05));
    }

    if (keyIsDown(68)) {
        Move = Move.plus(right.times(0.05));
    }

    if (keyIsDown(87)) {
        Move = Move.plus(forward.times(0.05));
    }

    if (keyIsDown(83)) {
        Move = Move.plus(forward.times(-0.05));
    }

    if (keyIsDown(RIGHT_ARROW)) {
        ot += 3
    }

    if (keyIsDown(LEFT_ARROW)) {
        ot -= 3
    }


    cam = createCamera()
    cam.perspective(2 * atan(height / 2 / 800), width / height, 0.1 * 100)
    cam.setPosition(Move.x, (- Math.sin(3 * t) * 6) - 100, Move.z)
    cam.lookAt(Move.x + forward.x, (- Math.sin(3 * t) * 6) - 100, Move.z + forward.z);

    let collision = checkAllBB(Move.x, Move.z);

    if (collision != -1) {
        console.log("Ouch!")
        Move = oldPosition
    }





}
//20,50,20 size
//165,-50,195 pos
function makeBB(posx, posz, width, depth) {
    let posvec = createVector(posx, posz)
    let negvec = createVector(posx, posz)
    posvec.x = posx + width / 2 + 30
    posvec.y = posz + depth / 2 + 30
    negvec.x = posx - width / 2 - 30
    negvec.y = posz - depth / 2 - 30
    collisionArray.push({
        posvec,
        negvec
    });
}

function checkAllBB(x, y) {
    for (let i = 0; i < collisionArray.length; i++) {
        let box = collisionArray[i];
        if (isInside(x, y, box)) {
            console.log("collided with box #", i);
            return i;
        }
    }
    return -1;
}

function isInside(x, y, bb) {
    if (x < bb.posvec.x && x > bb.negvec.x && y < bb.posvec.y && y > bb.negvec.y) {
        console.log('YAH')
        return true;
    }
    else {
        console.log('NAH')
        return false;
    }
}




//THIS SHIT WORKS NOW I LOVE IT!!!!!s



