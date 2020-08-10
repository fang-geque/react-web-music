import * as actionTypes from "./constants";

import { 
  getTopBanners,
  getHotRecommends

} from "@/services/recommend";

const changeTopBannerAction = (res) =>({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
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
    getHotRecommends().then(res => {
      console.log(res);
    })
  }
}