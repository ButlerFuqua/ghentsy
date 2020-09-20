
import game1 from '../../game1/main.js'
import { theme } from './theme.js'

import CanvasContainer from './CanvasContainer.js'
CanvasContainer(theme)

import GameControls from './gameController/GameControls.js'
GameControls(theme, game1)

import MainMenu from './MainMenu.js'

import BottomBar from './BottomBar.js'
BottomBar(theme, MainMenu)



