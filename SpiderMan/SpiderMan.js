/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SpiderMan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dead", "./SpiderMan/costumes/Dead.png", { x: 114, y: 29 }),
      new Costume("Standing", "./SpiderMan/costumes/Standing.png", {
        x: 110,
        y: 96,
      }),
      new Costume("Standing2", "./SpiderMan/costumes/Standing2.png", {
        x: 106,
        y: 94,
      }),
      new Costume("Standing3", "./SpiderMan/costumes/Standing3.png", {
        x: 104,
        y: 94,
      }),
      new Costume("Standing4", "./SpiderMan/costumes/Standing4.png", {
        x: 102,
        y: 94,
      }),
      new Costume("Standing5", "./SpiderMan/costumes/Standing5.png", {
        x: 106,
        y: 94,
      }),
      new Costume("Standing6", "./SpiderMan/costumes/Standing6.png", {
        x: 112,
        y: 98,
      }),
      new Costume("Standing7", "./SpiderMan/costumes/Standing7.png", {
        x: 112,
        y: 96,
      }),
      new Costume("Walking", "./SpiderMan/costumes/Walking.png", {
        x: 80,
        y: 90,
      }),
      new Costume("Spiderman_20-1", "./SpiderMan/costumes/Spiderman_20-1.png", {
        x: 86,
        y: 90,
      }),
      new Costume("Spiderman_20-2", "./SpiderMan/costumes/Spiderman_20-2.png", {
        x: 82,
        y: 92,
      }),
      new Costume("Spiderman_20-3", "./SpiderMan/costumes/Spiderman_20-3.png", {
        x: 76,
        y: 90,
      }),
      new Costume("Spiderman_20-4", "./SpiderMan/costumes/Spiderman_20-4.png", {
        x: 78,
        y: 90,
      }),
      new Costume("Spiderman_20-5", "./SpiderMan/costumes/Spiderman_20-5.png", {
        x: 80,
        y: 90,
      }),
      new Costume("Spiderman_20-6", "./SpiderMan/costumes/Spiderman_20-6.png", {
        x: 80,
        y: 90,
      }),
      new Costume("Spiderman_20-7", "./SpiderMan/costumes/Spiderman_20-7.png", {
        x: 78,
        y: 90,
      }),
      new Costume("Spiderman_20-8", "./SpiderMan/costumes/Spiderman_20-8.png", {
        x: 76,
        y: 90,
      }),
      new Costume("Spiderman_20-9", "./SpiderMan/costumes/Spiderman_20-9.png", {
        x: 74,
        y: 90,
      }),
      new Costume("Walking222", "./SpiderMan/costumes/Walking222.png", {
        x: 72,
        y: 90,
      }),
      new Costume("Walking111", "./SpiderMan/costumes/Walking111.png", {
        x: 76,
        y: 88,
      }),
      new Costume("Block", "./SpiderMan/costumes/Block.png", { x: 110, y: 30 }),
      new Costume("Jump", "./SpiderMan/costumes/Jump.png", { x: 100, y: 132 }),
      new Costume("Jump2", "./SpiderMan/costumes/Jump2.png", { x: 86, y: 28 }),
      new Costume("Jump3", "./SpiderMan/costumes/Jump3.png", { x: 118, y: 90 }),
      new Costume("Ouch", "./SpiderMan/costumes/Ouch.png", { x: 124, y: 100 }),
      new Costume("Punching", "./SpiderMan/costumes/Punching.png", {
        x: 112,
        y: 56,
      }),
      new Costume("Punching2", "./SpiderMan/costumes/Punching2.png", {
        x: 118,
        y: 54,
      }),
      new Costume("Punching3", "./SpiderMan/costumes/Punching3.png", {
        x: 114,
        y: 56,
      }),
      new Costume(
        "Spiderman_2100-0",
        "./SpiderMan/costumes/Spiderman_2100-0.png",
        { x: 114, y: 70 }
      ),
      new Costume(
        "Spiderman_2100-1",
        "./SpiderMan/costumes/Spiderman_2100-1.png",
        { x: 116, y: 72 }
      ),
      new Costume(
        "Spiderman_2100-2",
        "./SpiderMan/costumes/Spiderman_2100-2.png",
        { x: 116, y: 74 }
      ),
      new Costume(
        "Spiderman_2100-9",
        "./SpiderMan/costumes/Spiderman_2100-9.png",
        { x: 116, y: 74 }
      ),
      new Costume(
        "Spiderman_2100-8",
        "./SpiderMan/costumes/Spiderman_2100-8.png",
        { x: 116, y: 74 }
      ),
      new Costume(
        "Spiderman_2100-7",
        "./SpiderMan/costumes/Spiderman_2100-7.png",
        { x: 116, y: 74 }
      ),
      new Costume("headshot", "./SpiderMan/costumes/headshot.png", {
        x: 100,
        y: 106,
      }),
      new Costume(
        "Spiderman_220-1",
        "./SpiderMan/costumes/Spiderman_220-1.png",
        { x: 94, y: 108 }
      ),
      new Costume(
        "Spiderman_220-2",
        "./SpiderMan/costumes/Spiderman_220-2.png",
        { x: 94, y: 92 }
      ),
      new Costume(
        "Spiderman_220-3",
        "./SpiderMan/costumes/Spiderman_220-3.png",
        { x: 134, y: 86 }
      ),
      new Costume(
        "Spiderman_220-4",
        "./SpiderMan/costumes/Spiderman_220-4.png",
        { x: 122, y: 110 }
      ),
      new Costume(
        "Spiderman_220-5",
        "./SpiderMan/costumes/Spiderman_220-5.png",
        { x: 82, y: 110 }
      ),
      new Costume(
        "Spiderman_220-6",
        "./SpiderMan/costumes/Spiderman_220-6.png",
        { x: 82, y: 110 }
      ),
      new Costume(
        "Spiderman_220-7",
        "./SpiderMan/costumes/Spiderman_220-7.png",
        { x: 76, y: 96 }
      ),
      new Costume("Uppercut", "./SpiderMan/costumes/Uppercut.png", {
        x: 108,
        y: 84,
      }),
      new Costume(
        "Spiderman_210-1",
        "./SpiderMan/costumes/Spiderman_210-1.png",
        { x: 146, y: 88 }
      ),
      new Costume(
        "Spiderman_210-2",
        "./SpiderMan/costumes/Spiderman_210-2.png",
        { x: 96, y: 136 }
      ),
      new Costume(
        "Spiderman_210-3",
        "./SpiderMan/costumes/Spiderman_210-3.png",
        { x: 80, y: 136 }
      ),
      new Costume(
        "Spiderman_210-4",
        "./SpiderMan/costumes/Spiderman_210-4.png",
        { x: 80, y: 136 }
      ),
      new Costume(
        "Spiderman_210-5",
        "./SpiderMan/costumes/Spiderman_210-5.png",
        { x: 76, y: 134 }
      ),
      new Costume(
        "Spiderman_220-9",
        "./SpiderMan/costumes/Spiderman_220-9.png",
        { x: 100, y: 106 }
      ),
      new Costume("uppercutlast", "./SpiderMan/costumes/uppercutlast.png", {
        x: 94,
        y: 108,
      }),
      new Costume(
        "Spiderman_194-1",
        "./SpiderMan/costumes/Spiderman_194-1.png",
        { x: 72, y: 148 }
      ),
      new Costume(
        "Spiderman_194-0",
        "./SpiderMan/costumes/Spiderman_194-0.png",
        { x: 76, y: 114 }
      ),
      new Costume(
        "Spiderman_194-3",
        "./SpiderMan/costumes/Spiderman_194-3.png",
        { x: 72, y: 114 }
      ),
      new Costume("triplepunch3", "./SpiderMan/costumes/triplepunch3.png", {
        x: 114,
        y: 56,
      }),
      new Costume("triplepunch", "./SpiderMan/costumes/triplepunch.png", {
        x: 118,
        y: 66,
      }),
      new Costume("triplepunch4", "./SpiderMan/costumes/triplepunch4.png", {
        x: 118,
        y: 64,
      }),
      new Costume("triplepunch2", "./SpiderMan/costumes/triplepunch2.png", {
        x: 118,
        y: 60,
      }),
    ];

    this.sounds = [
      new Sound("hitpunch", "./SpiderMan/sounds/hitpunch.wav"),
      new Sound("hitkick", "./SpiderMan/sounds/hitkick.wav"),
      new Sound("homerun", "./SpiderMan/sounds/homerun.wav"),
      new Sound("hitslash", "./SpiderMan/sounds/hitslash.wav"),
      new Sound("Grunt", "./SpiderMan/sounds/Grunt.wav"),
      new Sound("Spiderman_194-0", "./SpiderMan/sounds/Spiderman_194-0.wav"),
      new Sound("explosion", "./SpiderMan/sounds/explosion.wav"),
      new Sound("Low Whoosh", "./SpiderMan/sounds/Low Whoosh.wav"),
      new Sound("Low Whoosh2", "./SpiderMan/sounds/Low Whoosh2.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.BROADCAST, { name: "P2Die" }, this.whenIReceiveP2die),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1 jump" },
        this.whenIReceiveP1Jump
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1 ouch" },
        this.whenIReceiveP1Ouch
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1 ouch" },
        this.whenIReceiveP1Ouch2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(Trigger.BROADCAST, { name: "P1die" }, this.whenIReceiveP1die),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1die" },
        this.whenIReceiveP1die2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P1die" },
        this.whenIReceiveP1die3
      ),
    ];

    this.vars.p1Yspeed = 0;
    this.vars._1 = 5;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (
        this.compare(this.stage.vars.p1Health, 0) > 0 &&
        this.compare(this.stage.vars.p2Health, 0) > 0
      ) {
        this.x +=
          10 *
          (this.toNumber(this.keyPressed("d")) -
            this.toNumber(this.keyPressed("a")));
        if (this.keyPressed("d") || this.keyPressed("a")) {
          this.direction =
            this.toNumber(this.keyPressed("d")) -
            this.toNumber(this.keyPressed("a"));
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.sdamage = -5;
    this.stage.vars.p1Health = 100;
    this.moveAhead();
    this.goto(-114, -55);
  }

  *whenGreenFlagClicked3() {
    this.vars.p1Yspeed = 0;
    this.stage.vars.p1Attack = "idle";
    while (true) {
      if (this.toString(this.stage.vars.p1Attack) === "triplePunch") {
        this.stage.vars.sdamage = -20;
        this.costume = "triplepunch3";
        yield* this.wait(0.1);
        this.costume = "triplepunch";
        for (let i = 0; i < 3; i++) {
          yield* this.startSound("Low Whoosh");
          yield* this.wait(0.15);
          yield;
        }
        if (this.touching(this.sprites["Venom"].andClones())) {
          this.broadcast("P2ouch");
          for (let i = 0; i < 3; i++) {
            yield* this.startSound("hitpunch");
            yield* this.wait(0.1);
            yield;
          }
        }
        yield* this.wait(0.1);
        this.costume = "triplepunch4";
        yield* this.wait(0.01);
        this.costume = "triplepunch2";
        this.costume = "Standing";
        this.stage.vars.p1Attack = "idle";
      }
      if (this.toString(this.stage.vars.p1Attack) === "uppercut") {
        this.stage.vars.sdamage = -10;
        yield* this.startSound("Low Whoosh");
        if (this.touching(this.sprites["Venom"].andClones())) {
          this.broadcast("P2ouch");
          yield* this.startSound("hitkick");
        }
        this.costume = "Uppercut";
        for (let i = 0; i < 7; i++) {
          yield* this.wait(0.01);
          this.costumeNumber++;
          yield;
        }
        this.stage.vars.p1Attack = "idle";
      }
      if (this.toString(this.stage.vars.p1Attack) === "headshot") {
        this.stage.vars.sdamage = -20;
        yield* this.startSound("Low Whoosh2");
        if (this.touching(this.sprites["Venom"].andClones())) {
          this.broadcast("P2ouch");
          yield* this.startSound("hitpunch");
        }
        this.costume = "headshot";
        for (let i = 0; i < 8; i++) {
          yield* this.wait(0.01);
          this.costumeNumber++;
          yield;
        }
        if (this.touching(this.sprites["Venom"].andClones())) {
          yield* this.wait(0.15);
          yield* this.playSoundUntilDone("hitslash");
        }
        this.stage.vars.p1Attack = "idle";
      }
      if (this.toString(this.stage.vars.p1Attack) === "punch") {
        this.stage.vars.sdamage = -10;
        yield* this.startSound("Low Whoosh");
        if (this.touching(this.sprites["Venom"].andClones())) {
          this.broadcast("P2ouch");
          yield* this.startSound("hitpunch");
        }
        this.costume = "Punching";
        for (let i = 0; i < 2; i++) {
          yield* this.wait(0.1);
          this.costumeNumber++;
          yield;
        }
        this.stage.vars.p1Attack = "idle";
      }
      if (this.toString(this.stage.vars.p1Attack) === "walk") {
        this.costume = "Walking";
        if (this.y === -55) {
          while (!!(this.keyPressed("a") || this.keyPressed("d"))) {
            if (this.costume.name === "Walking111") {
              this.costume = "Walking";
            } else {
              this.costumeNumber++;
            }
            yield;
          }
        }
        this.stage.vars.p1Attack = "idle";
      }
      if (this.toString(this.stage.vars.p1Attack) === "idle") {
        this.costume = "Standing";
        while (!!(this.toString(this.stage.vars.p1Attack) === "idle")) {
          if (this.costume.name === "Standing7") {
            this.costume = "Standing";
          } else {
            this.costumeNumber++;
            yield* this.wait(0.1);
          }
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (
        this.compare(this.stage.vars.p1Health, 0) > 0 &&
        this.compare(this.stage.vars.p2Health, 0) > 0
      ) {
        if (this.y === -55) {
          if (!(this.toString(this.stage.vars.p1Attack) === "ouch")) {
            if (this.keyPressed("d") || this.keyPressed("a")) {
              this.stage.vars.p1Attack = "walk";
            }
            if (this.keyPressed("right arrow")) {
              this.stage.vars.p1Attack = "punch";
            }
            if (this.keyPressed("down arrow")) {
              this.stage.vars.p1Attack = "headshot";
            }
            if (this.keyPressed("up arrow")) {
              this.stage.vars.p1Attack = "uppercut";
            }
            if (this.keyPressed("left arrow")) {
              this.stage.vars.p1Attack = "block";
              while (!!this.keyPressed("left arrow")) {
                this.costume = "Block";
                yield;
              }
              this.stage.vars.p1Attack = "idle";
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveP2die() {
    this.stage.vars.p1Attack = "Winner!?";
    yield* this.startSound("Spiderman_194-0");
    while (true) {
      if (this.compare(this.stage.vars.p1Health, 1) > 0) {
        this.costume = "Spiderman_194-1";
      }
      yield;
    }
  }

  *whenIReceiveP1Jump() {
    if (this.compare(this.stage.vars.p1Health, 50) > 0) {
      this.stage.vars.p1Attack = "jump";
      this.vars.p1Yspeed = 20;
      yield* this.startSound("Grunt");
      this.costume = "Jump";
      yield* this.wait(0.25);
      this.costume = "Jump2";
      yield* this.wait(0.2);
      this.costume = "Jump3";
      while (!(this.y === -55)) {
        yield;
      }
      this.costume = "Standing";
      this.stage.vars.p1Attack = "idle";
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      this.y += this.toNumber(this.vars.p1Yspeed);
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (!(this.compare(this.y, -54) < 0)) {
        while (!(this.compare(this.y, -54) < 0)) {
          this.vars.p1Yspeed--;
          yield;
        }
        this.vars.p1Yspeed = 0;
        this.y = -55;
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (
        this.compare(this.stage.vars.p1Health, 0) > 0 &&
        this.compare(this.stage.vars.p2Health, 0) > 0
      ) {
        if (this.keyPressed("w")) {
          if (this.toString(this.stage.vars.p1Attack) === "idle") {
            this.broadcast("P1 jump");
            while (!(this.toString(this.stage.vars.p1Attack) === "idle")) {
              yield;
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveP1Ouch() {
    if (this.compare(this.stage.vars.p1Health, 0) > 0) {
      this.stage.vars.p1Attack = "ouch";
      this.vars._1 = 0;
      this.stage.vars.p1Health += this.toNumber(this.stage.vars.vdamage);
      while (!(this.toNumber(this.vars._1) === 1)) {
        this.costume = "Ouch";
        yield;
      }
      this.costume = "Standing";
      this.vars._1 = 0;
      this.stage.vars.p1Attack = "idle";
    }
  }

  *whenIReceiveP1Ouch2() {
    if (this.compare(this.stage.vars.p1Health, 0) > 0) {
      yield* this.wait(0.5);
      this.vars._1 = 1;
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      if (this.compare(this.stage.vars.p1Health, 1) < 0) {
        yield* this.broadcastAndWait("P1die");
      }
      yield;
    }
  }

  *whenIReceiveP1die() {
    yield* this.wait(5);
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveP1die2() {
    this.vars.p1Yspeed = 15;
    this.vars._1 = 5;
    yield* this.wait(0.7);
    while (true) {
      while (!(this.compare(this.y, -55) < 0)) {
        this.x -= 1;
        this.vars.p1Yspeed = -4;
        yield;
      }
      this.vars.p1Yspeed = 0;
      yield;
    }
  }

  *whenIReceiveP1die3() {
    while (true) {
      this.costume = "Dead";
      yield;
    }
  }
}
