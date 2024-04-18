/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Venom extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Dead", "./Venom/costumes/Dead.png", { x: 122, y: -12 }),
      new Costume(
        "venom black (13)-1",
        "./Venom/costumes/venom black (13)-1.png",
        { x: 160, y: 88 }
      ),
      new Costume(
        "venom black (13)-2",
        "./Venom/costumes/venom black (13)-2.png",
        { x: 200, y: 120 }
      ),
      new Costume(
        "venom black (13)-3",
        "./Venom/costumes/venom black (13)-3.png",
        { x: 178, y: 118 }
      ),
      new Costume(
        "venom black (13)-4",
        "./Venom/costumes/venom black (13)-4.png",
        { x: 182, y: 124 }
      ),
      new Costume("venom PUNCH!", "./Venom/costumes/venom PUNCH!.png", {
        x: 182,
        y: 120,
      }),
      new Costume(
        "venom black (7)-4",
        "./Venom/costumes/venom black (7)-4.png",
        { x: 142, y: 188 }
      ),
      new Costume("venom UPER CUT!", "./Venom/costumes/venom UPER CUT!.png", {
        x: 142,
        y: 180,
      }),
      new Costume(
        "venom black (1)-1",
        "./Venom/costumes/venom black (1)-1.png",
        { x: 156, y: 128 }
      ),
      new Costume(
        "venom black (1)-2",
        "./Venom/costumes/venom black (1)-2.png",
        { x: 156, y: 134 }
      ),
      new Costume(
        "venom black (1)-3",
        "./Venom/costumes/venom black (1)-3.png",
        { x: 200, y: 132 }
      ),
      new Costume(
        "venom black (1)-4",
        "./Venom/costumes/venom black (1)-4.png",
        { x: 200, y: 132 }
      ),
      new Costume("venom INSANE", "./Venom/costumes/venom INSANE.png", {
        x: 200,
        y: 132,
      }),
      new Costume(
        "venom black (1)-6",
        "./Venom/costumes/venom black (1)-6.png",
        { x: 200, y: 136 }
      ),
      new Costume(
        "venom black (1)-7",
        "./Venom/costumes/venom black (1)-7.png",
        { x: 200, y: 142 }
      ),
      new Costume(
        "venom black (1)-8",
        "./Venom/costumes/venom black (1)-8.png",
        { x: 200, y: 146 }
      ),
      new Costume(
        "venom black (1)-9",
        "./Venom/costumes/venom black (1)-9.png",
        { x: 200, y: 140 }
      ),
      new Costume(
        "venom black (1)-10",
        "./Venom/costumes/venom black (1)-10.png",
        { x: 200, y: 132 }
      ),
      new Costume(
        "venom black (10)-1",
        "./Venom/costumes/venom black (10)-1.png",
        { x: 310, y: 122 }
      ),
      new Costume(
        "venom black (10)-2",
        "./Venom/costumes/venom black (10)-2.png",
        { x: 308, y: 134 }
      ),
      new Costume(
        "venom black (10)-3",
        "./Venom/costumes/venom black (10)-3.png",
        { x: 308, y: 60 }
      ),
      new Costume(
        "venom black (10)-4",
        "./Venom/costumes/venom black (10)-4.png",
        { x: 308, y: 74 }
      ),
      new Costume("Stance1", "./Venom/costumes/Stance1.png", { x: 152, y: 96 }),
      new Costume("Stance2", "./Venom/costumes/Stance2.png", { x: 152, y: 88 }),
      new Costume("Stance3", "./Venom/costumes/Stance3.png", { x: 152, y: 66 }),
      new Costume("Stance4", "./Venom/costumes/Stance4.png", { x: 152, y: 64 }),
      new Costume("Stance5", "./Venom/costumes/Stance5.png", { x: 152, y: 58 }),
      new Costume("Stance6", "./Venom/costumes/Stance6.png", { x: 152, y: 56 }),
      new Costume("Stance7", "./Venom/costumes/Stance7.png", { x: 152, y: 54 }),
      new Costume("Stance8", "./Venom/costumes/Stance8.png", { x: 152, y: 58 }),
      new Costume("Stance9", "./Venom/costumes/Stance9.png", { x: 152, y: 66 }),
      new Costume("Stance10", "./Venom/costumes/Stance10.png", {
        x: 152,
        y: 78,
      }),
      new Costume("Stance11", "./Venom/costumes/Stance11.png", {
        x: 152,
        y: 90,
      }),
      new Costume("Stance12", "./Venom/costumes/Stance12.png", {
        x: 152,
        y: 104,
      }),
    ];

    this.sounds = [
      new Sound("mediumpunch", "./Venom/sounds/mediumpunch.wav"),
      new Sound("deafenedpunch", "./Venom/sounds/deafenedpunch.wav"),
      new Sound("Bloody Sounds", "./Venom/sounds/Bloody Sounds.wav"),
      new Sound("Grrrrrrlll..", "./Venom/sounds/Grrrrrrlll...wav"),
      new Sound("Laugh3", "./Venom/sounds/Laugh3.wav"),
      new Sound("Low Whoosh", "./Venom/sounds/Low Whoosh.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2ouch" },
        this.whenIReceiveP2ouch
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2ouch" },
        this.whenIReceiveP2ouch2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "P2Die" }, this.whenIReceiveP2die),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2Die" },
        this.whenIReceiveP2die2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.BROADCAST, { name: "P1die" }, this.whenIReceiveP1die),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2Die" },
        this.whenIReceiveP2die3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2ouch" },
        this.whenIReceiveP2ouch3
      ),
    ];

    this.vars._1 = 0;
    this.vars.x = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.x = 0;
    this.stage.vars.vdamage = -5;
    this.goto(111, -28);
    this.vars._1 = 0;
    this.stage.vars.p2attack = 0;
    this.costume = "Stance1";
    while (true) {
      if (this.toNumber(this.stage.vars.p2attack) === 0) {
        this.costume = "Stance1";
        for (let i = 0; i < 10; i++) {
          yield* this.wait(0.1);
          this.costumeNumber++;
          yield;
        }
      }
      if (this.toNumber(this.stage.vars.p2attack) === 1) {
        this.costume = "venom black (13)-1";
        for (let i = 0; i < 4; i++) {
          yield* this.wait(0.08);
          this.costumeNumber++;
          yield;
        }
        if (this.toNumber(this.stage.vars.difficulty) === 3) {
          this.stage.vars.vdamage = -10;
        } else {
          this.stage.vars.vdamage = -5;
        }
        yield* this.startSound("Low Whoosh");
        if (this.touching(this.sprites["SpiderMan"].andClones())) {
          if (!(this.sprites["SpiderMan"].costumeNumber === 21)) {
            this.broadcast("P1 ouch");
            yield* this.startSound("mediumpunch");
          } else {
            yield* this.playSoundUntilDone("deafenedpunch");
          }
        }
        this.stage.vars.p2attack = 0;
      }
      if (this.toNumber(this.stage.vars.p2attack) === 2) {
        this.costume = "venom black (7)-4";
        yield* this.wait(0.08);
        this.costumeNumber++;
        if (this.toNumber(this.stage.vars.difficulty) === 3) {
          this.stage.vars.vdamage = -20;
        } else {
          this.stage.vars.vdamage = -10;
        }
        yield* this.startSound("Low Whoosh");
        if (this.touching(this.sprites["SpiderMan"].andClones())) {
          if (!(this.sprites["SpiderMan"].costumeNumber === 21)) {
            this.broadcast("P1 ouch");
            yield* this.startSound("mediumpunch");
          } else {
            yield* this.playSoundUntilDone("deafenedpunch");
          }
        }
        this.stage.vars.p2attack = 0;
      }
      if (this.toNumber(this.stage.vars.p2attack) === 3) {
        this.costume = "venom black (10)-1";
        if (this.toNumber(this.stage.vars.difficulty) === 3) {
          this.stage.vars.vdamage = -50;
        } else {
          this.stage.vars.vdamage = -25;
        }
        for (let i = 0; i < 3; i++) {
          yield* this.wait(0.08);
          this.costumeNumber++;
          yield;
        }
        yield* this.startSound("Low Whoosh");
        if (this.touching(this.sprites["SpiderMan"].andClones())) {
          this.broadcast("P1 ouch");
          yield* this.startSound("Bloody Sounds");
        }
        this.stage.vars.p2attack = 0;
      }
      yield;
    }
  }

  *whenIReceiveP2ouch() {
    this.stage.vars.p2attack = "ouch";
    this.stage.vars.p2Health += this.toNumber(this.stage.vars.sdamage);
    while (!(this.toNumber(this.vars._1) === 1)) {
      this.costume = "venom black (13)-2";
      yield;
    }
    this.costume = "Stance1";
    this.stage.vars.p2attack = 0;
    this.vars._1 = 0;
  }

  *whenIReceiveP2ouch2() {
    yield* this.wait(0.5);
    this.vars._1 = 1;
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.p2Health = 100;
    while (true) {
      if (this.compare(this.stage.vars.p2Health, 1) < 0) {
        yield* this.broadcastAndWait("P2Die");
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["SpiderMan"].y - this.y,
          this.sprites["SpiderMan"].x - this.x
        )
      );
      yield;
    }
  }

  *whenIReceiveP2die() {
    yield* this.wait(5);
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveP2die2() {
    while (!(this.compare(this.vars._1, 1) > 0)) {
      this.costume = "Dead";
      yield;
    }
    while (true) {
      if (this.toNumber(this.stage.vars.difficulty) === 3) {
        this.stage.vars.p2attack = 3;
        this.stage.vars.vdamage = -100;
      } else {
        this.costume = "Dead";
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (!(this.toString(this.stage.vars.p2attack) === "ouch")) {
        if (this.toNumber(this.stage.vars.difficulty) === 1) {
          if (
            this.compare(0, this.stage.vars.p2Health) < 0 &&
            this.compare(0, this.stage.vars.p1Health) < 0
          ) {
            yield* this.wait(this.random(1, 3));
            this.stage.vars.p2attack = this.random(1, 3);
          } else {
            while (true) {
              this.stage.vars.p2attack = 0;
              return;
              yield;
            }
          }
        } else {
          if (this.toNumber(this.stage.vars.difficulty) === 2) {
            if (
              this.compare(0, this.stage.vars.p2Health) < 0 &&
              this.compare(0, this.stage.vars.p1Health) < 0
            ) {
              yield* this.wait(this.random(1, 3));
              this.vars.x = this.random(1, 5);
              if (this.toNumber(this.vars.x) === 5) {
                yield* this.glide(0.1, this.sprites["SpiderMan"].x + 100, -28);
                this.stage.vars.p2attack = 3;
              } else {
                this.stage.vars.p2attack = this.random(1, 2);
              }
            } else {
              while (true) {
                this.stage.vars.p2attack = 0;
                return;
                yield;
              }
            }
          } else {
            if (this.toNumber(this.stage.vars.difficulty) === 3) {
              if (
                this.compare(0, this.stage.vars.p2Health) < 0 &&
                this.compare(0, this.stage.vars.p1Health) < 0
              ) {
                yield* this.wait(this.random(0.1, 2));
                yield* this.glide(0.1, this.sprites["SpiderMan"].x + 150, -28);
                this.stage.vars.p2attack = this.random(1, 3);
              } else {
                return;
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveP1die() {
    yield* this.startSound("Laugh3");
    yield* this.wait(4.45);
    if (this.toNumber(this.stage.vars.difficulty) === 3) {
      this.stage.vars.p2attack = 3;
      this.stage.vars.vdamage = -100;
    }
  }

  *whenIReceiveP2die3() {
    this.vars._1 = 0;
    yield* this.wait(1);
    this.vars._1 = 2;
  }

  *whenIReceiveP2ouch3() {
    this.stage.vars.combo++;
    yield* this.wait(2);
    this.stage.vars.combo = 0;
  }
}
