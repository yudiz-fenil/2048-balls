/* START OF COMPILED CODE */

class PreloadText extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__PreloadText"] = this;

		/* START-USER-CTR-CODE */

		this.initialTime = 20;
		this.timeLeft = this.timeLeft;

		this.loading = () => {
			this.gameTimer = this.scene.time.addEvent({
				delay: 1000,
				callback: function () {
					this.timeLeft--;
					let stepWidth = this.energyMask.displayWidth / this.initialTime;
					this.energyMask.x += stepWidth;
					if (this.timeLeft == 0) {
						this.scene.start("Level");
					}
				},
				callbackScope: this,
				loop: true
			});
		}
		// this.loading();

		this.scene.load.on(Phaser.Loader.Events.PROGRESS, p => {
			this.gameObject.text = Math.floor(p * 100) + "%";
			// this.energyMask = this.scene.add.sprite(this.scene.mask_rect.x, this.scene.mask_rect.y, "progress_bar");
			// this.energyMask.visible = false;
			// this.scene.energyBar.mask = new Phaser.Display.Masks.BitmapMask(this.scene, this.energyMask);
		});

		/* END-USER-CTR-CODE */
	}

	/** @returns {PreloadText} */
	static getComponent(gameObject) {
		return gameObject["__PreloadText"];
	}

	/** @type {Phaser.GameObjects.Text} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
