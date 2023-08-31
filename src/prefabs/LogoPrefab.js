
// You can write more code here

/* START OF COMPILED CODE */

class LogoPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// home_logo
		const home_logo = scene.add.image(0, 0, "home_logo");
		this.add(home_logo);

		// container_balls
		const container_balls = scene.add.container(0, 0);
		this.add(container_balls);

		// bl8
		const bl8 = scene.add.image(227, 66, "bl8");
		container_balls.add(bl8);

		// bl4
		const bl4 = scene.add.image(65, 34, "bl4");
		container_balls.add(bl4);

		// bl0
		const bl0 = scene.add.image(-91, 40, "bl0");
		container_balls.add(bl0);

		// bl2
		const bl2 = scene.add.image(-247, 54, "bl2");
		container_balls.add(bl2);

		this.home_logo = home_logo;
		this.container_balls = container_balls;
		this.bl8 = bl8;
		this.bl4 = bl4;
		this.bl0 = bl0;
		this.bl2 = bl2;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = scene;
		this.bubbles = scene.add.particles("bubble").setDepth(10);
		this.showBubbles(840, 500, 0.3);
		this.showBubbles(240, 480, 0.4);
		this.ballsAnimation();

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	home_logo;
	/** @type {Phaser.GameObjects.Container} */
	container_balls;
	/** @type {Phaser.GameObjects.Image} */
	bl8;
	/** @type {Phaser.GameObjects.Image} */
	bl4;
	/** @type {Phaser.GameObjects.Image} */
	bl0;
	/** @type {Phaser.GameObjects.Image} */
	bl2;

	/* START-USER-CODE */

	// Write your code here.

	ballsAnimation = () => {
		for (let i = 0; i < 4; i++) {
			this.scene.tweens.add({
				targets: this.container_balls.list[i],
				scaleX: 1.1,
				scaleY: 1.1,
				duration: 500,
				yoyo: true,
				repeat: -1,
				delay: Math.random() * 500,
				ease: 'Sine.easeInOut'
			});
		}
	}
	showBubbles = (x, y, scale) => {
		const bubbleParticles = this.bubbles.createEmitter({
			x: x,
			y: y,
			speed: { min: -500, max: 500 },
			angle: { min: 0, max: 360 },
			scale: { start: 0.1, end: scale },
			blendMode: "ADD",
			lifespan: 1500,
			gravityY: -1000,
			frequency: 250,
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
