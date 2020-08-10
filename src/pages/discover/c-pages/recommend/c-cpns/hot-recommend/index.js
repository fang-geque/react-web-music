import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import FGQThemeHeaderRCM  from '@/components/theme-header-rcm'
import {
  HotRecommendWrapper
} from './style'
import { getTopBannerAction } from '../../store/actionCreators'



export default memo(function FGQHotRecommend() {
  // state

  // redux-hooks
  const dispatch =  useDispatch();

  // other-hooks
  useEffect(() => {
    dispatch(getTopBannerAction(8));
  }, [dispatch])

  const title = "热门推荐";
  const keywords = ["华语","流行","民谣","摇滚","电子"]
  return (
    <HotRecommendWrapper>
      <FGQThemeHeaderRCM title={title} keywords={keywords}></FGQThemeHeaderRCM>
    </HotRecommendWrapper>
  )
})
