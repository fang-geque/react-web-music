import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/constants'

import FGQThemeHeaderRCM  from '@/components/theme-header-rcm';
import FGQSongsCover from '@/components/songs-cover';
import {
  HotRecommendWrapper
} from './style'
import { getHotRecommendAction } from '../../store/actionCreators'



export default memo(function FGQHotRecommend() {
  // state

  
  // redux-hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends : state.getIn(['recommend','hotRecommends'])
  }), shallowEqual)
  const dispatch =  useDispatch();

  // other-hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  const title = "热门推荐";
  const keywords = ["华语","流行","民谣","摇滚","电子"]
  return (
    <HotRecommendWrapper>
      <FGQThemeHeaderRCM title={title} keywords={keywords}></FGQThemeHeaderRCM>
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <FGQSongsCover key={item.id} info={item}>{item.name}</FGQSongsCover>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
