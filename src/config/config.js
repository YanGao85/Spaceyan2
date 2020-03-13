import Loading from '../scenes/Loading';
import Playing from '../scenes/Playing';
export default {
	type: Phaser.AUTO,
	width: 1200,
	height: 900,
	backgroundColor: 0x000000,
	scene: [ Loading, Playing ],
	pixelArt: true,
	physics: {
		default: 'arcade',
		arcade: {
			debug: false
		}
	}
};
