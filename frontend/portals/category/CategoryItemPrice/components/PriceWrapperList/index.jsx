import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@shopgate/pwa-common/components/Grid';
import Price from '@shopgate/pwa-ui-shared/Price';
import PriceStriked from '@shopgate/pwa-ui-shared/PriceStriked';
import PriceInfo from '@shopgate/pwa-ui-shared/PriceInfo';
import styles from './style';
import ExtraPriceInfo from '../ExtraPriceInfo';

/**
 * The PriceWrapperList component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const PriceWrapperList = ({ price, extraPriceInfo }) => (
  <Grid.Item grow={1} className={styles.priceContainer}>
    <Price
      unitPrice={price.unitPrice}
      unitPriceMin={price.unitPriceMin}
      discounted={!!price.discount}
      currency={price.currency}
    />
    <ExtraPriceInfo text={extraPriceInfo} styles={styles.extraPriceInfoWrapper} />
    {(price.msrp > 0 && price.unitPrice !== price.msrp) && (
      <PriceStriked
        value={price.msrp}
        currency={price.currency}
        className={styles.priceStriked}
      />
    )}
    {(!price.msrp && price.unitPriceStriked > 0) && (
      <PriceStriked
        value={price.unitPriceStriked}
        currency={price.currency}
        className={styles.priceStriked}
      />
    )}
    {price.info && (
      <PriceInfo text={price.info} className={styles.priceInfo} />
    )}
  </Grid.Item>
);

PriceWrapperList.propTypes = {
  extraPriceInfo: PropTypes.string,
  price: PropTypes.shape(),
};

PriceWrapperList.defaultProps = {
  extraPriceInfo: null,
  price: {},
};

export default PriceWrapperList;
