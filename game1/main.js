// This is the entry point of the game
import Game from './classes/Game.js'
import Canvas from './classes/Canvas.js'
import Map from './classes/Map.js'
import Barrier from './classes/Barrier.js'
import Player from './classes/Player.js'

const game1 = new Game(Canvas, Map, Barrier, Player, '360', '670')

game1.gameLoop()

addEventListener('keydown', e => game1.keyDownListeners(e))

addEventListener('keyup', e => game1.keyUpListeners(e))

