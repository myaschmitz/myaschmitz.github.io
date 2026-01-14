/*jshint esversion: 6 */
// @ts-check

/**
 * Graphics Town Framework - "Main" File
 *
 * This is the main file - it creates the world, populates it with
 * objects and behaviors, and starts things running
 *
 * The initial distributed version has a pretty empty world.
 * There are a few simple objects thrown in as examples.
 *
 * It is the students job to extend this by defining new object types
 * (in other files), then loading those files as modules, and using this
 * file to instantiate those objects in the world.
 */

import { GrWorld } from "../libs/CS559-Framework/GrWorld.js";
import { WorldUI } from "../libs/CS559-Framework/WorldUI.js";
import * as T from "../libs/CS559-Three/build/three.module.js";
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto, Sun, Moon, 
    sun_size, mercury_size, venus_size, earth_size, mars_size, jupiter_size, 
    saturn_size, uranus_size, neptune_size } from "./planets.js";
import { SpaceShuttle, SpaceStation } from "./space_objects.js";
import { Asteroid } from "./asteroids.js"

/**m
 * The Graphics Town Main -
 * This builds up the world and makes it go...
 */

const NUM_ASTEROIDS = 1200;
const MARGIN = 0;

// make the world
let sunlight = new T.PointLight(0xffffff,1,200);
let light = new T.AmbientLight(0xffffff,0.3);

let world = new GrWorld({
    width: 800,
    height: 600,
    groundplanesize: 20, // make the ground plane big enough for a world of stuff
    lights: [ sunlight, light ]
});

world.groundplane.material.transparent = true;
world.groundplane.material.opacity = 0.0;

/* make skybox for surrounding stars */
let loader = new T.CubeTextureLoader().setPath("./images/skybox/");
var texture_cube = loader.load([
    'px.jpg', 'nx.jpg',
    'py.jpg', 'ny.jpg',
    'pz.jpg', 'nz.jpg'
]);

world.scene.background = texture_cube;

/* add planets into world */
export var dist_scale = 1.8;

export var mercury = new Mercury();
mercury.objects[0].translateX(0.39*dist_scale + sun_size);

export var venus = new Venus();
venus.objects[0].translateX(0.72*dist_scale + mercury.objects[0].position.x + mercury_size);

export var earth = new Earth();
earth.objects[0].translateX(1*dist_scale + venus.objects[0].position.x + venus_size);

export var mars = new Mars();
mars.objects[0].translateX(1.52*dist_scale + earth.objects[0].position.x + earth_size);

export var jupiter = new Jupiter();
jupiter.objects[0].translateX(5.2*dist_scale + mars.objects[0].position.x + mars_size);

export var saturn = new Saturn();
saturn.objects[0].translateX(9.54*dist_scale + jupiter.objects[0].position.x + jupiter_size);

export var uranus = new Uranus();
uranus.objects[0].translateX(19.2*dist_scale + saturn.objects[0].position.x + saturn_size);

export var neptune = new Neptune();
neptune.objects[0].translateX(30.06*dist_scale + uranus.objects[0].position.x + uranus_size);

export var pluto = new Pluto();
pluto.objects[0].translateX(39*dist_scale + neptune.objects[0].position.x + neptune_size);

export var moon = new Moon();
export var sun = new Sun();
sun.objects[0].position.set(0,0,0);

let space_shuttle = new SpaceShuttle();
let space_station = new SpaceStation();

world.add(sun);
world.add(mercury);
world.add(venus);
world.add(earth);
world.add(mars);
world.add(jupiter);
world.add(saturn);
world.add(uranus);
world.add(neptune);
world.add(pluto);
world.add(moon);
world.add(space_station);
earth.objects[0].add(moon.objects[0]);
earth.objects[0].add(space_station.objects[0]);

world.add(space_shuttle);

// v is the number of times random is summed and should be over >= 1
// return a random number between 0-1 exclusive
function randomG(v){ 
    var r = 0;
    for(var i = v; i > 0; i --){
        r += Math.random();
    }
    return r / v;
}

/* create asteroid belt */
let min_r = 1.52 * dist_scale * 10 + MARGIN;
let max_r = 5.2 * dist_scale * 10 - MARGIN;

for (let i = 0; i < NUM_ASTEROIDS; i++) {
    // generate random numbers for sin, cos, y, and radius
    let theta = Math.random() * (2*Math.PI);
    let cos = Math.cos(theta);
    let sin = Math.sin(theta);
    let rand = (Math.random() + Math.random() + Math.random()) / 3;
    let rand_y = (randomG(7) * 16) - 8.0;
    let r = randomG(10) * (max_r - min_r) + min_r;
    
    // create asteroid and place it in random location
    let asteroid = new Asteroid();
    asteroid.theta = theta;
    asteroid.ypos = rand_y;
    asteroid.orbit_r = r;
    asteroid.objects[0].position.set(r*cos, rand_y, r*sin);
    world.add(asteroid);
}

// while making your objects, be sure to identify some of them as "highlighted"

///////////////////////////////////////////////////////////////
// because I did not store the objects I want to highlight in variables, I need to look them up by name
// This code is included since it might be useful if you want to highlight your objects here
function highlight(obName) {
    const toHighlight = world.objects.find(ob => ob.name === obName);
    if (toHighlight) {
        toHighlight.highlighted = true;
    } else {
        throw `no object named ${obName} for highlighting!`;
    }
}
// of course, the student should highlight their own objects, not these
highlight("Moon"); // articulated, behavior 1
highlight("Sun"); // behavior 2 / has shader
highlight("Mercury"); // behavior 3
highlight("Earth");
highlight("Jupiter");
highlight("Space Station");
highlight("Space Shuttle-1"); // rideable / not simple behavior / from model file
highlight("Asteroid-958");


///////////////////////////////////////////////////////////////
// build and run the UI
// only after all the objects exist can we build the UI
// @ts-ignore       // we're sticking a new thing into the world
world.ui = new WorldUI(world);
// now make it go!
world.go();
