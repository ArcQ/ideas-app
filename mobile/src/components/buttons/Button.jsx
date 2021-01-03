import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import { SMALL_HIT_SLOP } from '../../constants/hitSlops';
import colors from '../../constants/colors';
import { StylePropType } from '../../utils/types';

const basicButtonStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 17,
  borderRadius: 20,
  zIndex: 10,
};

const buttonStyle = {
  outline: {
    ...basicButtonStyle,
    borderColor: colors.white,
    borderWidth: 1,
  },
  filled: {
    ...basicButtonStyle,
    backgroundColor: colors.primary,
  },
  ghost: {
    ...basicButtonStyle,
    flexDirection: 'row',
  },
};

const buttonTextStyle = {
  outline: {
    color: colors.primary,
  },
  filled: {
    color: colors.white,
  },
  ghost: {
    color: colors.primary,
    paddingLeft: 6,
  },
};

const iconStyle = {
  ghost: {
    tintColor: colors.primary,
    width: 28,
    height: 28,
  },
};

export default function Button(props) {
  const { Icon } = props;
  return (
    <TouchableOpacity
      hitSlop={SMALL_HIT_SLOP}
      style={[buttonStyle[props.type], props.buttonStyle]}
      onPress={props.onPress}
      activeOpacity={props.type === 'ghost' ? 0.3 : 0.7}
    >
      {!props.isLoading ? (
        <>
          {Icon && <Icon {...iconStyle[props.type]} />}
          <Text style={[buttonTextStyle[props.type], props.buttonTextStyle]}>
            {props.children}
          </Text>
        </>
      ) : (
        <ActivityIndicator size="small" colors={colors['basic-100']} />
      )}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
  buttonStyle: StylePropType,
  buttonTextStyle: StylePropType,
  Icon: PropTypes.func,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  type: 'filled',
};