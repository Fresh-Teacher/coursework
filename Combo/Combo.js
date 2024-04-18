/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Combo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Combo/costumes/1.svg", {
        x: 45.027658471069316,
        y: 61.48739999999998,
      }),
      new Costume("2", "./Combo/costumes/2.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("3", "./Combo/costumes/3.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("4", "./Combo/costumes/4.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("5", "./Combo/costumes/5.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("6", "./Combo/costumes/6.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("7", "./Combo/costumes/7.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("8", "./Combo/costumes/8.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("9", "./Combo/costumes/9.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("10", "./Combo/costumes/10.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("11", "./Combo/costumes/11.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("12", "./Combo/costumes/12.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("13", "./Combo/costumes/13.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("14", "./Combo/costumes/14.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("15", "./Combo/costumes/15.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("16", "./Combo/costumes/16.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("17", "./Combo/costumes/17.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("18", "./Combo/costumes/18.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("19", "./Combo/costumes/19.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("20", "./Combo/costumes/20.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("21", "./Combo/costumes/21.svg", {
        x: 45.0275920787773,
        y: 62.362457926619214,
      }),
      new Costume("22", "./Combo/costumes/22.svg", {
        x: 45.0275920787773,
        y: 61.67912978361025,
      }),
    ];

    this.sounds = [new Sound("pop", "./Combo/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "P2ouch" },
        this.whenIReceiveP2ouch
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "specialMove" },
        this.whenIReceiveSpecialmove
      ),
    ];

    this.vars.shake = 16;
  }

  *whenGreenFlagClicked() {
    this.goto(-142, 92);
    this.visible = false;
    while (true) {
      this.visible = true;
      if (this.compare(this.stage.vars.combo, 0) > 0) {
        this.costume = this.stage.vars.combo;
        this.size = 50 + this.toNumber(this.stage.vars.combo) * 5;
        this.effects.color = this.toNumber(this.stage.vars.combo) * -10;
        this.costume = this.stage.vars.combo;
        if (this.compare(this.stage.vars.combo, 10) > 0) {
          this.vars.shake = this.random(10, 20);
          this.x += this.toNumber(this.vars.shake);
          this.y += this.toNumber(this.vars.shake);
          yield* this.wait(0.01);
          this.x += -1 * this.toNumber(this.vars.shake);
          this.y += -1 * this.toNumber(this.vars.shake);
        }
      } else {
        this.direction = 90;
        this.visible = false;
        this.costume = 1;
      }
      yield;
    }
  }

  *whenIReceiveP2ouch() {
    if (this.compare(this.stage.vars.combo, 5) > 0) {
      this.direction += 3.5;
    }
  }

  *whenIReceiveSpecialmove() {
    this.visible = true;
    this.size = 100;
    while (true) {
      this.costume = 22;
      yield;
    }
  }
}
