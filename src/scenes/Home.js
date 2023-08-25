
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
		const logo = this.add.image(540, 540, "logo");
		logo.scaleX = 0.8;
		logo.scaleY = 0.8;

		// btn_play_button
		const btn_play_button = this.add.image(540, 1213, "Play_Button");

		// btn_music_on
		const btn_music_on = this.add.image(290, 1630, "Music_On");
		btn_music_on.scaleX = 0.8;
		btn_music_on.scaleY = 0.8;

		// btn_sound_on
		const btn_sound_on = this.add.image(790, 1630, "Sound_On");
		btn_sound_on.scaleX = 0.8;
		btn_sound_on.scaleY = 0.8;

		this.btn_play_button = btn_play_button;
		this.btn_music_on = btn_music_on;
		this.btn_sound_on = btn_sound_on;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_play_button;
	/** @type {Phaser.GameObjects.Image} */
	btn_music_on;
	/** @type {Phaser.GameObjects.Image} */
	btn_sound_on;

	/* START-USER-CODE */

	// Write your code here


	btnAnimation = (texture, callback) => {
		this.tweens.add({
			targets: texture,
			scaleX: "*=0.8",
			scaleY: "*=0.8",
			duration: 80,
			yoyo: true,
			onComplete: () => {
				if (callback) callback();
			}
		});
	}

	create() {

		this.editorCreate();
		this.isMusicPlaying = true;
		this.isSoundPlaying = true;
		this.btn_play_button.setInteractive().on('pointerdown', () => {
			const callback = () => {
				this.scene.stop("Home");
				this.scene.start("Level");
			}
			this.btnAnimation(this.btn_play_button, callback);
		})

		this.btn_music_on.setInteractive().on('pointerdown', () => {
			const callback = () => {
				if (this.isMusicPlaying) {
					this.isMusicPlaying = false;
					this.btn_music_on.setTexture("Music_Off")
				} else {
					this.isMusicPlaying = true;
					this.btn_music_on.setTexture("Music_On")
				}
			};
			this.btnAnimation(this.btn_music_on, callback);
		})
		this.btn_sound_on.setInteractive().on('pointerdown', () => {
			const callback = () => {
				if (this.isSoundPlaying) {
					this.isSoundPlaying = false;
					this.btn_sound_on.setTexture("Sound_Off")
				} else {
					this.isSoundPlaying = true;
					this.btn_sound_on.setTexture("Sound_On")
				}
			};
			this.btnAnimation(this.btn_sound_on, callback);
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
