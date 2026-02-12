import Phaser from 'phaser';

export default class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    create() {
        const centerX = this.cameras.main.width / 2;
        const centerY = this.cameras.main.height / 2;

        // Title
        this.add.text(centerX, centerY - 100, '🐸 FROG PLATFORMER', {
            fontSize: '48px',
            fontFamily: 'Arial',
            color: '#ffffff',
            fontStyle: 'bold',
            stroke: '#000000',
            strokeThickness: 6
        }).setOrigin(0.5);

        // Subtitle
        this.add.text(centerX, centerY, 'Press SPACE to Start', {
            fontSize: '24px',
            fontFamily: 'Arial',
            color: '#ffff00',
            fontStyle: 'bold'
        }).setOrigin(0.5);

        // Instructions
        this.add.text(centerX, centerY + 100, 'Arrow Keys or WASD to Move\nSPACE to Jump', {
            fontSize: '18px',
            fontFamily: 'Arial',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        // Credits
        this.add.text(centerX, this.cameras.main.height - 30, 'Made with 💚 by MO2590 | Powered by Phaser.js', {
            fontSize: '14px',
            fontFamily: 'Arial',
            color: '#aaaaaa'
        }).setOrigin(0.5);

        // Start on spacebar
        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('GameScene');
        });

        // Add animated frog emoji (placeholder for actual sprite)
        const frogEmoji = this.add.text(centerX, centerY - 50, '🐸', {
            fontSize: '64px'
        }).setOrigin(0.5);

        // Bounce animation
        this.tweens.add({
            targets: frogEmoji,
            y: centerY - 70,
            duration: 500,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1
        });
    }
}
