/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Healthbar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("P1 healthbar", "./Healthbar/costumes/P1 healthbar.svg", {
        x: 192.99360304399028,
        y: 157.4370993815029,
      }),
    ];

    this.sounds = [new Sound("pop", "./Healthbar/sounds/pop.wav")];

    this.triggers = [];
  }
}
