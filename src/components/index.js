
const theme = {
    colors: {
        dark1: `#2D2D2D`,
        dark2: `#404040`,
        primary1: `#FFC491`,
        secondary1: `#91ECFF`
    }
}

import CanvasContainer from './CanvasContainer.js'
CanvasContainer(theme)

import GameControls from './gameController/GameControls.js'
GameControls(theme)

import BottomBar from './BottomBar.js'
BottomBar(theme)