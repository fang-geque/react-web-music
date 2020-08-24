import React, { memo, useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { PlayerSongsWrapper } from './style';
import { getSimiPlaylistAction } from '../../store/actionCreators';
import FGQThemeHeaderPlayer from '@/components/theme-header-player';

export default memo(function FGQPlayerSong() {

  // redux hooks
  const { simiPlaylist } = useSelector(state => ({
    simiPlaylist: state.getIn(["player", "simiPlaylist"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getSimiPlaylistAction())
  }, [dispatch]);

  return (
    <PlayerSongsWrapper>
      <FGQThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="songs">
        {
          simiPlaylist.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <a className="image" href="/#">
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                </a>
                <div className="info text-nowrap">
                  <a href="#/" className="name">{item.name}</a>
                  <div className="auchor">
                    by 
                    <a href="#/" className="nickname">{item.creator.nickname}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayerSongsWrapper>
  )
})
