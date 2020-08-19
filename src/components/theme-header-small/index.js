import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  HeaderWrapper
} from "./style"

const FGQThemeHeaderSmall =  memo(function (props) {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/#">{more} </a>
    </HeaderWrapper>
  )
})


FGQThemeHeaderSmall.defaultProps = {

}

FGQThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string
}

export default FGQThemeHeaderSmall