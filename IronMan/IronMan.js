/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class IronMan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./IronMan/costumes/costume1.svg", {
        x: 56,
        y: 60,
      }),
    ];

    this.sounds = [new Sound("pop", "./IronMan/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "Done" }, this.whenIReceiveDone),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.vars.iron++;
    this.broadcast("next");
  }

  *whenIReceiveDone() {
    this.visible = false;
  }
}
