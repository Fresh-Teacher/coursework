import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import SpiderMan from "./SpiderMan/SpiderMan.js";
import Venom from "./Venom/Venom.js";
import Effects from "./Effects/Effects.js";
import Healthbar from "./Healthbar/Healthbar.js";
import StatDrawer from "./StatDrawer/StatDrawer.js";
import KO from "./KO/KO.js";
import Combo from "./Combo/Combo.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import DoubleOuch from "./DoubleOuch/DoubleOuch.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  SpiderMan: new SpiderMan({
    x: -114,
    y: -55,
    direction: 1,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 6,
    size: 150,
    visible: true,
    layerOrder: 8,
  }),
  Venom: new Venom({
    x: 36,
    y: -28,
    direction: -100.2039737217317,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 32,
    size: 150,
    visible: true,
    layerOrder: 1,
  }),
  Effects: new Effects({
    x: 894,
    y: -55,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 289.033315271528,
    visible: false,
    layerOrder: 9,
  }),
  Healthbar: new Healthbar({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  StatDrawer: new StatDrawer({
    x: 189,
    y: 152,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  KO: new KO({
    x: 19,
    y: 6,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6,
  }),
  Combo: new Combo({
    x: -142,
    y: 92,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 55.00000000000001,
    visible: false,
    layerOrder: 4,
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 7,
  }),
  DoubleOuch: new DoubleOuch({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
