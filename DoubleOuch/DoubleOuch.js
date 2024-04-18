/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DoubleOuch extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./DoubleOuch/costumes/costume1.svg", {
        x: 209.1942036836403,
        y: 52.645720476706316,
      }),
    ];

    this.sounds = [new Sound("pop", "./DoubleOuch/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      if (
        this.compare(this.stage.vars.p1Attack, this.stage.vars.p2attack) === 0
      ) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
