import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import style from './style';

export default function ContainerView({children}) {
  return <View style={style.main}>{children}</View>;
}

ContainerView.defaultProps = {
  children: null,
};

ContainerView.propTypes = {
  children: PropTypes.node,
};
