import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // TODO: Load game assets (sprites, tilesets, audio)
    }

    create() {
        // Add simple sky background
        this.add.rectangle(0, 0, 800, 600, 0x87CEEB).setOrigin(0);

        // Create ground (simple placeholder)
        const platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, null).setDisplaySize(800, 64).refreshBody().setTint(0x228B22);
        platforms.create(600, 400, null).setDisplaySize(50, 32).refreshBody().setTint(0x228B22);
        platforms.create(50, 250, null).setDisplaySize(50, 32).refreshBody().setTint(0x228B22);
        platforms.create(750, 220, null).setDisplaySize(50, 32).refreshBody().setTint(0x228B22);

        // Create player (temporary emoji placeholder)
        this.player = this.add.text(100, 450, '🐸', { fontSize: '48px' });
        this.physics.add.existing(this.player);
        this.player.body.setBounce(0.2);
        this.player.body.setCollideWorldBounds(true);

        // Collisions
        this.physics.add.collider(this.player, platforms);

        // Input controls
        this.cursors = this.input.keyboard.createCursorKeys();
        this.wasd = this.input.keyboard.addKeys('W,A,S,D');

        // Score text
        this.scoreText = this.add.text(16, 16, 'Score: 0', {
            fontSize: '24px',
            fontFamily: 'Arial',
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 4
        });
        this.score = 0;

        // Add some collectible items
        this.coins = this.physics.add.group();
        this.coins.create(400, 200, null).setDisplaySize(24, 24).setTint(0xFFD700);
        this.coins.create(600, 300, null).setDisplaySize(24, 24).setTint(0xFFD700);
        this.coins.create(50, 150, null).setDisplaySize(24, 24).setTint(0xFFD700);

        this.physics.add.collider(this.coins, platforms);
        this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

        // Instructions
        this.add.text(400, 50, 'Use Arrow Keys or WASD to Move!', {
            fontSize: '20px',
            fontFamily: 'Arial',
            color: '#ffffff',
            stroke: '#000000',
            strokeThickness: 4
        }).setOrigin(0.5);
    }

    update() {
        // Player movement
        if (this.cursors.left.isDown || this.wasd.A.isDown) {
            this.player.body.setVelocityX(-160);
        } else if (this.cursors.right.isDown || this.wasd.D.isDown) {
            this.player.body.setVelocityX(160);
        } else {
            this.player.body.setVelocityX(0);
        }

        // Jump
        if ((this.cursors.up.isDown || this.wasd.W.isDown) && this.player.body.touching.down) {
            this.player.body.setVelocityY(-500);
        }
    }

    collectCoin(player, coin) {
        coin.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    }
}
