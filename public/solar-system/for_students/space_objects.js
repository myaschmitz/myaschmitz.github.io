import * as T from "../libs/CS559-Three/build/three.module.js";
import { GrObject } from "../libs/CS559-Framework/GrObject.js";
import { GLTFLoader } from "../libs/CS559-Three/examples/jsm/loaders/GLTFLoader.js";
import { FBXLoader } from "../libs/CS559-Three/examples/jsm/loaders/FBXLoader.js";
import { mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto } from "./final-grtown.js"

// default planet to earth and then go from there
var cur_planet = earth;
var planet_picker = Math.floor(Math.random() * 8);

var earth_velocity = 0.8;

var space_shuttle_cnt = 0;
export class SpaceShuttle extends GrObject {
    constructor() {
        // load in space shuttle object
        const gltf_loader = new GLTFLoader();
        let space_shuttle = new T.Group();

        gltf_loader.load(
            './scene.gltf',

            function(gltf) {
                gltf.scene.children[0].rotateZ(Math.PI);
                gltf.scene.scale.set(0.1,0.1,0.1);
                space_shuttle.add(gltf.scene);
            }
        );
        super(`Space Shuttle-${++space_shuttle_cnt}`, space_shuttle);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        let shuttle = this.objects[0];

        // pick planets up to jupiter and no farther
        let planets = [ mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto ];

        // get direction shuttle is facing
        let shuttle_pos = shuttle.position;
        let dx = Math.pow(shuttle_pos.x - planets[planet_picker].objects[0].position.x, 2);
        let dz = Math.pow(shuttle_pos.z - planets[planet_picker].objects[0].position.z, 2);
        let dist = Math.sqrt(dx + dz);

        // if shuttle is close enough, find another planet to go to
        if (dist < 2) {
            planet_picker = Math.floor(Math.random() * 8);
            cur_planet = planets[planet_picker];
        }

        shuttle.lookAt(planets[planet_picker].objects[0].position);

        // find dir shuttle is facing and go along that vector
        let shuttle_dir = new T.Vector3();
        shuttle.getWorldDirection(shuttle_dir);
        shuttle.position.x += shuttle_dir.x * (delta / 1000) * 26;
        shuttle.position.z += shuttle_dir.z * (delta / 1000) * 26;
    }
}

export class SpaceStation extends GrObject {
    constructor() {
        // load in textures
        let color_map = new T.TextureLoader().load("./images/space_station/Low Poly Space Station Texture.png");
        let emissive_map = new T.TextureLoader().load("./images/space_station/Low Poly Space Station Emission.png");

        // load in city object
        const fbx_loader = new FBXLoader();
        let city_holder = new T.Group();

        fbx_loader.load(
            './low_poly_space_station.fbx',

            function(object) {
                object.traverse(function(child) {
                    if (child.isMesh) {
                        child.material.map = color_map;
                        child.material.emissiveMap = emissive_map;
                    }
                });
                object.scale.set(0.02,0.02,0.02);
                city_holder.add(object);
            }       
        );

        super("Space Station", city_holder);

        this.rideable = this.objects[0];
    }

    stepWorld(delta, timeOfDay) {
        this.time += delta / 1000;
        this.objects[0].rotation.y += delta / 10000;

        let theta = (timeOfDay / 1000) * (earth_velocity * 0.8);
        let x = Math.cos(theta);
        let z = Math.sin(theta);

        this.objects[0].rotateZ(Math.PI/6);
        this.objects[0].lookAt(earth.objects[0].position);
        this.objects[0].position.x = -x * 0.39 * 5;
        this.objects[0].position.z = z * 0.39 * 5;
    }
}