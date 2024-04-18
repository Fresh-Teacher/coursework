/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 162.0269283783784,
        y: 99.01665623123125,
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 162.0269283783784,
        y: 99.01645623123125,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Sprite1/sounds/pop.wav"),
      new Sound("Ready Fight", "./Sprite1/sounds/Ready Fight.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.visible = true;
    this.costume = "costume1";
    yield* this.wait(0.9);
    this.costume = "costume2";
    yield* this.wait(1.2);
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    yield* this.playSoundUntilDone("Ready Fight");
  }
}
