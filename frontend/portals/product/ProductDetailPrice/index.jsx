import React from 'react';
import PropTypes from 'prop-types';
import { withPageProductId } from '@shopgate/pwa-extension-kit/connectors';
import connect from './connector';
import styles from './style';

/**
 * The ProductDetailPrice component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const ProductDetailPrice = ({ extraPriceInfo }) => {
  if (extraPriceInfo) {
    return <div className={styles.extraPriceInfoWrapper}>{extraPriceInfo}</div>;
  }
  return null;
};

ProductDetailPrice.propTypes = {
  extraPriceInfo: PropTypes.string,
};

ProductDetailPrice.defaultProps = {
  extraPriceInfo: null,
};

export default withPageProductId(connect(ProductDetailPrice));
