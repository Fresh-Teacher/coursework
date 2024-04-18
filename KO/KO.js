/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class KO extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./KO/costumes/costume1.svg", {
        x: 229.72972999999996,
        y: 148.1835939744402,
      }),
      new Costume("costume2", "./KO/costumes/costume2.svg", {
        x: 229.72972999999993,
        y: 148.1835939744402,
      }),
    ];

    this.sounds = [new Sound("pop", "./KO/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "P2Die" }, this.whenIReceiveP2die),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "P1die" }, this.whenIReceiveP1die),
    ];
  }

  *whenIReceiveP2die() {
    this.moveAhead();
    this.costume = "costume1";
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.goto(19, 6);
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.effects.pixelate = 25;
  }

  *whenIReceiveP1die() {
    this.moveAhead();
    this.costume = "costume2";
    this.visible = true;
  }
}
