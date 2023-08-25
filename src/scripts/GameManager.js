class GameManager {
	constructor(oScene) {
		this.oBalls = {
			2: {
				nLabel: 2, nSize: 200, nColor: 0x721f0f, sColor: "#815B00", nBorder: 0xcc381a, sFontSize: "80px", sTexture: "b2", sLine: "l2"
			},
			4: {
				nLabel: 4, nSize: 220, nColor: 0x7b7900, sColor: "#817b00", nBorder: 0xbcb801, sFontSize: "90px", sTexture: "b4", sLine: "l4"
			},
			8: {
				nLabel: 8, nSize: 240, nColor: 0x487609, sColor: "#00810f", nBorder: 0x72ba0c, sFontSize: "100px", sTexture: "b8", sLine: "l8"
			},
			16: {
				nLabel: 16, nSize: 260, nColor: 0x267479, sColor: "#00817f", nBorder: 0x44c4cc, sFontSize: "100px", sTexture: "b16", sLine: "l16"
			},
			32: {
				nLabel: 32, nSize: 280, nColor: 0x493978, sColor: "#6e0081", nBorder: 0x7c61cc, sFontSize: "100px", sTexture: "b32", sLine: "l32"
			},
			64: {
				nLabel: 64, nSize: 300, nColor: 0x113577, sColor: "#006181", nBorder: 0xc235bcb, sFontSize: "100px", sTexture: "b64", sLine: "l64"
			},
			128: {
				nLabel: 128, nSize: 320, nColor: 0x7e3060, sColor: "#7b0081", nBorder: 0xc74b98, sFontSize: "90px", sTexture: "b128", sLine: "l128"
			},
			256: {
				nLabel: 256, nSize: 330, nColor: 0x487609, sColor: "#960014", nBorder: 0x72ba0c, sFontSize: "90px", sTexture: "b256", sLine: "l256"
			},
			512: {
				nLabel: 512, nSize: 340, nColor: 0x825400, sColor: "#000481", nBorder: 0xcc8301, sFontSize: "90px", sTexture: "b512", sLine: "l512"
			},
			1024: {
				nLabel: 1024, nSize: 360, nColor: 0x337354, sColor: "#00571f", nBorder: 0x56c18c, sFontSize: "90px", sTexture: "b1024", sLine: "l1024"
			},
			2048: {
				nLabel: 2048, nSize: 380, nColor: 0x504f50, sColor: "#754f02", nBorder: 0x504f50, sFontSize: "90px", sTexture: "b2048", sLine: "l2048"
			},
		}
	}
}