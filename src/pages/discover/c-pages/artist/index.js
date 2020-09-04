import React, { memo } from 'react';

import FGQArtistCategory from './c-cpns/artist-category';
import FGQArtistList from './c-cpns/artist-list';
import { FGQArtistWrapper } from './style';

export default memo(function FGQArtist() {
  return (
    <FGQArtistWrapper>
      <div className="content wrap-v2">
        <FGQArtistCategory/>
        <FGQArtistList/>
      </div>
    </FGQArtistWrapper>
  )
})
