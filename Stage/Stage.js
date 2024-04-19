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
        x: 240,
        y: 180,
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop7", "./Stage/costumes/backdrop7.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop8", "./Stage/costumes/backdrop8.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop9", "./Stage/costumes/backdrop9.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop10", "./Stage/costumes/backdrop10.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop11", "./Stage/costumes/backdrop11.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop12", "./Stage/costumes/backdrop12.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop13", "./Stage/costumes/backdrop13.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop14", "./Stage/costumes/backdrop14.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop15", "./Stage/costumes/backdrop15.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop16", "./Stage/costumes/backdrop16.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop17", "./Stage/costumes/backdrop17.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop18", "./Stage/costumes/backdrop18.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("backdrop19", "./Stage/costumes/backdrop19.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [
      new Sound(
        "The Avengers Theme Song.mp3",
        "./Stage/sounds/The Avengers Theme Song.mp3.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "next" }, this.whenIReceiveNext),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
    ];

    this.vars.cap = 0;
    this.vars.iron = 2;
    this.vars.thor = 0;
    this.vars.hulk = 10;
    this.vars.widow = 0;
    this.vars.hawkeye = 0;
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
  }

  *whenGreenFlagClicked2() {
    yield* this.startSound("The Avengers Theme Song.mp3");
  }

  *whenIReceiveNext() {
    if (this.costumeNumber === 13) {
      if (
        this.compare(this.vars.cap, this.vars.hawkeye) > 0 &&
        this.compare(this.vars.cap, this.vars.hulk) > 0 &&
        this.compare(this.vars.cap, this.vars.iron) > 0 &&
        this.compare(this.vars.cap, this.vars.thor) > 0 &&
        this.compare(this.vars.cap, this.vars.widow) > 0
      ) {
        this.costume = "backdrop14";
        this.broadcast("Done");
      }
      if (
        this.compare(this.vars.hawkeye, this.vars.cap) > 0 &&
        this.compare(this.vars.hawkeye, this.vars.hulk) > 0 &&
        this.compare(this.vars.hawkeye, this.vars.thor) > 0 &&
        this.compare(this.vars.hawkeye, this.vars.iron) > 0 &&
        this.compare(this.vars.hawkeye, this.vars.cap) > 0
      ) {
        this.costume = "backdrop19";
        this.broadcast("Done");
      }
      if (
        this.compare(this.vars.hulk, this.vars.cap) > 0 &&
        this.compare(this.vars.hulk, this.vars.hawkeye) > 0 &&
        this.compare(this.vars.hulk, this.vars.widow) > 0 &&
        this.compare(this.vars.hulk, this.vars.thor) > 0 &&
        this.compare(this.vars.hulk, this.vars.iron) > 0
      ) {
        this.costume = "backdrop17";
        this.broadcast("Done");
      }
      if (
        this.compare(this.vars.iron, this.vars.cap) > 0 &&
        this.compare(this.vars.iron, this.vars.thor) > 0 &&
        this.compare(this.vars.iron, this.vars.widow) > 0 &&
        this.compare(this.vars.iron, this.vars.hawkeye) > 0 &&
        this.compare(this.vars.iron, "") > 0
      ) {
        this.costume = "backdrop15";
        this.broadcast("Done");
      }
      if (
        this.compare(this.vars.thor, this.vars.cap) > 0 &&
        this.compare(this.vars.thor, this.vars.hawkeye) > 0 &&
        this.compare(this.vars.thor, this.vars.iron) > 0 &&
        this.compare(this.vars.thor, this.vars.widow) > 0 &&
        this.compare(this.vars.thor, this.vars.hulk) > 0
      ) {
        this.costume = "backdrop16";
        this.broadcast("Done");
      }
      if (
        this.compare(this.vars.widow, this.vars.cap) > 0 &&
        this.compare(this.vars.widow, this.vars.hawkeye) > 0 &&
        this.compare(this.vars.widow, this.vars.hulk) > 0 &&
        this.compare(this.vars.widow, this.vars.iron) > 0 &&
        this.compare(this.vars.widow, this.vars.thor) > 0
      ) {
        this.costume = "backdrop18";
        this.broadcast("Done");
      }
    } else {
      this.costumeNumber++;
    }
  }

  *whenIReceiveStart() {
    this.costume = "backdrop2";
  }

  *whenGreenFlagClicked3() {
    this.vars.cap = 0;
    this.vars.iron = 0;
    this.vars.thor = 0;
    this.vars.hulk = 0;
    this.vars.widow = 0;
    this.vars.hawkeye = 0;
  }
}
