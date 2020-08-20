import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { 
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';


export default memo(function FGQPlayHeader() {
  const { playList, currentSong } = useSelector(state => ({
    playList: state.getIn(["player", "playList"]),
    currentSong: state.getIn(["player", "currentSong"])
  }), shallowEqual);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            <a href="/collect">收藏全部</a>
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            <a href="/remove">清除</a>
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        {currentSong.name}
      </HeaderRight>
    </HeaderWrapper>
  )
})
