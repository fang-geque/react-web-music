import { getSongDetail } from "@/services/player";
import * as actionType from "./constants";

const changeCurrentSongAction = (currentSong) => {
  return {
    type: actionType.CHANGE_CURRENT_SONG,
    currentSong,
  };
};

export const getSongDetailAction = (ids) => {
  return (dispatch) => {
    getSongDetail(ids).then((res) => {
      dispatch(changeCurrentSongAction(res.songs[0]));
    });
  };
};
