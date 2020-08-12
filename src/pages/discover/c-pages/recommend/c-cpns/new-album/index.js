import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators'

import FGQThemeHeaderRCM from '@/components/theme-header-rcm'
import FGQAlbumCover from '@/components/album-cover';
import { AlbumWrapper } from './style';
import { Carousel } from 'antd';

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

  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    // 请求代码
    dispatch(getNewAlbumAction(10))
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <FGQThemeHeaderRCM title="新碟上架"></FGQThemeHeaderRCM>
      <div className="content">
        <button className="arrow arrow-left sprite_02" 
                onClick={e => { pageRef.current.prev()}}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) *5).map(iten => {
                        return <FGQAlbumCover key={iten.id}
                                              info={iten}
                                              size={100}
                                              width={118} 
                                              bgp="-570px"
                                            >
                                {iten.name}
                              </FGQAlbumCover>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" 
                onClick={e => { pageRef.current.next() }}></button>
      </div>
    </AlbumWrapper>
  )
})
