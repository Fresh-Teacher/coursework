/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite9/costumes/costume1.svg", {
        x: 12,
        y: 2,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite9/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *startAsClone() {
    this.effects.clear();
    this.goto(this.random(-200, 200), this.random(-180, 180));
    this.visible = true;
    this.size = this.random(50, 100);
    for (let i = 0; i < 100; i++) {
      this.effects.ghost += 1;
      this.size += 1;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      this.moveBehind(1);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.wait(2);
    while (true) {
      yield* this.wait(0.2);
      this.createClone();
      yield;
    }
  }
}
