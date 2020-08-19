import React, { memo } from 'react'

import {
  SetterSongerWrapper
} from './style'
import FGQThemeHeaderSmall from '@/components/theme-header-small'

export default memo(function FGQSettleSinger() {
  return (
    <SetterSongerWrapper>
      <FGQThemeHeaderSmall title="入驻歌手" more="查看全部"></FGQThemeHeaderSmall>
    </SetterSongerWrapper>
  )
})
