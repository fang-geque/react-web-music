import React, { memo } from 'react';

import FGQHotAlbum from './c-cpns/hot-album';
import FGQTopAlbum from './c-cpns/top-album';
import {
  AblumWrapper
} from './style';

export default memo(function FGQAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <FGQHotAlbum/>
      <FGQTopAlbum/>
    </AblumWrapper>
  )
})
