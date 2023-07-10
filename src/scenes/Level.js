
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

		// title
		const title = this.add.text(540, 182, "", {});
		title.setOrigin(0.5, 0.5);
		title.text = "2048 Balls";
		title.setStyle({ "align": "center", "fontFamily": "Verdana", "fontSize": "100px" });

		// btn_replay
		const btn_replay = this.add.image(148, 189, "replay");
		btn_replay.scaleX = 0.15;
		btn_replay.scaleY = 0.15;
		btn_replay.tintFill = true;
		btn_replay.tintTopLeft = 3157807;
		btn_replay.tintTopRight = 3157807;
		btn_replay.tintBottomLeft = 3157807;
		btn_replay.tintBottomRight = 3157807;

		// end_line
		const end_line = this.add.rectangle(540, 489, 1080, 10);
		end_line.visible = false;
		end_line.isFilled = true;

		// box
		const box = this.add.image(540, 1118, "box");
		box.scaleX = 1.45;
		box.scaleY = 1.3;

		// dashed_line
		const dashed_line = this.add.image(540, 490, "dashed-line");
		dashed_line.scaleX = 1.35;

		// container_ball_tracker
		const container_ball_tracker = this.add.container(840, 416);

		// ball_tracker
		const ball_tracker = this.add.ellipse(0, 0, 100, 100);
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
		txt_ball.setStyle({ "align": "center", "color": "#cc381a", "fontFamily": "Verdana", "fontSize": "60px", "fontStyle": "bold" });
		container_ball_tracker.add(txt_ball);

		// ball_tracker_border
		const ball_tracker_border = this.add.ellipse(0, 0, 100, 100);
		ball_tracker_border.fillColor = 13383706;
		ball_tracker_border.isStroked = true;
		ball_tracker_border.strokeColor = 13383706;
		ball_tracker_border.lineWidth = 5;
		container_ball_tracker.add(ball_tracker_border);

		// title (components)
		new PreloadText(title);

		this.btn_replay = btn_replay;
		this.end_line = end_line;
		this.container_ball_tracker = container_ball_tracker;
		this.ball_tracker = ball_tracker;
		this.txt_ball = txt_ball;
		this.ball_tracker_border = ball_tracker_border;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_replay;
	/** @type {Phaser.GameObjects.Rectangle} */
	end_line;
	/** @type {Phaser.GameObjects.Container} */
	container_ball_tracker;
	/** @type {Phaser.GameObjects.Ellipse} */
	ball_tracker;
	/** @type {Phaser.GameObjects.Text} */
	txt_ball;
	/** @type {Phaser.GameObjects.Ellipse} */
	ball_tracker_border;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.oGameManager = new GameManager(this);
		this.editorCreate();

		this.ballsGroup = this.add.group();
		this.countMoves = 0;
		this.oBalls = this.oGameManager.oBalls;
		this.btn_replay.setInteractive().on('pointerdown', () => this.scene.restart());
		this.physics.add.existing(this.end_line);
		this.physics.add.collider(this.ballsGroup, this.ballsGroup, this.mergeballs);
		this.physics.add.collider(this.ballsGroup, this.end_line, this.gameOver);
		this.input.on('pointermove', this.trackBall);
		this.input.on('pointerdown', this.getBall);
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
			body.setBounce(0.8);

			ball1.list[1].setOrigin(0.5, 0.5);
			ball1.list[1].setPosition(ball1.list[0].x, ball1.list[0].y);

			ball2.destroy();
		}
	}

	generateBall = (sBall) => {
		const container = this.add.container(this.container_ball_tracker.x, 560);
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
		this.physics.world.enable(container);
		container.setName(this.oBalls[sBall].nLabel);
		this.ballsGroup.add(container);
		const containerBody = container.body;
		containerBody.setCollideWorldBounds(true);
		containerBody.setCircle(ball.width / 2);
		containerBody.setBounce(0.3);
		containerBody.setOffset(-ball.width / 2, -ball.height / 2);
		containerBody.gravity.y = 2000;
		this.handleTracker();
	}

	trackBall = (pointer) => {
		let x = pointer.x;
		x = Math.min(Math.max(100, x), 980);
		this.container_ball_tracker.x = x;
	}

	getBall = () => {
		if (this.container_ball_tracker.visible) {
			const balls = [2, 2, 2, 4, 4, 4, 8, 8, 16]
			const n = Math.floor(Math.random() * balls.length);
			this.countMoves++;
			this.generateBall(this.countMoves > 5 ? balls[n] : 2);
		}
	}
	handleTracker = () => {
		if (this.container_ball_tracker.visible) {
			this.container_ball_tracker.setVisible(false);
		} else {
			this.container_ball_tracker.setVisible(true);
		}
		setTimeout(() => {
			this.container_ball_tracker.setVisible(true);
		}, 1000);
	}
	gameOver = () => {
		this.scene.restart();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
