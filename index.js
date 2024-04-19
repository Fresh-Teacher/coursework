import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Cap from "./Cap/Cap.js";
import IronMan from "./IronMan/IronMan.js";
import Thor from "./Thor/Thor.js";
import Hulk from "./Hulk/Hulk.js";
import BlackWidow from "./BlackWidow/BlackWidow.js";
import Hawkeye from "./Hawkeye/Hawkeye.js";
import Sprite9 from "./Sprite9/Sprite9.js";

const stage = new Stage({ costumeNumber: 15 });

const sprites = {
  Sprite1: new Sprite1({
    x: 34,
    y: -7,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  Cap: new Cap({
    x: -158,
    y: 27,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3,
  }),
  IronMan: new IronMan({
    x: -157,
    y: -14,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8,
  }),
  Thor: new Thor({
    x: -157,
    y: -59,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4,
  }),
  Hulk: new Hulk({
    x: -157,
    y: -104,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5,
  }),
  BlackWidow: new BlackWidow({
    x: -158,
    y: -148,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6,
  }),
  Hawkeye: new Hawkeye({
    x: -157,
    y: -189,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7,
  }),
  Sprite9: new Sprite9({
    x: 87,
    y: -24,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 170.00000000000003,
    visible: false,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
