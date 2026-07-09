import { drawGrid } from "@/utils/grid.js";
import { drawAxes } from '@/utils/axes.js';
import { vector } from "@/utils/vec3.js";



let doom;
let ceiling;
let floor;
let floorspot;
let stone;
let spawn;
let stone2;
let stone3;
let rails;
let tiles;
let message;
let firebackdrop;
let subtext;
let skullblue;
let skullred;
let skullorange;
let dirt;
//We can use this to load textures or sounds
export function preload() {
    doom = loadImage('Doom_cover_art.jpg')
    ceiling = loadImage('SpottyBricks.png')
    floorspot = loadImage('StoneFloor.png')
    floor = loadImage('StoneFloor2.png')
    stone = loadImage('Stone.png')
    stone2 = loadImage('ConcreteWall2.png')
    stone3 = loadImage('ConcreteWall3.png')
    spawn = loadImage('SpawnPoint.png')
    rails = loadImage('Rails.png')
    tiles = loadImage('Tiles.png')
    message = loadImage('Messagee.png')
    firebackdrop = loadImage('FireBackdrop.jpg')
    subtext = loadImage('AmazingMessage.png')
    skullred = loadImage('SkullRed.png')
    skullblue = loadImage('SkullBlue.png')
    skullorange = loadImage('SkullOrange.png')
    dirt = loadImage('Dirt.png')
}


//We can use this to load textures or sounds




let cam;

let Move = vector(0, 0, 0)
let ot = 0;

let collisionArray = []

export function setup() {
    //put makebb fuctions here
    console.log(collisionArray.length)

}

export function draw(t, dt) {
    background(50, 50, 50);
    ambientLight(180, 180, 180);
    directionalLight(255, 255, 255, 0, 1, 0);
    drawAxes();
    texture(floor)
    textureWrap(REPEAT, REPEAT)
    beginShape();
    vertex(5000, 0, 5000, 0, 0);
    vertex(5000, 0, -5000, 3500, 0)
    vertex(-5000, 0, -5000, 3500, 3500)
    vertex(-5000, 0, 5000, 0, 3500)
    endShape()
    texture(ceiling)
    beginShape();
    vertex(5000, -300, 5000, 0, 0);
    vertex(5000, -300, -5000, 3500, 0)
    vertex(-5000, -300, -5000, 3500, 3500)
    vertex(-5000, -300, 5000, 0, 3500)
    endShape()
    texture(spawn)
    box(200,20,200)
    texture(stone2)
    push()
    translate(750,-150,0)
    box(10,300,300)
    translate(0,0,-300)
    texture(stone3)
    box(10,300,300)
    texture(stone2)
    translate(0,0,-300)
    box(10,300,300)
    translate(0,0,900)
    texture(stone3)
    box(10,300,300)
    translate(0,0,300)
    texture(stone2)
    box(10,300,300)
    pop()
    push()
    rotateY(180)
    translate(750,-150,0)
    box(10,300,300)
    translate(0,0,-300)
    texture(stone3)
    box(10,300,300)
    texture(stone2)
    translate(0,0,-300)
    box(10,300,300)
    translate(0,0,900)
    texture(stone3)
    box(10,300,300)
    translate(0,0,300)
    texture(stone2)
    box(10,300,300)
    pop()
    push()
    rotateY(90)
    texture(dirt)
    translate(750,-150,0)
    box(10,300,300)
    translate(0,0,-300)
    box(10,300,300)
    translate(0,0,-300)
    box(10,300,300)
    translate(0,0,900)
    box(10,300,300)
    translate(0,0,300)
    box(10,300,300)
    pop()
    push()
    rotateY(-90)
    translate(750,-150,0)
    translate(0,0,-300)
    texture(stone3)
    box(10,300,300)
    texture(stone2)
    translate(0,0,-300)
    box(10,300,300)
    translate(0,0,900)
    texture(stone3)
    box(10,300,300)
    translate(0,0,300)
    texture(stone2)
    box(10,300,300)
    pop()
    push()
    texture(stone3)
    translate(150,-150,900)
    box(10,300,300)
    translate(-300,0,0)
    rotateX(-90)
    box(10,300,300)
    pop()
    push()
    translate(595,-150,595)
    texture(stone)
    box(300,300,300)
    translate(0,0,-1195)
    box(300,300,300)
    translate(-1195,0,0)
    box(300,300,300)
    translate(0,0,1195)
    box(300,300,300)
    pop()
    //second room
    translate(0,0,1800)
    rotateY(180)
    push()
    texture(stone2)
    translate(750,-150,0)
    box(10,300,300)
    translate(0,0,-300)
    texture(stone3)
    box(10,300,300)
    texture(stone2)
    translate(0,0,-300)
    box(10,300,300)
    translate(0,0,900)
    texture(stone3)
    box(10,300,300)
    translate(0,0,300)
    texture(stone2)
    box(10,300,300)
    pop()
    push()
    rotateY(180)
    translate(750,-150,0)
    box(10,300,300)
    translate(0,0,-300)
    texture(stone3)
    box(10,300,300)
    texture(stone2)
    translate(0,0,-300)
    box(10,300,300)
    translate(0,0,900)
    texture(stone3)
    box(10,300,300)
    translate(0,0,300)
    texture(stone2)
    box(10,300,300)
    pop()
    push()
    rotateY(90)
    texture(stone2)
    translate(750,-150,0)
    box(10,300,300)
    texture(stone3)
    translate(0,0,-300)
    box(10,300,300)
    texture(stone2)
    translate(0,0,-300)
    box(10,300,300)
    texture(stone3)
    translate(0,0,900)
    box(10,300,300)
    texture(stone2)
    translate(0,0,300)
    box(10,300,300)
    pop()
    push()
    rotateY(-90)
    translate(750,-150,0)
    translate(0,0,-300)
    texture(stone3)
    box(10,300,300)
    texture(stone2)
    translate(0,0,-300)
    box(10,300,300)
    translate(0,0,900)
    texture(stone3)
    box(10,300,300)
    translate(0,0,300)
    texture(stone2)
    box(10,300,300)
    pop()
    push()
    texture(stone3)
    translate(150,-150,900)
    box(10,300,300)
    translate(-300,0,0)
    rotateX(-90)
    box(10,300,300)
    pop()
    push()
    translate(595,-150,595)
    texture(stone)
    box(300,300,300)
    translate(0,0,-1195)
    box(300,300,300)
    translate(-1195,0,0)
    box(300,300,300)
    translate(0,0,1195)
    box(300,300,300)
    pop()
    rotateY(-180)
    translate(0,0,-1800)
    //end of second room
    push()
    texture(tiles)
    beginShape()
    vertex(-250,-50,-740,0,0)
    vertex(-200,-50,-640,97,0)
    vertex(-200,0,-640,97,100)
    vertex(-250,0,-740,0,100)
    endShape()
    beginShape()
    vertex(-200,0,-640,0,0)
    vertex(-200,-50,-640,100,0)
    vertex(200,-50,-640,100,386)
    vertex(200,0,-640,0,386)
    endShape()
    beginShape()
    vertex(250,-50,-740,0,0)
    vertex(200,-50,-640,97,0)
    vertex(200,0,-640,97,100)
    vertex(250,0,-740,0,100)
    endShape()
    beginShape()
    vertex(250,-50,-740,0,0)
    vertex(200,-50,-640,97,0)
    vertex(-200,-50,-640,97,97)
    vertex(-250,-50,-740,0,97)
    endShape()
    pop()
    push()
    fill(60,60,60)
    translate(0,-12,-650)
    box(330,40,40)
    pop()
    push()
    texture(message)
    translate(0,-225,-750)
    box(250,75,11)
    texture(subtext)
    translate(0,100,0)
    box(350,50,11)
    texture(skullblue)
    translate(-240,0,0)
    box(50,60,11)
    texture(skullred)
    translate(-75,0,0)
    box(50,60,11)
    texture(skullorange)
    translate(-75,0,0)
    box(50,60,11)
    translate(625,0,0)
    texture(skullblue)
    box(50,60,11)
    texture(skullred)
    translate(75,0,0)
    box(50,60,11)
    texture(skullorange)
    translate(75,0,0)
    box(50,60,11)
    
    
    
    



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

    //let newPosition = vector(Move.x, Move.z)
    let collision = checkAllBB(Move.x, Move.z);
    if (collision != -1) {
        console.log("Ouch!")

        if (checkAllBB(oldPosition.x, Move.z) != -1) {
            Move = vector(Move.x, Move.y, oldPosition.z);
        } else if (checkAllBB(Move.x, oldPosition.z) != -1) {
            Move = vector(oldPosition.x, Move.y, Move.z);
        } else {
            Move = oldPosition
        }
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



