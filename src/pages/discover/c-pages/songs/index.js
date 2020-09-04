import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { 
  getCategory,
  getSongList
} from "./store/actionCreators";

import FGQSongsHeader from "./c-cpns/songs-header";
import FGQSongsList from './c-cpns/songs-list';
import {
  SongsWrapper
} from "./style"

export default memo(function FGQSongs() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSongList(0));
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <FGQSongsHeader/>
      <FGQSongsList/>
    </SongsWrapper>
  )
})
