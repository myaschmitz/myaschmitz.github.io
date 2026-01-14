import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { dist_scale } from "./final-grtown.js"
import { shaderMaterial } from "../libs/CS559-Framework/shaderHelper.js";

/* calculate sizes of planets relative to earth with base size
 * so none of them are crazy small
 */
let earth_scale = 0.3;
let base_size = 1;
export var sun_size     = 4;
export var moon_size    = base_size/2 + 0.27 * earth_scale;
export var mercury_size = base_size + 0.38 * earth_scale;
export var venus_size   = base_size + 0.95 * earth_scale;
export var earth_size   = base_size + 1 * earth_scale;
export var mars_size    = base_size + 0.53 * earth_scale;
export var jupiter_size = base_size + 11.19 * earth_scale;
export var saturn_size  = base_size + 9.40 * earth_scale;
export var uranus_size  = base_size + 4.04 * earth_scale;
export var neptune_size = base_size + 3.88 * earth_scale;
export var pluto_size   = base_size + 0.18 * earth_scale;

/* orbital velocity scales relative to earth */
export var earth_velocity = 0.8; // set baseline orbital velocity
var v_mercury = 365 / 88;
var v_venus = 365 / 225;
var v_mars = 365 / 687;
var v_jupiter = 365 / (365*12);
var v_saturn = 365 / (365*29);
var v_uranus = 365 / (365*84);
var v_neptune = 365 / (365*165);
var v_pluto = 365 / (365*248);

export class Sun extends GrObject {
    constructor() {
        let color_map = new T.TextureLoader().load("./images/planets/sun-color-map.jpg");
        let bump_map = new T.TextureLoader().load("./images/planets/sun-bump-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(sun_size, 128, 128);
        let sun_shader_mat = shaderMaterial("./shaders/sun.vs", "./shaders/sun.fs", {
            side: T.DoubleSide,
            uniforms: {
              tex: { value: color_map },
              time: { value: 0.5 },
              height: { value: 1 },
              height_map: { value: bump_map }
            },
          });
        let planet = new T.Mesh(planet_geom, sun_shader_mat);
        super("Sun", planet);

        this.rideable = this.objects[0];
        console.log(this.objects[0])
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 6000;

        this.objects[0].material.uniforms.time.value = timeOfDay;
    }
}

export class Moon extends GrObject {
    constructor() {
        let height_map = new T.TextureLoader().load("./images/planets/moon-height-map.jpg");
        let color_map = new T.TextureLoader().load("./images/planets/moon-color-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(moon_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
            bumpMap: height_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Moon", planet);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 10000;

        let theta = (timeOfDay / 1000) * (earth_velocity * 0.7);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 0.39 * 10;
        this.objects[0].position.z = z * 0.39 * 10;
    }
}

export class Mercury extends GrObject {
    constructor() {
        let height_map = new T.TextureLoader().load("./images/planets/mercury-height-map.jpg");
        let color_map = new T.TextureLoader().load("./images/planets/mercury-color-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(mercury_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
            bumpMap: height_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Mercury", planet);
        
        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 2000;

        let theta = (timeOfDay / 1000) * (earth_velocity * v_mercury);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 0.39 * dist_scale * 10;
        this.objects[0].position.z = z * 0.39 * dist_scale * 10;
    }
}

export class Venus extends GrObject {
    constructor() {
        let height_map = new T.TextureLoader().load("./images/planets/venus-height-map.jpg");
        let color_map = new T.TextureLoader().load("./images/planets/venus-color-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(venus_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
            bumpMap: height_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Venus", planet);
        
        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 2000;

        let theta = (timeOfDay / 1000) * (earth_velocity * v_venus);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 0.72 * dist_scale * 10;
        this.objects[0].position.z = z * 0.72 * dist_scale * 10;
    }
}

export class Earth extends GrObject {
    constructor() {
        let height_map = new T.TextureLoader().load("./images/planets/earth-height-map.jpg");
        let color_map = new T.TextureLoader().load("./images/planets/earth-color-map.png");
        let planet_geom = new T.SphereBufferGeometry(earth_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
            bumpMap: height_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Earth", planet);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 2000;

        let theta = (timeOfDay / 1000) * earth_velocity;
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 1 * dist_scale * 10;
        this.objects[0].position.z = z * 1 * dist_scale * 10;
    }
}

export class Mars extends GrObject {
    constructor() {
        let height_map = new T.TextureLoader().load("./images/planets/mars-height-map.jpg");
        let color_map = new T.TextureLoader().load("./images/planets/mars-color-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(mars_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
            bumpMap: height_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Mars", planet);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 2000;

        let theta = (timeOfDay / 1000) * (earth_velocity * v_mars);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 1.52 * dist_scale * 10;
        this.objects[0].position.z = z * 1.52 * dist_scale * 10;
    }
}

export class Jupiter extends GrObject {
    constructor() {
        let color_map = new T.TextureLoader().load("./images/planets/jupiter-color-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(jupiter_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Jupiter", planet);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 500;

        let theta = (timeOfDay / 1000) * (earth_velocity * v_jupiter);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 5.2 * dist_scale * 10;
        this.objects[0].position.z = z * 5.2 * dist_scale * 10;
    }
}

export class Saturn extends GrObject {
    constructor() {
        let color_map = new T.TextureLoader().load("./images/planets/saturn-color-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(saturn_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Saturn", planet);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 1000;

        let theta = (timeOfDay / 1000) * (earth_velocity * v_saturn);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 9.54 * dist_scale * 10;
        this.objects[0].position.z = z * 9.54 * dist_scale * 10;
    }
}

export class Uranus extends GrObject {
    constructor() {
        let color_map = new T.TextureLoader().load("./images/planets/uranus-color-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(uranus_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Uranus", planet);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 1000;

        let theta = (timeOfDay / 1000) * (earth_velocity * v_uranus);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 19.2 * dist_scale * 10;
        this.objects[0].position.z = z * 19.2 * dist_scale * 10;
    }
}

export class Neptune extends GrObject {
    constructor() {
        let color_map = new T.TextureLoader().load("./images/planets/neptune-color-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(neptune_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Neptune", planet);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 2000;

        let theta = (timeOfDay / 1000) * (earth_velocity * v_neptune);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 30.06 * dist_scale * 10;
        this.objects[0].position.z = z * 30.06 * dist_scale * 10;
    }
}

export class Pluto extends GrObject {
    constructor() {
        let height_map = new T.TextureLoader().load("./images/planets/pluto-height-map.jpg");
        let color_map = new T.TextureLoader().load("./images/planets/pluto-color-map.jpg");
        let planet_geom = new T.SphereBufferGeometry(pluto_size);
        let planet_mat = new T.MeshStandardMaterial({ 
            color: "#ffffff",
            map: color_map,
            bumpMap: height_map,
        });
        let planet = new T.Mesh(planet_geom, planet_mat);
        super("Pluto", planet);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 2000;

        let theta = (timeOfDay / 1000) * (earth_velocity * v_pluto);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].position.x = -x * 30.06 * dist_scale * 10;
        this.objects[0].position.z = z * 30.06 * dist_scale * 10;
    }
}