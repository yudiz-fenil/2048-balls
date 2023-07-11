
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

		// game_title
		const game_title = this.add.text(540, 182, "", {});
		game_title.setOrigin(0.5, 0.5);
		game_title.text = "2048 Balls";
		game_title.setStyle({ "align": "center", "fontFamily": "Verdana", "fontSize": "100px" });
		container_body.add(game_title);

		// box
		const box = this.add.image(540, 1118, "box");
		box.scaleX = 1.45;
		box.scaleY = 1.3;
		container_body.add(box);

		// container_balls
		const container_balls = this.add.container(0, 0);

		// container_ball_tracker
		const container_ball_tracker = this.add.container(840, 466);

		// ball_tracker
		const ball_tracker = this.add.ellipse(0, 0, 200, 200);
		ball_tracker.alpha = 0.5;
		ball_tracker.isFilled = true;
		ball_tracker.fillColor = 7479055;
		ball_tracker.isStroked = true;
		ball_tracker.strokeColor = 16711680;
		ball_tracker.lineWidth = 5;
		container_ball_tracker.add(ball_tracker);

		// txt_ball
		const txt_ball = this.add.text(0, 0, "", {});
		txt_ball.setOrigin(0.5, 0.5);
		txt_ball.text = "2";
		txt_ball.setStyle({ "align": "center", "color": "#cc381a", "fontFamily": "Verdana", "fontSize": "80px", "fontStyle": "bold" });
		container_ball_tracker.add(txt_ball);

		// ball_tracker_border
		const ball_tracker_border = this.add.ellipse(0, 0, 200, 200);
		ball_tracker_border.fillColor = 13383706;
		ball_tracker_border.isStroked = true;
		ball_tracker_border.strokeColor = 13383706;
		ball_tracker_border.lineWidth = 5;
		container_ball_tracker.add(ball_tracker_border);

		// container_endline
		const container_endline = this.add.container(0, 0);

		// end_line
		const end_line = this.add.rectangle(540, 627, 1080, 10);
		end_line.visible = false;
		end_line.isFilled = true;
		container_endline.add(end_line);

		// dashed_line
		const dashed_line = this.add.image(540, 628, "dashed-line");
		dashed_line.scaleX = 1.35;
		container_endline.add(dashed_line);

		// container_gameover
		const container_gameover = this.add.container(0, 0);

		// bg_rect
		const bg_rect = this.add.rectangle(540, 960, 1080, 1920);
		bg_rect.visible = false;
		bg_rect.isFilled = true;
		bg_rect.fillColor = 0;
		bg_rect.fillAlpha = 0.5;
		container_gameover.add(bg_rect);

		// btn_replay
		const btn_replay = this.add.image(150, 190, "replay");
		btn_replay.scaleX = 0.15;
		btn_replay.scaleY = 0.15;
		btn_replay.tintFill = true;
		btn_replay.tintTopLeft = 16777215;
		btn_replay.tintTopRight = 16777215;
		btn_replay.tintBottomLeft = 16777215;
		btn_replay.tintBottomRight = 16777215;
		container_gameover.add(btn_replay);

		// game_title (components)
		new PreloadText(game_title);

		this.container_balls = container_balls;
		this.container_ball_tracker = container_ball_tracker;
		this.ball_tracker = ball_tracker;
		this.txt_ball = txt_ball;
		this.ball_tracker_border = ball_tracker_border;
		this.end_line = end_line;
		this.container_gameover = container_gameover;
		this.bg_rect = bg_rect;
		this.btn_replay = btn_replay;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_balls;
	/** @type {Phaser.GameObjects.Container} */
	container_ball_tracker;
	/** @type {Phaser.GameObjects.Ellipse} */
	ball_tracker;
	/** @type {Phaser.GameObjects.Text} */
	txt_ball;
	/** @type {Phaser.GameObjects.Ellipse} */
	ball_tracker_border;
	/** @type {Phaser.GameObjects.Rectangle} */
	end_line;
	/** @type {Phaser.GameObjects.Container} */
	container_gameover;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_rect;
	/** @type {Phaser.GameObjects.Image} */
	btn_replay;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.oGameManager = new GameManager(this);
		this.editorCreate();
		this.ballsGroup = this.add.group();
		this.countMoves = 0;
		this.isGameOver = false;
		this.oBalls = this.oGameManager.oBalls;
		this.btn_replay.setInteractive().on('pointerdown', () => this.scene.restart());
		this.physics.add.existing(this.end_line);
		this.physics.add.collider(this.ballsGroup, this.ballsGroup, this.mergeballs);
		this.physics.add.overlap(this.ballsGroup, this.end_line, () => this.gameOver());
		this.input.on('pointermove', this.trackBall);
		this.input.on('pointerdown', () => this.generateBall(this.txt_ball.text));
	}

	mergeballs = (ball1, ball2) => {
		if (ball1.name == ball2.name) {
			const newSize = parseInt(ball1.name) * 2;

			ball1.setName(newSize);
			// Ball
			ball1.list[0].setSize(this.oBalls[newSize].nSize, this.oBalls[newSize].nSize);
			ball1.list[0].setFillStyle(this.oBalls[newSize].nColor);
			// Text
			ball1.list[1].text = newSize;
			ball1.list[1].setColor(this.oBalls[newSize].sColor);
			ball1.list[1].setFontSize(this.oBalls[newSize].sFontSize);
			// Border
			ball1.list[2].setSize(this.oBalls[newSize].nSize, this.oBalls[newSize].nSize);
			ball1.list[2].strokeColor = this.oBalls[newSize].nBorder;
			const body = ball1.body;
			body.setSize(this.oBalls[newSize].nSize, this.oBalls[newSize].nSize);
			body.setCircle(this.oBalls[newSize].nSize / 2);
			body.setBounce(0.7);

			ball1.list[1].setOrigin(0.5, 0.5);
			ball1.list[1].setPosition(ball1.list[0].x, ball1.list[0].y);

			if (newSize == 2048) this.winGame();
			ball2.destroy();
		} else {
			ball1.body.setFriction(0);
			ball2.body.setFriction(0);
			ball1.body.setBounce(0.8);
			ball2.body.setBounce(0.8);
		}
	}

	generateBall = (sBall) => {
		if (this.container_ball_tracker.visible && !this.isGameOver) {
			const container = this.add.container(this.container_ball_tracker.x, this.end_line.y + 180);
			const ball = this.add.ellipse(0, 0, this.oBalls[sBall].nSize, this.oBalls[sBall].nSize, this.oBalls[sBall].nColor, 0.5);
			const border = this.add.ellipse(0, 0, this.oBalls[sBall].nSize, this.oBalls[sBall].nSize);
			border.isStroked = true;
			border.strokeColor = this.oBalls[sBall].nBorder;
			border.lineWidth = 3;
			const text = this.add.text(0, 0, this.oBalls[sBall].nLabel, {
				fontSize: this.oBalls[sBall].sFontSize,
				color: this.oBalls[sBall].sColor,
				align: "center",
				fontStyle: "bold",
				fontFamily: "Verdana",
			});
			text.setOrigin(0.5, 0.5);
			container.add([ball, text, border]);
			this.container_balls.add(container);
			this.physics.world.enable(container);
			container.setName(this.oBalls[sBall].nLabel);
			this.ballsGroup.add(container);
			const containerBody = container.body;
			containerBody.setCollideWorldBounds(true);
			containerBody.setCircle(ball.width / 2);
			containerBody.setBounce(0.3);
			containerBody.setMass(10);
			containerBody.setOffset(-ball.width / 2, -ball.height / 2);
			containerBody.gravity.y = 4000;
			this.handleTracker();
		}
	}
	trackBall = (pointer) => {
		let x = pointer.x;
		x = Math.min(Math.max(145, x), 935);
		this.container_ball_tracker.x = x;
	}
	getBall = () => {
		const balls = [2, 4, 8, 2, 4, 8, 2, 4, 8, 16, 16]
		// const balls = [16]
		const n = Math.floor(Math.random() * balls.length);
		this.countMoves++;
		this.setBall(this.countMoves > 4 ? balls[n] : 2);
	}
	setBall = (nBall) => {
		this.ball_tracker.setFillStyle(this.oBalls[nBall].nColor);
		this.ball_tracker.setSize(this.oBalls[nBall].nSize, this.oBalls[nBall].nSize);

		this.ball_tracker_border.strokeColor = this.oBalls[nBall].nBorder;
		this.ball_tracker_border.setSize(this.oBalls[nBall].nSize, this.oBalls[nBall].nSize);

		this.txt_ball.setText(this.oBalls[nBall].nLabel);
		this.txt_ball.setColor(this.oBalls[nBall].sColor);
		this.txt_ball.setFontSize(this.oBalls[nBall].sFontSize);
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
		if (!this.isGameOver) this.btnRestartAnimation();
	}
	winGame = () => {
		this.btnRestartAnimation();
		this.showConfetti();
	}
	btnRestartAnimation = () => {
		this.isGameOver = true;
		this.bg_rect.setVisible(true);
		this.container_ball_tracker.setVisible(false);
		this.tweens.add({
			targets: this.btn_replay,
			x: 540,
			y: 960,
			scaleX: 1,
			scaleY: 1,
			ease: "Bounce",
			duration: 500,
		})
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
