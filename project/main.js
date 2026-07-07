import { drawGrid } from "@/utils/grid.js";
import { drawAxes } from '@/utils/axes.js';
import { vector } from "@/utils/vec3.js";

let tex;
//We can use this to load textures or sounds
export function preload() {
    let p = new URL(import.meta.url).pathname
    p = p.substring(0, p.lastIndexOf('/') + 1)
    tex = loadImage(p + 'AmazingWindow.png')
}

//Called once when program loads
export function setup() {
    camera(300, -200, 700);
    grid = [
    [Math.floor(random(0,5)), 2, 5, 4, 3],
    [1, 1, 1, 1, 1],
    [0, 3, 1, 2, 1],
    [3, 3, 1, 1, 1],
    [5, 0, 4, 2, 3],
];

}

let grid = []

//Called every frame
export function draw(t, dt) {
    background(50, 50, 50);
    orbitControl();
    ambientLight(80, 60, 80);
    directionalLight(255, 255, 255, 1, 1, -1);
    //drawGrid(); 
    drawAxes();
    stroke(0, 0, 0)
    scale(50)
    push()
    translate(2, .1, 2)
    fill(30, 10, 30)
    box(5.25, .1, 5.25)
    pop()

        for (let x = 0; x < 5; x++) {
            for (let z = 0; z < 5; z++) {
                push()
                translate(x, 0, z)
                if (grid[x][z] == 0) {
                }
                if (grid[x][z] == 1) {
                    noStroke()
                    fill(40,40,40)
                    translate(0,-.05,0)
                    box(1,.1,1)
                }
                if (grid[x][z] == 2) {
                    skyscraper()
                }
                if (grid[x][z] == 3) {
                    noStroke()
                    fill(150, 75, 0)
                    translate(0, -0.2, 0)
                    cylinder(.05, .4)
                    translate(0, -0.3, 0)
                    fill(0, 200, 255)
                    stroke(0,255,255,50)
                    strokeWeight(.1)
                    sphere(.2)
                }
                if (grid[x][z] == 4) {
                    noStroke()
                    fill(20,20,20)
                    translate(0, -0.15, 0)
                    box(.8, .3, .8)
                    translate(0,-.15,0)
                    push()
                    emissiveMaterial(255,50,255)
                    stroke(0,0,75)
                    strokeWeight(.5)
                    box(.7,.3,.7)
                    pop()
                    translate(0,-.5,0)
                    box(.8,.70,.8)
                    translate(0,-0.4,0)
                    push()
                    emissiveMaterial(50,50,255)
                    stroke(0,0,75)
                    strokeWeight(.5)
                    box(.7,.2,.7)
                    pop()
                    translate(0,-.25,0)
                    box(0.8,0.3,0.8)
                }
                if ( grid[x][z] == 5 ) {
                    noStroke()
                    fill(150,150,150)
                    translate(0,-1.5,0)
                    cylinder(.25,3)
                    translate(0,-1.6,0)
                    cylinder(1,.2)
                    translate(0,-0.4,0)
                    fill(150,150,200,150)
                    cylinder(1,.6)
                    fill(150,150,150)
                    translate(0,-.4,0)
                    cylinder(1,.2)

                }
                pop()
            }
        }
}

function skyscraper() {
    push()
    translate(0, -1, 0)
    fill(18, 18, 18)
    box(1, 2, 1)
    translate(0, -1, 0)
    box(.4, .2, .4)
    cylinder(0.05, 1)
    translate(0, 1, 0)
    fill(120, 100, 255)
    shininess(400)
    texture(tex);
    box(1.02, 1.8, 0.8)
    box(0.8, 1.8, 1.02)
    pop()
}





