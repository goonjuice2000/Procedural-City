import { drawGrid } from "@/utils/grid.js";
import { drawAxes } from '@/utils/axes.js';
import { vector } from "@/utils/vec3.js";



let tex;
//We can use this to load textures or sounds
export function preload() {
    let p = new URL(import.meta.url).pathname
    p = p.substring(0, p.lastIndexOf('/') + 1)
    tex = loadImage(p + 'Doom_cover_art.jpg')
}

let cam;

let Move = vector(0, 0, 0)
let ot = 0;

let collisionArray = []

export function setup() {
    makeBB(165, 195, 200, 200)
    makeBB(-200,-200,250,10)
    console.log(collisionArray.length)
}

export function draw(t, dt) {
    background(50, 50, 50);
    ambientLight(80, 60, 80);
    directionalLight(255, 255, 255, 1, 1, -1);
    drawGrid();
    drawAxes();
    push()
    translate(-200, -125, -200)
    texture(tex)
    box(250, 250, 10)
    pop()
    translate(255, 0, 255)
    torus(20, 2, 7)
    translate(-90, -50, -60)
    box(200, 50, 200)

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
    cam.perspective(2 * atan(height / 2 / 800),width / height,0.1 * 100)
    cam.setPosition(Move.x, (- Math.sin(3 * t) * 6) - 60, Move.z)
    cam.lookAt(Move.x + forward.x, (- Math.sin(3 * t) * 6) - 60, Move.z + forward.z);

    let collision = checkAllBB(Move.x, Move.z);

    if ( collision != -1 ){
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




//THIS SHIT DOESN'T WORK YET I HATE IT!



