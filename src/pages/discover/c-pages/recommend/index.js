import React, { memo } from "react";

import FGQTopBanner from "./c-cpns/top-banner";
import FGQHotRecommend from "./c-cpns/hot-recommend";
import FGQNewAlbum from "./c-cpns/new-album";
import FGQRecommendRanking from "./c-cpns/recommend-ranking";
import FGQUserLogin from './c-cpns/user-login'
import FGQSettleSinger from './c-cpns/settle-singer'
import FGQHotAnchor from './c-cpns/hot-anchor'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";

function FGQrecommend(props) {
  return (
    <RecommendWrapper>
      <FGQTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <FGQHotRecommend></FGQHotRecommend>
          <FGQNewAlbum />
          <FGQRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <FGQUserLogin/>
          <FGQSettleSinger/>
          <FGQHotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
}

export default memo(FGQrecommend);

// function FGQrecommend(props) {
//   const {getBanners, topBanners} = props;
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return (
//     <div>
//       <h2>FGQrecommend:{topBanners.length}</h2>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(FGQrecommend));
