// Sources
// https://stackabuse.com/phaser-3-and-tiled-building-a-platformer/

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

  tilemap.createStaticLayer('Ground', tileset);
  tilemap.createStaticLayer('Above1', tileset);
  tilemap.createStaticLayer('Above2', tileset);

  // const tileset = map.addTilesetImage('tileset', 'tiles');

  //const test_view = map.createStaticLayer('Platforms', tileset, 0, 200);
}

function update()
{

}