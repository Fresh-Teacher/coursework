/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 322.927855,
        y: 284.65328000000005,
      }),
    ];

    this.sounds = [
      new Sound("Win", "./Stage/sounds/Win.wav"),
      new Sound("Lose", "./Stage/sounds/Lose.wav"),
      new Sound("Cymbal Echo", "./Stage/sounds/Cymbal Echo.wav"),
      new Sound("Drive Around", "./Stage/sounds/Drive Around.wav"),
      new Sound("Drum Jam", "./Stage/sounds/Drum Jam.wav"),
      new Sound("Drum Funky", "./Stage/sounds/Drum Funky.wav"),
      new Sound("Drum Satellite", "./Stage/sounds/Drum Satellite.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "P2Die" }, this.whenIReceiveP2die),
      new Trigger(Trigger.BROADCAST, { name: "P1die" }, this.whenIReceiveP1die),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];

    this.vars.p1Health = 100;
    this.vars.p2Health = 100;
    this.vars.p2attack = 3;
    this.vars.vdamage = -5;
    this.vars.sdamage = -5;
    this.vars.difficulty = 3;
    this.vars.p1Attack = "idle";
    this.vars.combo = 0;

    this.watchers.difficulty = new Watcher({
      label: "difficulty",
      style: "slider",
      visible: true,
      value: () => this.vars.difficulty,
      setValue: (value) => {
        this.vars.difficulty = value;
      },
      step: 1,
      min: 1,
      max: 3,
      x: 583,
      y: -142,
    });
  }

  *whenGreenFlagClicked() {
    this.effects.pixelate = 15;
  }

  *whenIReceiveP2die() {
    this.audioEffects.pitch = -100;
    yield* this.wait(0.5);
    yield* this.startSound("Win");
  }

  *whenIReceiveP1die() {
    yield* this.wait(0.5);
    yield* this.startSound("Lose");
  }

  *whenGreenFlagClicked2() {
    this.audioEffects.volume = 100;
    this.audioEffects.clear();
    yield* this.wait(2.1);
    while (true) {
      if (
        this.compare(this.vars.p1Health, 0) > 0 &&
        this.compare(this.vars.p2Health, 0) > 0
      ) {
        yield* this.playSoundUntilDone(this.random(3, 7));
      } else {
        return;
      }
      yield;
    }
  }
}
