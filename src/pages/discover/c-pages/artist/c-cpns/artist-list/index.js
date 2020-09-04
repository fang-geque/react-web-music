import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import FGQThemeHeaderNormal from '@/components/theme-header-normal';
import FGQAlphaList from './c-cpns/alpha-list';
import {
  ArtistListWrapper
} from './style';

export default memo(function FGQArtistList() {
  const { currentType } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <FGQThemeHeaderNormal title={currentType.name} />
      <FGQAlphaList/>
    </ArtistListWrapper>
  )
})
