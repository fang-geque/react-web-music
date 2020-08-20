import React, { memo } from 'react'

import { PanelWrapper } from './style';
import FGQPlayList from './c-cpns/play-list';
import FGQLyricPanel from './c-cpns/lyric-panel';
import FGQPlayHeader from './c-cpns/play-header'

export default memo(function FGQAppPlayList() {
  return (
    <PanelWrapper>
      <FGQPlayHeader></FGQPlayHeader>
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <FGQPlayList/>
        <FGQLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
