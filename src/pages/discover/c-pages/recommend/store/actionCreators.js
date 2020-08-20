import * as actionTypes from "./constants";

import { 
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getArtistList
} from "@/services/recommend";

const changeTopBannerAction = (res) =>({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) =>({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRankAction = (res) => ({
  type:actionTypes.CHANGE_UP_RANKING,
  upRanking:res.playlist
})

const changeNewRankAction = (res) => ({
  type:actionTypes.CHANGE_NEW_RANKING,
  newRanking:res.playlist
})

const changeOriginRankAction = (res) => ({
  type:actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking:res.playlist
})

const changeSettleSingsAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists
})

export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then(res =>{
      dispatch(changeTopBannerAction(res))
    })
  };
};

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      // const albums = res.albums;
      dispatch(changeNewAlbumAction(res));
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      const sourceMap = {
        0 : changeUpRankAction(res),
        2 : changeNewRankAction(res),
        3 : changeOriginRankAction(res),
      }
      dispatch(sourceMap[idx])
    })
  }
}

// 入驻歌手
export const getSettleSingers = () => {
  return dispath => {
    getArtistList(5, 5001).then(res => {
      dispath(changeSettleSingsAction(res))
    })
  }
}
