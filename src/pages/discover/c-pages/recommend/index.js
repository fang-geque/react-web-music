import React, { memo, useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

function FGQrecommend(props) {

  // 组件和redux关联：获取数据和进行操作
  const {topBanners} = useSelector( state=>({
    topBanners: state.recommend.topBanners
  }));
  const dispatch = useDispatch();

  // 发送网络请求
  useEffect(()=>{
    dispatch(getTopBannerAction())
  },[dispatch])

  return (
    <div>
      <h2>FGQrecommend:{topBanners.length}</h2>
    </div>
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
