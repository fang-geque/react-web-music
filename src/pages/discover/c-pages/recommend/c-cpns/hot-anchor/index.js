import React, { memo } from 'react'

import {
  hotRadios
} from "@/common/local-data";

import FQGThemeHeaderSmall from '@/components/theme-header-small';
import {
  HotRadioWrapper
} from './style';


export default memo(function FGQHotAnchor() {
  return (
    <HotRadioWrapper>
      <FQGThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {
          hotRadios.map((item, index) => {
            return (
              <div className="item" key={item.picUrl}>
                <a href="/abc" className="image">
                  <img src={item.picUrl} alt="" />
                </a>
                <div className="info">
                  <div className="name">
                    {item.name}
                    <sup className = "u-icn u-icn-1 sprite_icon2"></sup>
                  </div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </HotRadioWrapper>
  )
})
