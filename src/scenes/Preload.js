
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(540, 960, "background");

		// progress
		const progress = this.add.text(540, 1225, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "100px" });

		// logo
		const logo = this.add.image(540, 540, "logo");
		logo.scaleX = 0.8;
		logo.scaleY = 0.8;

		// energyContainer
		const energyContainer = this.add.image(540, 1660, "progress_bar_base");
		energyContainer.visible = false;

		// energyBar
		const energyBar = this.add.image(540, 1660, "progress_bar");
		energyBar.visible = false;

		// text
		const text = this.add.text(540, 1572, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "LOADING...";
		text.setStyle({ "align": "center", "fontSize": "44px", "stroke": "#2B5873", "strokeThickness":5,"shadow.color": "#2B5873", "shadow.blur":2,"shadow.stroke":true,"shadow.fill":true});

		// mask_rect
		const mask_rect = this.add.rectangle(539.5, 1659, 707, 48);
		mask_rect.visible = false;
		mask_rect.fillAlpha = 0;
		mask_rect.isStroked = true;
		mask_rect.strokeColor = 0;

		// progress (components)
		new PreloadText(progress);

		this.energyContainer = energyContainer;
		this.energyBar = energyBar;
		this.mask_rect = mask_rect;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	energyContainer;
	/** @type {Phaser.GameObjects.Image} */
	energyBar;
	/** @type {Phaser.GameObjects.Rectangle} */
	mask_rect;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => this.scene.start("Home"));
		// this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {

		// });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
