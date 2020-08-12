import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import FGQThemeHeaderRCM from "@/components/theme-header-rcm";
import FGQTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";
import { getTopListAction } from "../../store/actionCreators";

export default memo(function FGQRecommendRanking() {
  // redux -hooks
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => {
      return {
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"]),
      }
    },
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <FGQThemeHeaderRCM title="榜单" />
      <div className="tops">
        <FGQTopRanking info={upRanking} />
        <FGQTopRanking info={newRanking} />
        <FGQTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
