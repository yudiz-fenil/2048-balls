class GameManager {
	constructor(oScene) {
		this.oBalls = {
			2: {
				nLabel: 2, nSize: 100, nColor: 0x721f0f, sColor: "#cc381a", nBorder: 0xcc381a, sFontSize: "60px"
			},
			4: {
				nLabel: 4, nSize: 110, nColor: 0x7b7900, sColor: "#bcb801", nBorder: 0xbcb801, sFontSize: "70px"
			},
			8: {
				nLabel: 8, nSize: 120, nColor: 0x487609, sColor: "#72ba0c", nBorder: 0x72ba0c, sFontSize: "80px"
			},
			16: {
				nLabel: 16, nSize: 130, nColor: 0x267479, sColor: "#44c4cc", nBorder: 0x44c4cc, sFontSize: "80px"
			},
			32: {
				nLabel: 16, nSize: 140, nColor: 0x493978, sColor: "#7c61cc", nBorder: 0x7c61cc, sFontSize: "80px"
			},
			64: {
				nLabel: 16, nSize: 150, nColor: 0x113577, sColor: "#235bcb", nBorder: 0xc235bcb, sFontSize: "80px"
			},
			128: {
				nLabel: 16, nSize: 160, nColor: 0x7e3060, sColor: "#c74b98", nBorder: 0xc74b98, sFontSize: "70px"
			},
			256: {
				nLabel: 16, nSize: 170, nColor: 0x487609, sColor: "#72ba0c", nBorder: 0x72ba0c, sFontSize: "70px"
			},
			512: {
				nLabel: 16, nSize: 180, nColor: 0x825400, sColor: "#cc8301", nBorder: 0xcc8301, sFontSize: "70px"
			},
			1024: {
				nLabel: 16, nSize: 190, nColor: 0x337354, sColor: "#56c18c", nBorder: 0x56c18c, sFontSize: "60px"
			},
			2048: {
				nLabel: 16, nSize: 200, nColor: 0x504f50, sColor: "#ffffff", nBorder: 0x504f50, sFontSize: "60px"
			},
		}
	}
}