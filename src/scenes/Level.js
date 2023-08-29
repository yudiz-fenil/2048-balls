
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_body
		const container_body = this.add.container(0, 0);

		// background
		const background = this.add.image(540, 960, "background");
		background.visible = false;
		container_body.add(background);

		// balls_bg_rect_2
		const balls_bg_rect_2 = this.add.rectangle(0, 0, 1080, 1920);
		balls_bg_rect_2.setOrigin(0, 0);
		balls_bg_rect_2.isFilled = true;
		balls_bg_rect_2.fillColor = 7907293;
		balls_bg_rect_2.fillAlpha = 0.2;
		balls_bg_rect_2.strokeColor = 0;
		balls_bg_rect_2.strokeAlpha = 5;
		balls_bg_rect_2.lineWidth = 5;
		container_body.add(balls_bg_rect_2);

		// balls_bg_rect
		const balls_bg_rect = this.add.rectangle(-14, 285, 1108, 1482);
		balls_bg_rect.setOrigin(0, 0);
		balls_bg_rect.isFilled = true;
		balls_bg_rect.fillColor = 0;
		balls_bg_rect.fillAlpha = 0.25;
		balls_bg_rect.strokeColor = 0;
		balls_bg_rect.strokeAlpha = 5;
		balls_bg_rect.lineWidth = 5;
		container_body.add(balls_bg_rect);

		// world_rect
		const world_rect = this.add.rectangle(21, 293, 1036, 1451);
		world_rect.setOrigin(0, 0);
		world_rect.visible = false;
		world_rect.isStroked = true;
		world_rect.strokeColor = 0;
		world_rect.strokeAlpha = 5;
		world_rect.lineWidth = 5;
		container_body.add(world_rect);

		// container_footer
		const container_footer = this.add.container(509, 1840);

		// balls_bg_rect_1
		const balls_bg_rect_1 = this.add.rectangle(31, 0, 1108, 1482);
		balls_bg_rect_1.setOrigin(0.5, 0);
		balls_bg_rect_1.isFilled = true;
		balls_bg_rect_1.fillColor = 0;
		balls_bg_rect_1.fillAlpha = 0.25;
		balls_bg_rect_1.strokeColor = 0;
		balls_bg_rect_1.strokeAlpha = 5;
		balls_bg_rect_1.lineWidth = 5;
		container_footer.add(balls_bg_rect_1);

		// lock_base
		const lock_base = this.add.image(31, -21, "yellow_border");
		lock_base.setOrigin(0.5, 0);
		container_footer.add(lock_base);

		// lock_ball
		const lock_ball = this.add.image(23, 0, "b4");
		lock_ball.scaleX = 0.65;
		lock_ball.scaleY = 0.65;
		container_footer.add(lock_ball);

		// bubble_lock
		const bubble_lock = this.add.image(0, 0, "bubble_lock");
		container_footer.add(bubble_lock);

		// container_ball_tracker
		const container_ball_tracker = this.add.container(970, 216);

		// ball_tracker_img
		const ball_tracker_img = this.add.image(0, 0, "b2");
		ball_tracker_img.name = "ball_tracker_img";
		ball_tracker_img.scaleX = 0.8;
		ball_tracker_img.scaleY = 0.8;
		container_ball_tracker.add(ball_tracker_img);

		// shoot_ball_bubble
		const shoot_ball_bubble = this.add.image(0, 0, "shoot_ball_bubble");
		shoot_ball_bubble.scaleX = 0.8;
		shoot_ball_bubble.scaleY = 0.8;
		container_ball_tracker.add(shoot_ball_bubble);

		// shooting_line
		const shooting_line = this.add.image(0, 523, "l2");
		container_ball_tracker.add(shooting_line);

		// container_balls
		const container_balls = this.add.container(0, 0);

		// container_endline
		const container_endline = this.add.container(0, 0);

		// end_line
		const end_line = this.add.rectangle(540, 289, 1080, 10);
		end_line.visible = false;
		end_line.isFilled = true;
		container_endline.add(end_line);

		// yellow_border
		const yellow_border = this.add.image(-14, 270, "yellow_border");
		yellow_border.setOrigin(0, 0);
		container_endline.add(yellow_border);

		// container_header
		const container_header = this.add.container(0, 0);

		// score_base
		const score_base = this.add.image(909, 18, "score_base");
		container_header.add(score_base);

		// txt_score
		const txt_score = this.add.text(909, 118, "", {});
		txt_score.setOrigin(0.5, 0.5);
		txt_score.text = "0";
		txt_score.setStyle({ "align": "center", "fontSize": "40px", "stroke": "#2B5873", "strokeThickness":3,"shadow.offsetX":1,"shadow.offsetY":1,"shadow.color": "#2B5873", "shadow.blur":2,"shadow.stroke":true,"shadow.fill":true});
		container_header.add(txt_score);

		// text
		const text = this.add.text(909, 60, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "SCORE";
		text.setStyle({ "align": "center", "fontSize": "40px", "stroke": "#2B5873", "strokeThickness":4,"shadow.color": "#2B5873", "shadow.blur":2,"shadow.stroke":true,"shadow.fill":true});
		container_header.add(text);

		// btn_music_on
		const btn_music_on = this.add.image(234, 75, "Music_On");
		btn_music_on.name = "btn_music_on";
		btn_music_on.scaleX = 0.5;
		btn_music_on.scaleY = 0.5;
		btn_music_on.visible = false;
		container_header.add(btn_music_on);

		// btn_sound_on
		const btn_sound_on = this.add.image(372, 75, "Sound_On");
		btn_sound_on.name = "btn_sound_on";
		btn_sound_on.scaleX = 0.5;
		btn_sound_on.scaleY = 0.5;
		btn_sound_on.visible = false;
		container_header.add(btn_sound_on);

		// btn_settings
		const btn_settings = this.add.image(96, 75, "btn_settings");
		btn_settings.scaleX = 0.5;
		btn_settings.scaleY = 0.5;
		container_header.add(btn_settings);

		// container_popup
		const container_popup = this.add.container(541.4822621704935, 961.0413442017435);
		container_popup.visible = false;

		// bg_rect
		const bg_rect = this.add.rectangle(-1.4822452632960221, -1.0413359639954933, 1080, 1920);
		bg_rect.isFilled = true;
		bg_rect.fillColor = 0;
		bg_rect.fillAlpha = 0.5;
		container_popup.add(bg_rect);

		// ui_Base
		const ui_Base = this.add.image(-1.4822452632960221, -1.0413359639954933, "Ui_Base");
		container_popup.add(ui_Base);

		// pop_status_label
		const pop_status_label = this.add.image(-1.4822452632960221, -348.0413359639955, "lost");
		container_popup.add(pop_status_label);

		// btn_home
		const btn_home = this.add.image(150, 330.9586640360045, "Home_1");
		btn_home.scaleX = 0.5;
		btn_home.scaleY = 0.5;
		container_popup.add(btn_home);

		// btn_replay
		const btn_replay = this.add.image(-150, 330.9586640360045, "Restart");
		btn_replay.scaleX = 0.5;
		btn_replay.scaleY = 0.5;
		container_popup.add(btn_replay);

		// text_1
		const text_1 = this.add.text(-2.482245263296022, 80.9586640360045, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "YOUR SCORE";
		text_1.setStyle({ "align": "center", "fontSize": "52px", "stroke": "#2B5873", "strokeThickness":4,"shadow.color": "#2B5873", "shadow.blur":2,"shadow.stroke":true,"shadow.fill":true});
		container_popup.add(text_1);

		// txt_popup_score
		const txt_popup_score = this.add.text(-1.4822452632960221, 155.9586640360045, "", {});
		txt_popup_score.setOrigin(0.5, 0.5);
		txt_popup_score.text = "0";
		txt_popup_score.setStyle({ "align": "center", "fontSize": "52px", "stroke": "#2B5873", "strokeThickness":4,"shadow.color": "#2B5873", "shadow.blur":2,"shadow.stroke":true,"shadow.fill":true});
		container_popup.add(txt_popup_score);

		// container_stars
		const container_stars = this.add.container(-541.482245263296, -961.0413359639955);
		container_popup.add(container_stars);

		// star_0
		const star_0 = this.add.image(383, 866, "star");
		star_0.scaleX = 0.65;
		star_0.scaleY = 0.65;
		star_0.angle = -15;
		star_0.visible = false;
		container_stars.add(star_0);

		// star_1
		const star_1 = this.add.image(540, 834, "star");
		star_1.scaleX = 0.83;
		star_1.scaleY = 0.83;
		star_1.visible = false;
		container_stars.add(star_1);

		// star_2
		const star_2 = this.add.image(700, 866, "star");
		star_2.scaleX = 0.65;
		star_2.scaleY = 0.65;
		star_2.angle = 15;
		star_2.visible = false;
		container_stars.add(star_2);

		this.world_rect = world_rect;
		this.lock_ball = lock_ball;
		this.bubble_lock = bubble_lock;
		this.container_ball_tracker = container_ball_tracker;
		this.ball_tracker_img = ball_tracker_img;
		this.shoot_ball_bubble = shoot_ball_bubble;
		this.shooting_line = shooting_line;
		this.container_balls = container_balls;
		this.end_line = end_line;
		this.txt_score = txt_score;
		this.btn_music_on = btn_music_on;
		this.btn_sound_on = btn_sound_on;
		this.btn_settings = btn_settings;
		this.container_popup = container_popup;
		this.bg_rect = bg_rect;
		this.pop_status_label = pop_status_label;
		this.btn_home = btn_home;
		this.btn_replay = btn_replay;
		this.txt_popup_score = txt_popup_score;
		this.container_stars = container_stars;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	world_rect;
	/** @type {Phaser.GameObjects.Image} */
	lock_ball;
	/** @type {Phaser.GameObjects.Image} */
	bubble_lock;
	/** @type {Phaser.GameObjects.Container} */
	container_ball_tracker;
	/** @type {Phaser.GameObjects.Image} */
	ball_tracker_img;
	/** @type {Phaser.GameObjects.Image} */
	shoot_ball_bubble;
	/** @type {Phaser.GameObjects.Image} */
	shooting_line;
	/** @type {Phaser.GameObjects.Container} */
	container_balls;
	/** @type {Phaser.GameObjects.Rectangle} */
	end_line;
	/** @type {Phaser.GameObjects.Text} */
	txt_score;
	/** @type {Phaser.GameObjects.Image} */
	btn_music_on;
	/** @type {Phaser.GameObjects.Image} */
	btn_sound_on;
	/** @type {Phaser.GameObjects.Image} */
	btn_settings;
	/** @type {Phaser.GameObjects.Container} */
	container_popup;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_rect;
	/** @type {Phaser.GameObjects.Image} */
	pop_status_label;
	/** @type {Phaser.GameObjects.Image} */
	btn_home;
	/** @type {Phaser.GameObjects.Image} */
	btn_replay;
	/** @type {Phaser.GameObjects.Text} */
	txt_popup_score;
	/** @type {Phaser.GameObjects.Container} */
	container_stars;

	/* START-USER-CODE */

	// Write more your code here

	btnAnimation = (texture) => {
		this.tweens.add({
			targets: texture,
			scaleX: "*=0.8",
			scaleY: "*=0.8",
			duration: 80,
			yoyo: true,
			onComplete: () => {
				texture.setScale(0.5, 0.5);
			}
		});
	}
	musicHandler = () => {
		this.btnAnimation(this.btn_music_on);
		if (this.btn_music_on.texture.key == "Music_On") {
			this.btn_music_on.setTexture("Music_Off")
		} else {
			this.btn_music_on.setTexture("Music_On")
		}
	}
	soundHandler = () => {
		this.btnAnimation(this.btn_sound_on);
		if (this.btn_sound_on.texture.key == "Sound_On") {
			this.btn_sound_on.setTexture("Sound_Off")
		} else {
			this.btn_sound_on.setTexture("Sound_On")
		}
	}
	updateScore = (nValue) => {
		this.nScore += nValue;
		this.txt_score.setText(this.nScore);
	}
	goToHome = () => {
		this.scene.stop("Level")
		this.scene.start("Home")
	}
	popTextAnimation = (n, x, y) => {
		const popup_text = this.add.text(x, y, "+" + n, {});
		popup_text.setOrigin(0.5, 0.5);
		popup_text.setDepth(11);
		popup_text.setStyle({ "align": "center", "color": "#FFFFFF", "fontSize": "64px" });
		this.tweens.add({
			targets: popup_text,
			x: x,
			y: y - 300,
			duration: 700,
			onComplete: () => {
				popup_text.destroy();
			}
		})
	}
	create() {
		this.oGameManager = new GameManager(this);
		this.editorCreate();
		this.oBalls = this.oGameManager.oBalls;
		this.nScore = 0;
		this.updateScore(0);
		this.nCurrentBall = 2;
		this.ballsGroup = this.add.group();
		this.isGameOver = false;
		this.btn_replay.setInteractive().on('pointerdown', () => this.scene.restart());
		this.btn_home.setInteractive().on('pointerdown', () => this.goToHome());
		this.btn_settings.setInteractive().on('pointerdown', () => this.goToHome());
		this.bg_rect.setInteractive().on('pointerdown', () => { });
		this.physics.add.existing(this.end_line);
		this.physics.add.collider(this.ballsGroup, this.ballsGroup, this.mergeballs);
		this.physics.add.overlap(this.ballsGroup, this.end_line, () => this.gameOver());
		this.input.on('pointermove', (p) => {
			this.trackBall(p);
		});
		this.input.on('pointerup', (p, g) => {
			if (!g.length) {
				this.generateBall(this.nCurrentBall)
			}
		});
		this.aLockedBalls = [4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
		this.bubbles = this.add.particles("bubble").setDepth(10);
		this.particleStar = this.add.particles("star").setDepth(10);
		this.btn_music_on.setInteractive().on('pointerdown', (e) => {
			this.musicHandler()
		});
		this.btn_sound_on.setInteractive().on('pointerdown', (e) => {
			this.soundHandler()
		});
		this.container_ball_tracker.setSize(1080, 1920);
		this.container_ball_tracker.setInteractive();
		this.input.setDraggable(this.container_ball_tracker);
		this.container_ball_tracker.on('pointerup', (p, g) => {
			this.generateBall(this.nCurrentBall)
		});
	}
	showBubbles = (x, y) => {
		const bubbleParticles = this.bubbles.createEmitter({
			x: x,
			y: y,
			speed: { min: -500, max: 500 },
			angle: { min: 0, max: 360 },
			scale: { start: 0.4, end: 0.2 },
			blendMode: "ADD",
			lifespan: 500,
			gravityY: -3000,
			frequency: 200,
		});
		setTimeout(() => {
			bubbleParticles.remove();
		}, 600);
	}
	ballToUnlock = (nBall) => {
		if (this.aLockedBalls.length && this.aLockedBalls.includes(nBall)) {
			this.aLockedBalls.shift();
			this.lock_ball.setTexture("b" + this.aLockedBalls[0]);
			this.lock_ball.setDisplaySize(123, 123);
		}
	}
	countStar = () => {
		if (this.aLockedBalls.length == 1) return 2
		if (this.aLockedBalls.length == 2) return 1
		return 0;
	}
	mergeballs = (ball1, ball2) => {
		if (!this.isGameOver) {
			if (ball1.name == ball2.name) {
				const newSize = parseInt(ball1.name) * 2;

				ball1.setName(newSize);
				ball1.setTexture(this.oBalls[newSize].sTexture);
				const body = ball1.body;
				body.setCircle((ball1.width / 2) - 6);
				body.setOffset(6, 6);
				body.setBounce(0.7);

				this.showBubbles(ball1.x, ball1.y);
				this.updateScore(newSize);
				this.popTextAnimation(newSize, ball1.x, ball1.y);
				ball2.destroy();
				if (newSize == 2048) {
					this.winGame()
					return;
				};
				this.ballToUnlock(newSize);
			} else {
				ball1.body.setFriction(0);
				ball2.body.setFriction(0);
				ball1.body.setBounce(0.8);
				ball2.body.setBounce(0.8);
			}
		}
	}
	generateBall = (sBall) => {
		if (this.container_ball_tracker.visible && !this.isGameOver) {
			const ball1 = this.physics.add.image(this.container_ball_tracker.x, this.end_line.y + 140, this.oBalls[sBall].sTexture);
			this.container_balls.add(ball1);
			ball1.setName(this.oBalls[sBall].nLabel);
			this.ballsGroup.add(ball1);
			const body = ball1.body;
			body.setCollideWorldBounds(true);
			body.setCircle((ball1.width / 2) - 6);
			body.setOffset(6, 6);
			body.setBounce(0.3);
			body.setMass(5);
			body.gravity.y = 8000;
			this.handleTracker();

			body.setBoundsRectangle(new Phaser.Geom.Rectangle(this.world_rect.x, this.world_rect.y, this.world_rect.width, this.world_rect.height));
		}
	}
	trackBall = (pointer) => {
		let x = pointer.x;
		x = Math.min(Math.max(110, x), 970);
		if (!this.isGameOver) this.container_ball_tracker.x = x;
	}
	getBall = () => {
		const balls = [2, 4, 8, 2, 4, 8, 2, 4, 8, 2, 4, 2, 16, 16]
		// const balls = [16]
		const n = Math.floor(Math.random() * balls.length);
		if (this.aLockedBalls.includes(balls[n])) {
			this.getBall();
			return
		}
		this.setBall(balls[n]);
	}
	setBall = (nBall) => {
		this.ball_tracker_img.setTexture(this.oBalls[nBall].sTexture);
		this.nCurrentBall = nBall;
		this.shooting_line.setTexture(this.oBalls[nBall].sLine);
		this.ball_tracker_img.setDisplaySize(this.shoot_ball_bubble.displayWidth - 8, this.shoot_ball_bubble.displayHeight - 8);
	}
	handleTracker = () => {
		if (this.container_ball_tracker.visible) {
			this.container_ball_tracker.setVisible(false);
		} else {
			this.container_ball_tracker.setVisible(true);
		}
		setTimeout(() => {
			this.container_ball_tracker.setVisible(true);
			this.getBall();
		}, 1000);
	}
	gameOver = () => {
		if (!this.isGameOver) this.popupAnimation(this.countStar());
	}
	winGame = () => {
		this.isGameOver = true;
		this.pop_status_label.setTexture("won");
		this.popupAnimation(3);
		// this.showConfetti();
	}
	popupAnimation = (nStar) => {
		// this.physics.pause();
		this.txt_popup_score.setText(this.nScore);
		this.container_popup.setScale(0, 0);
		this.container_popup.setVisible(true);
		this.isGameOver = true;
		this.container_ball_tracker.setVisible(false);
		this.tweens.add({
			targets: this.container_popup,
			scaleX: 1,
			scaleY: 1,
			// ease: "Bounce",
			duration: 200,
			onComplete: () => {
				setTimeout(() => {
					this.starAnimation(nStar);
				}, 500);
			}
		})
	}
	showStarParticle = (star) => {
		// this.particleStar
		const starParticles = this.bubbles.createEmitter({
			x: star.x,
			y: star.y,
			speed: { min: -1000, max: 1000 },
			angle: { min: 0, max: 360 },
			scale: { start: star.scale, end: 0 },
			// blendMode: "ADD",
			lifespan: 500,
			// gravityY: -500,
			frequency: 100,
		});
		setTimeout(() => {
			starParticles.remove();
		}, 600);
	}
	starAnimation = (nStar) => {
		const scale1 = 0.65
		const scale2 = 0.83
		let nDelay = 0;
		for (let i = 1; i <= nStar; i++) {
			const star = this.container_stars.list[i - 1]
			this.container_stars.list[0].setVisible(true);
			star.setScale(3, 3);
			this.tweens.add({
				targets: star,
				scaleX: i == 2 ? scale2 : scale1,
				scaleY: i == 2 ? scale2 : scale1,
				// ease: "Bounce",
				duration: 400,
				delay: nDelay,
				onComplete: () => {
					if (i < nStar) this.container_stars.list[i].setVisible(true);
					// this.showStarParticle(star);
				}
			})
			nDelay += 400;
		}
	}
	showConfetti = () => {
		confetti({
			particleCount: 80,
			spread: 40,
			origin: { y: 0.5 },
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
