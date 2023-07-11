class GameManager {
	constructor(oScene) {
		this.oBalls = {
			2: {
				nLabel: 2, nSize: 200, nColor: 0x721f0f, sColor: "#cc381a", nBorder: 0xcc381a, sFontSize: "80px"
			},
			4: {
				nLabel: 4, nSize: 220, nColor: 0x7b7900, sColor: "#bcb801", nBorder: 0xbcb801, sFontSize: "90px"
			},
			8: {
				nLabel: 8, nSize: 240, nColor: 0x487609, sColor: "#72ba0c", nBorder: 0x72ba0c, sFontSize: "100px"
			},
			16: {
				nLabel: 16, nSize: 260, nColor: 0x267479, sColor: "#44c4cc", nBorder: 0x44c4cc, sFontSize: "100px"
			},
			32: {
				nLabel: 32, nSize: 280, nColor: 0x493978, sColor: "#7c61cc", nBorder: 0x7c61cc, sFontSize: "100px"
			},
			64: {
				nLabel: 64, nSize: 300, nColor: 0x113577, sColor: "#235bcb", nBorder: 0xc235bcb, sFontSize: "100px"
			},
			128: {
				nLabel: 128, nSize: 320, nColor: 0x7e3060, sColor: "#c74b98", nBorder: 0xc74b98, sFontSize: "90px"
			},
			256: {
				nLabel: 256, nSize: 330, nColor: 0x487609, sColor: "#72ba0c", nBorder: 0x72ba0c, sFontSize: "90px"
			},
			512: {
				nLabel: 512, nSize: 340, nColor: 0x825400, sColor: "#cc8301", nBorder: 0xcc8301, sFontSize: "90px"
			},
			1024: {
				nLabel: 1024, nSize: 360, nColor: 0x337354, sColor: "#56c18c", nBorder: 0x56c18c, sFontSize: "90px"
			},
			2048: {
				nLabel: 2048, nSize: 380, nColor: 0x504f50, sColor: "#ffffff", nBorder: 0x504f50, sFontSize: "90px"
			},
		}
	}
}