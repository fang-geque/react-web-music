import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import FGQThemeHeaderRCM from '@/components/theme-header-rcm'

import { getNewAlbumAction } from '../../store/actionCreators'

export default memo(function FGQNewAlbum() {

   // 组件自己管理状态
  // const [albums, setAlbums] = useState([]);
  // useEffect(() => {
  //   getNewAlbums(10).then(res => {
  //     console.log(res)
  //     setAlbums(res.albums)
  //   });
  // },[]);

  // redux hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums:state.getIn(["recommend","newAlbums"])
  }),shallowEqual);
  
  const dispatch = useDispatch();

  useEffect(() => {
    // 请求代码
    dispatch(getNewAlbumAction(10))
  }, [dispatch]);

  return (
    <div>
      <FGQThemeHeaderRCM title="新碟上架"></FGQThemeHeaderRCM>
      <div>
        {
          newAlbums.map((item,index) => {
            return <div>{item.name}</div>
          })
        }
      </div>
    </div>
  )
})
