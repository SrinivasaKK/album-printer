import Renderer from "./render";
import log from "./log";
import { STATIC_TEXTS } from "./constants";
export default class Events extends Renderer {
  constructor() {
    super();
    this.importButton = document.getElementById("import");
    this.importButton.onclick = this.importJson.bind(this);
  }
  scalePhoto(scale) {
    this.scale += Number(scale);
    this.draw(this.context.canvas, this.img, this.x, this.y, this.scale);
  }
  movePhoto(x, y) {
    this.x += Number(x);
    this.y += Number(y);
    this.draw(this.context.canvas, this.img, this.x, this.y, this.scale);
  }
  importJson() {
    const imgLoaded = JSON.parse(
      sessionStorage.getItem(STATIC_TEXTS.IMAGE_KEY)
    );

    if (imgLoaded) {
      this.img.src = imgLoaded.src;
      this.printDescription = JSON.parse(
        sessionStorage.getItem(STATIC_TEXTS.SESSION_STORAGE_KEY)
      );
      this.file.name = sessionStorage.getItem(STATIC_TEXTS.FILE_NAME_KEY);
      this.scale = Number(sessionStorage.getItem(STATIC_TEXTS.SCALE_KEY));
      this.x = Number(sessionStorage.getItem(STATIC_TEXTS.X_COR_KEY));
      this.y = Number(sessionStorage.getItem(STATIC_TEXTS.Y_COR_KEY));

      this.renderImage();
      log("");
      log(JSON.stringify(this.printDescription));
    } else {
      log("");
      log(STATIC_TEXTS.NO_IMG_MSG);
    }
  }

  save() {
    sessionStorage.setItem(
      STATIC_TEXTS.SESSION_STORAGE_KEY,
      JSON.stringify(this.printDescription)
    );
    // clear old values before printing new one
    log("");
    log(JSON.stringify(this.printDescription));
  }

  bindControls() {
    this.generateButton = document.getElementById("save");
    this.generateButton.onclick = this.save.bind(this);
    this.movePhotoLeftButton = document.getElementById("move-left");
    this.movePhotoLeftButton.onclick = this.movePhoto.bind(this, -50, 0);
    this.movePhotoRightButton = document.getElementById("move-right");
    this.movePhotoRightButton.onclick = this.movePhoto.bind(this, +50, 0);
    this.movePhotoUpButton = document.getElementById("move-up");
    this.movePhotoUpButton.onclick = this.movePhoto.bind(this, 0, +50);
    this.movePhotoDownButton = document.getElementById("move-down");
    this.movePhotoDownButton.onclick = this.movePhoto.bind(this, 0, -50);
    this.scalePhotoDownButton = document.getElementById("scale-down");
    this.scalePhotoDownButton.onclick = this.scalePhoto.bind(this, -0.5);
    this.scalePhotoUpButton = document.getElementById("scale-up");
    this.scalePhotoUpButton.onclick = this.scalePhoto.bind(this, +0.5);
    this.importButton = document.getElementById("import");
    this.importButton.onclick = this.importJson.bind(this);
  }
}
