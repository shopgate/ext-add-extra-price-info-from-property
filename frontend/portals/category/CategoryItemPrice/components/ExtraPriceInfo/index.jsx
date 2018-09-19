import React from 'react';
import PropTypes from 'prop-types';

/**
 * The ExtraPrice component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const ExtraPriceInfo = ({ text, styles }) => (
  text ? <div className={styles}>{text}</div> : null
);

ExtraPriceInfo.propTypes = {
  styles: PropTypes.string,
  text: PropTypes.string,
};

ExtraPriceInfo.defaultProps = {
  styles: null,
  text: null,
};

export default ExtraPriceInfo;
