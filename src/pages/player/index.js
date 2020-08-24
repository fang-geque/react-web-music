import React, { memo } from 'react';

import FGQPlayerInfo from './c-cpns/player-info';
import FGQPlayerComment from './c-cpns/player-comment';
import FGQPlayerSongs from './c-cpns/player-songs';
import FGQPlayerRelevant from './c-cpns/player-relevant';

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
          <FGQPlayerInfo></FGQPlayerInfo>
          <FGQPlayerComment></FGQPlayerComment>
        </PlayerLeft>
        <PlayerRight>
          <FGQPlayerSongs/>
          <FGQPlayerRelevant/>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
