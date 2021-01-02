import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { MINI_HIT_SLOP } from '../constants/hitSlops';
import colors from '../constants/colors';

export default function CloseButton(props) {
  return (
    <TouchableOpacity
      hitSlop={MINI_HIT_SLOP}
      onPress={props.onPress}
      style={props.style}
    >
      <AntDesign name="closecircle" size={24} color={colors.black20} />
    </TouchableOpacity>
  );
}

CloseButton.propTypes = {
  onPress: PropTypes.func,
  style: PropTypes.object,
};
