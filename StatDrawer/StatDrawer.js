/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class StatDrawer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("blank", "./StatDrawer/costumes/blank.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("meow", "./StatDrawer/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];

    this.vars.penshrink = -2;
    this.vars.statLength = 150;
    this.vars.statusOne = 40;
    this.vars.statusTwo = 75;
    this.vars.statusThree = 20;
  }

  *drawStatBarXYLenHeightPercent(xpos, ypos, length, height, percent) {
    this.penDown = false;
    /* TODO: Implement pen_setPenShadeToNumber */ null;
    this.vars.penshrink = -1;
    if (this.compare(height, 7) > 0) {
      this.vars.penshrink = -2;
    } else {
      if (this.compare(height, 6) < 0) {
        /* TODO: Implement pen_setPenShadeToNumber */ null;
      }
    }
    /* TODO: Implement pen_setPenHueToNumber */ null;
    this.penSize = this.toNumber(height);
    this.goto(this.toNumber(xpos), this.toNumber(ypos));
    this.penDown = true;
    this.x += this.toNumber(length);
    this.penDown = false;
    this.penSize += this.toNumber(this.vars.penshrink);
    this.penColor = Color.rgb(26, 26, 26);
    this.goto(this.toNumber(xpos), this.toNumber(ypos));
    this.penDown = true;
    if (this.compare(height, 6) < 0) {
      this.vars.penshrink = 1;
      this.penSize = 1;
      this.y += 1;
      this.x += this.toNumber(length);
      this.goto(this.toNumber(xpos), this.toNumber(ypos));
    }
    this.x += this.toNumber(length);
    this.penDown = false;
    /* TODO: Implement pen_setPenShadeToNumber */ null;
    if (this.compare(percent, 0) > 0) {
      this.penSize += this.toNumber(this.vars.penshrink);
      if (this.compare(percent, 70) < 0) {
        /* TODO: Implement pen_setPenHueToNumber */ null;
      } else {
        /* TODO: Implement pen_setPenHueToNumber */ null;
      }
      this.vars.statLength =
        (this.toNumber(length) + this.toNumber(height) * 0.31) *
          (this.toNumber(percent) * 0.01) -
        this.toNumber(height) * 0.31;
      this.goto(this.toNumber(xpos), this.toNumber(ypos));
      if (this.compare(this.vars.statLength, 0) < 0) {
        this.x += this.toNumber(this.vars.statLength);
        this.penSize += this.toNumber(this.vars.statLength) * 2;
        this.penDown = true;
      } else {
        this.penDown = true;
        this.x += this.toNumber(this.vars.statLength);
      }
      this.penDown = false;
    }
  }

  *whenGreenFlagClicked() {
    this.vars.statusOne = 40;
    this.vars.statusTwo = 75;
    this.vars.statusThree = 20;
    while (true) {
      this.clearPen();
      yield* this.drawStatBarXYLenHeightPercent(
        -185,
        150,
        150,
        18,
        this.stage.vars.p1Health
      );
      yield* this.drawStatBarXYLenHeightPercent(
        39,
        152,
        150,
        18,
        this.stage.vars.p2Health
      );
      yield;
    }
  }
}
