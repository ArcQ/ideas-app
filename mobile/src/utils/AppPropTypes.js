import PropTypes from 'prop-types';

const objectOfString = PropTypes.objectOf(PropTypes.string);

const AppPropTypes = {
  navigation: PropTypes.object,
  style: PropTypes.object,
  errors: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      shortDescription: PropTypes.string,
    }),
  ),
  listData: PropTypes.arrayOf(objectOfString),
  objectOfString,
};

export const IconButtonPropTypes = {
  onPress: PropTypes.func,
  iconProps: PropTypes.object,
  style: AppPropTypes.style,
};

export default AppPropTypes;
