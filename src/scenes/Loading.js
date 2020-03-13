export default class Loading extends Phaser.Scene {
	constructor() {
		super('bootGame');
	}

	preload() {
		this.load.image('background', 'assets/backgrounds/nebula1.png');
		this.load.image('hero', 'assets/sprites/HeroShip.png');
		this.load.spritesheet('beam', 'assets/sprites/Beam.png', {
			frameWidth: 40,
			frameHeight: 60
		});
		this.load.image('enemy1', 'assets/sprites/Enemy1.png');
		this.load.image('enemy2', 'assets/sprites/Enemy2.png');
		this.load.image('enemy3', 'assets/sprites/Enemy3.png');
		this.load.image('enemy4', 'assets/sprites/Enemy4.png');
		this.load.spritesheet('explosion', 'assets/sprites/explosion.png', {
			frameWidth: 16,
			frameHeight: 16
		});
		this.load.bitmapFont('pixelFont', 'assets/fonts/font.png', 'assets/fonts/font.xml');
		this.load.audio('audio_beam', [ 'assets/sounds/beam.ogg' ]);
		this.load.audio('audio_explosion', [ 'assets/sounds/explosion.ogg' ]);

		this.load.audio('music', [ 'assets/sounds/music.ogg' ]);
	}
	create() {
		this.add.text(20, 20, 'Loading game...');
		setTimeout(() => {
			this.scene.start('playGame');
		}, 1000);
		this.anims.create({
			key: 'beam_anim',
			frames: this.anims.generateFrameNumbers('beam'),
			frameRate: 5,
			repeat: -1
		});
		this.anims.create({
			key: 'explode',
			frames: this.anims.generateFrameNumbers('explosion'),
			frameRate: 10,
			repeat: 0,
			hideOnComplete: true
		});
		// 	this.anims.create({
		// 		key: 'thrust',
		// 		frames: this.anims.generateFrameNumbers('player'),
		// 		frameRate: 20,
		// 		repeat: -1
		// 	});
	}
}
