import React, { memo } from 'react';

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'

export default memo(function FGQPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>FGQPlayerInfo</h2>
          <h2>FGQSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>FGQSimPlaylist</h2>
          <h2>FGQSimSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
