import request from "./request";

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommends() {
  return request({
    url: "/personalized",
    params: {
      limit: 8,
    },
  });
}

export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    params:{
      limit
    }
  })
}

// 排行榜数据
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params :{
      idx
    }
  })
}

// 入驻歌手
export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}