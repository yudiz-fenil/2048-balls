
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(540, 960, "background");

		// logo
		this.add.image(540, 574, "logo");

		// btn_play_button
		const btn_play_button = this.add.image(540, 1380, "Play_Button");

		this.btn_play_button = btn_play_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_play_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		this.btn_play_button.setInteractive().on('pointerdown', () => {
			this.tweens.add({
				targets: this.btn_play_button,
				scaleX: "*=0.8",
				scaleY: "*=0.8",
				duration: 80,
				yoyo: true,
				onComplete: () => {
					this.scene.stop("Home");
					this.scene.start("Level");
				}
			});
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
