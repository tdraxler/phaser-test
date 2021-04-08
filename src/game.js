// Sources
// https://stackabuse.com/phaser-3-and-tiled-building-a-platformer/

import Phaser from 'phaser';
import { Player } from './player';

console.log("Game script loaded successfully!");

let config = {
  type: Phaser.AUTO,
  width: 400,
  height: 288,
  scale: {
    mode: Phaser.Scale.FIT
  },
  parent: 'game',
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

  this.load.image('tiles', 'assets/tileset.png');
  this.load.spritesheet(
    'player',
    'assets/player.png',
    {
      frameWidth: 16,
      frameHeight: 16
    }
  );
  this.load.tilemapTiledJSON('assets/map1');
}

function create()
{


  const tilemap = this.make.tilemap({ key: 'assets/map1' });

  const tileset = tilemap.addTilesetImage('tileset', 'tiles');

  tilemap.createLayer('Ground', tileset);

  this.player = new Player(this, 12 * 16, 7 * 16);

  tilemap.createLayer('Above1', tileset);
  tilemap.createLayer('Above2', tileset);

  const collisions = tilemap.createLayer('Collision', tileset);
  collisions.setCollisionByExclusion(-1, true);
  this.physics.add.collider(this.player, collisions);
  collisions.setVisible(false);


  // configure camera
  this.physics.world.bounds.width = tilemap.widthInPixels;
  this.physics.world.bounds.height = tilemap.heightInPixels;
  this.cameras.main.setBounds(
    0,
    0,
    tilemap.widthInPixels,
    tilemap.heightInPixels
  );
  // this.cameras.main.setZoom(2);
  this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
}

function update()
{
  this.player.update();
}