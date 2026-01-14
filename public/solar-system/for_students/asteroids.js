import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";
import * as T from "../libs/CS559-Three/build/three.module.js";
import { earth_velocity } from "./planets.js";

var asteroid_cnt = 0;
var color_map = new T.TextureLoader().load("./images/asteroid-color-map.png");

export class Asteroid extends GrObject {
    constructor() {
        let asteroid_geom = new T.SphereBufferGeometry(0.3);
        let asteroid_shader_mat = shaderMaterial("./shaders/asteroids.vs", "./shaders/asteroids.fs", {
            side: T.DoubleSide,
            uniforms: {
              tex: { value: color_map },
              height: { value: 1 },
              seed: { value: Math.random() }
            },
          });
        let asteroid = new T.Mesh(asteroid_geom, asteroid_shader_mat);

        super(`Asteroid-${++asteroid_cnt}`, asteroid);

        this.orbit_r = 0;
        this.ypos = 0;
        this.theta = 0;
    }

    stepWorld(delta, timeOfDay) {
        let theta = (timeOfDay / 7000) * (earth_velocity);
        let cos = -Math.cos(theta + this.theta);
        let sin = Math.sin(theta + this.theta);

        this.objects[0].position.set(this.orbit_r*cos, this.ypos, this.orbit_r*sin);
    }
}