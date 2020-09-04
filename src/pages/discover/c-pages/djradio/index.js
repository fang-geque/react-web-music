import React, { memo } from 'react';

import FGQRadioCategory from './c-cpns/radio-category';
import FGQRadioRecommend from './c-cpns/radio-recommend';
import FGQRadioRanking from './c-cpns/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function FGQDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <FGQRadioCategory />
      <FGQRadioRecommend />
      <FGQRadioRanking />
    </DjRadioWrapper>
  )
})
