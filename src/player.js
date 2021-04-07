import Phaser from 'phaser';

class Player extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y) {
        super(scene, x, y, "assets/player");

        // Add the player to the scene
        this.scene.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.getBody().setCollideWorldBounds(true);

        // Set up keyboard handler
        this.keyUp = this.scene.input.keyboard.addKey("Up");
        this.keyDown = this.scene.input.keyboard.addKey("Down");
        this.keyLeft = this.scene.input.keyboard.addKey("Left");
        this.keyRight = this.scene.input.keyboard.addKey("Right");

        // Set up animations
        this.scene.anims.create({
            key: "idle-up",
            frames: this.scene.anims.generateFrameNames("assets/player", {
                prefix: "idle_anim",
                start: 7,
                end: 7
            }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "idle-down",
            frames: this.scene.anims.generateFrameNames("assets/player", {
                prefix: "idle_anim",
                start: 1,
                end: 1
            }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "idle-left",
            frames: this.scene.anims.generateFrameNames("assets/player", {
                prefix: "idle_anim",
                start: 10,
                end: 10
            }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "idle-right",
            frames: this.scene.anims.generateFrameNames("assets/player", {
                prefix: "idle_anim",
                start: 4,
                end: 4
            }),
            frameRate: 10,
            repeat: -1
        });
    }
}