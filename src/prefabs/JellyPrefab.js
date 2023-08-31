
// You can write more code here

/* START OF COMPILED CODE */

class JellyPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// jelly
		const jelly = scene.add.sprite(0, 0, "j1");
		this.add(jelly);

		this.jelly = jelly;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene = scene;
		this.x = x;
		this.y = y;
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Sprite} */
	jelly;

	/* START-USER-CODE */

	// Write your code here.
	jellyFishAnimation = (targetsX, targetsY, flipX, duration) => {
		// this.jelly.setPosition(xPos, yPos);
		this.jelly.setFlipX(flipX);
		this.jelly.anims.play("jellyfish");
		const tween = this.scene.tweens.add({
			targets: this.jelly,
			x: this.x + targetsX,
			y: targetsY,
			duration: duration,
			repeat: -1,
			onComplete: () => {
			}
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
