import Phaser from 'phaser';

console.log("Game script loaded successfully!");

let config = {
  type: Phaser.AUTO,
  width: 400,
  height: 300,
  scale: {
    mode: Phaser.Scale.FIT
  },
  pixelArt: true,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 100 }
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

let game = new Phaser.Game(config);

function preload()
{
  this.load.setBaseURL('/');

  this.load.image('sky', 'assets/background.png');
  this.load.image('logo', 'assets/title.png');
  this.load.image('red', 'assets/particle.png');
}

function create()
{
  this.add.image(200, 150, 'sky');

  var particles = this.add.particles('red');

  var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
  });

  var logo = this.physics.add.image(200, 50, 'logo');

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}

function update()
{

}