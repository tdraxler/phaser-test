import Phaser from 'phaser';

export class Player extends Phaser.GameObjects.Sprite {
    getBody() {
        return this.body;
    }

    constructor(scene, x, y) {
        super(scene, x, y, "player");

        // Add the player to the scene
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.getBody().setCollideWorldBounds(true);
        this.getBody().setAllowGravity(false);

        // Set up keyboard handler
        this.keyUp = this.scene.input.keyboard.addKey("Up");
        this.keyDown = this.scene.input.keyboard.addKey("Down");
        this.keyLeft = this.scene.input.keyboard.addKey("Left");
        this.keyRight = this.scene.input.keyboard.addKey("Right");

        this.currentDir = 0; // down

        // Set up animations
        this.scene.anims.create({
            key: "idle-down",
            frames: this.anims.generateFrameNumbers('player', { start: 1, end: 1 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: "idle-up",
            frames: this.anims.generateFrameNumbers('player', { start: 9, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: "idle-right",
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 4 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: "idle-left",
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 12 }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "walk-down",
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: "walk-up",
            frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: "walk-right",
            frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.scene.anims.create({
            key: "walk-left",
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        });

        this.getBody().setSize(16, 16);
    }

    update() {

        // Check keyboard input
        let anythingPressed = false;
        let xSpeed = 0, ySpeed = 0;
        if (this.keyDown.isDown) {
            ySpeed = 64;
            this.currentDir = 0;
            anythingPressed = true;
        }
        if (this.keyUp.isDown) {
            ySpeed = -64;
            this.currentDir = 1;
            anythingPressed = true;
        }
        if (this.keyRight.isDown) {
            xSpeed = 64;
            this.currentDir = 2;
            anythingPressed = true;
        }
        if (this.keyLeft.isDown) {
            xSpeed = -64;
            this.currentDir = 3;
            anythingPressed = true;
        }


        
        if (anythingPressed) {
            this.getBody().setVelocity(xSpeed, ySpeed);
            switch (this.currentDir) {
                case 0: // down
                    this.anims.play("walk-down", true);
                    break;
                case 1: // up
                    this.anims.play("walk-up", true);
                    break;
                case 2: // right
                    this.anims.play("walk-right", true);
                    break;
                default: // left
                    this.anims.play("walk-left", true);
                    break;
            }
        }
        else {
            switch (this.currentDir) {
                case 0: // down
                    this.anims.play("idle-down", true);
                    break;
                case 1: // up
                    this.anims.play("idle-up", true);
                    break;
                case 2: // right
                    this.anims.play("idle-right", true);
                    break;
                default: // left
                    this.anims.play("idle-left", true);
                    break;
            }
            this.getBody().setVelocity(0, 0);
        }

        // update frame and physics body
        // if (this.getBody().velocity.x === 0 && this.getBody().velocity.y === 0) {
        //     this.anims.play("idle-down", true);
        // } else {
        //     this.anims.play("idle-down", true);
        // }

    }
}