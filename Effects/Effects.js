/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Effects extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Effects/costumes/costume1.svg", {
        x: 101.5,
        y: 121,
      }),
      new Costume("costume2", "./Effects/costumes/costume2.svg", {
        x: 231.50764616923163,
        y: 56.09891644635729,
      }),
      new Costume("costume3", "./Effects/costumes/costume3.svg", {
        x: 231.50764648063662,
        y: 56.09891722719853,
      }),
      new Costume("costume4", "./Effects/costumes/costume4.svg", {
        x: 231.5076467920416,
        y: 56.09891800803976,
      }),
    ];

    this.sounds = [new Sound("pop", "./Effects/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.effects.pixelate = 25;
  }

  *whenGreenFlagClicked2() {
    for (let i = 0; i < 10; i++) {
      this.moveAhead();
      yield;
    }
  }
}
