import { getSongDetail } from "@/services/player";
import * as actionType from "./constants";

const changeCurrentSongAction = (currentSong) => {
  return {
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong,
  };
};

const changePlayListAction = (playList) => ({
  type: actionType.CHANGE_PLAY_LIST,
  playList
});

const changeCurrentSongIndexAction = (index) => ({
  type: actionType.CHANGE_CURRENT_SONG_INDEX,
  index
})

export const getSongDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 1. 根据id查找 playList中是否已经有了该歌曲
    const playList = getState().getIn(["player","playList"]);
    const songIndex =  playList.findIndex(song => song.id === ids);

    // 2.判断是否找到歌曲
    if(songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
    } else {
      // 没找到歌曲
      // 请求歌曲数据
      getSongDetail(ids).then((res) => {
        const song = res.songs && res.songs[0];
        if(!song) return;

        // 将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);
        console.log(newPlayList)

        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }

  };
};
