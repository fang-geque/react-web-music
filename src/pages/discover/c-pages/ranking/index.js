import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import FGQTopRanking from "./c-cpns/top-ranking";

import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";

export default memo(function FGQRanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <FGQTopRanking/>
      </RankingLeft>
     
    </RankingWrapper>
  )
})
