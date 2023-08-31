
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

		// balls_bg_rect_2
		const balls_bg_rect_2 = this.add.rectangle(0, 0, 1080, 1920);
		balls_bg_rect_2.setOrigin(0, 0);
		balls_bg_rect_2.visible = false;
		balls_bg_rect_2.isFilled = true;
		balls_bg_rect_2.fillColor = 7907293;
		balls_bg_rect_2.fillAlpha = 0.2;
		balls_bg_rect_2.strokeColor = 0;
		balls_bg_rect_2.strokeAlpha = 5;
		balls_bg_rect_2.lineWidth = 5;

		// btn_play_button
		const btn_play_button = this.add.image(540, 1213, "Play_Button");

		// btn_music_on
		const btn_music_on = this.add.image(290, 1630, "Music_On");
		btn_music_on.scaleX = 0.8;
		btn_music_on.scaleY = 0.8;

		// btn_sound_on
		const btn_sound_on = this.add.image(540, 1630, "Sound_On");
		btn_sound_on.scaleX = 0.8;
		btn_sound_on.scaleY = 0.8;

		// logoPrefab
		const logoPrefab = new LogoPrefab(this, 540, 540);
		this.add.existing(logoPrefab);

		// btn_info
		const btn_info = this.add.image(790, 1630, "btn_info");
		btn_info.scaleX = 0.8;
		btn_info.scaleY = 0.8;

		this.btn_play_button = btn_play_button;
		this.btn_music_on = btn_music_on;
		this.btn_sound_on = btn_sound_on;
		this.btn_info = btn_info;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_play_button;
	/** @type {Phaser.GameObjects.Image} */
	btn_music_on;
	/** @type {Phaser.GameObjects.Image} */
	btn_sound_on;
	/** @type {Phaser.GameObjects.Image} */
	btn_info;

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
				texture.setScale(0.8, 0.8);
				if (callback) callback();
			}
		});
	}
	jellyFishAnimation = (x, y, targetsX, targetsY, flipX, duration, time) => {
		const jelly = this.add.sprite(x, y, "j1");
		jelly.setFlipX(flipX);
		setTimeout(() => {
			jelly.anims.play("jellyfish");
		}, time);
		const tween = this.tweens.add({
			targets: jelly,
			x: targetsX,
			y: targetsY,
			duration: duration,
			repeat: -1,
			onComplete: () => {
			}
		})
	}
	create() {
		this.jellyFishAnimation(108, 1825, 1900, 500, false, 10000, 0);
		this.jellyFishAnimation(1145, 1266, 0, 500, true, 10000, 0);

		this.jellyFishAnimation(-121, 1260, 1104, -273, false, 10000, 500);
		this.jellyFishAnimation(-70, 1357, 1155, -176, false, 10000, 600);
		this.jellyFishAnimation(-121, 1499, 1104, -34, false, 10000, 750);
		this.jellyFishAnimation(-201, 1434, 1024, -99, false, 10000, 100);
		this.jellyFishAnimation(-240, 1316, 985, -217, false, 10000, 1000);

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
		this.btn_info.setInteractive().on('pointerdown', () => {
			const callback = () => {

			};
			this.btnAnimation(this.btn_info, callback);
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
