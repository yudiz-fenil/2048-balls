class SoundManager {
	constructor(oScene) {
		this.bgm = oScene.sound.add("bgm");
		this.bubbleUnlock = oScene.sound.add("bubble-unlock");
		this.btnTap = oScene.sound.add("button-tap");
		this.merge = oScene.sound.add("merge");
		this.shoot = oScene.sound.add("shoot");
		this.gameWin = oScene.sound.add("gamewin");
		this.gameLose = oScene.sound.add("gameover");
		this.soundArray = [this.bubbleUnlock, this.btnTap, this.merge, this.shoot, this.gameWin, this.gameOver];
	}
	playSound = (key, loop = false) => {
		key.play();
		key.loop = loop
	}
	stopSound = (key, loop = false) => {
		key.stop();
		key.loop = loop;
	}
}