// This is the entry point of the game
import Game from './classes/Game.js'
import Canvas from './classes/Canvas.js'
import Map from './classes/Map.js'
import Barrier from './classes/Barrier.js'
import Interaction from './classes/Interaction.js'
import Player from './classes/Player.js'
import TouchEvents from '../src/components/TouchEvents.js'

const game1 = new Game(Canvas, Map, Barrier, Interaction, Player, 360, 670, '#canvasContainer', TouchEvents)

game1.createBarriers([
    { x: 210, y: 70, w: 79, h: 79 },
])
game1.createInteractions([
    { x: 110, y: 70, w: 25, h: 25 },
])

game1.gameLoop()

addEventListener('keydown', e => game1.keyDownListeners(e))

addEventListener('keyup', e => game1.keyUpListeners(e))

export default game1