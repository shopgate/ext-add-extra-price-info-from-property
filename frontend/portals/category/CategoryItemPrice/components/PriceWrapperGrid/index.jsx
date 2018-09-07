import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@shopgate/pwa-common/components/Grid';
import Price from '@shopgate/pwa-ui-shared/Price';
import PriceInfo from '@shopgate/pwa-ui-shared/PriceInfo';
import PriceStriked from '@shopgate/pwa-ui-shared/PriceStriked';
import styles from './style';

/**
 * The PriceWrapperGrid component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const PriceWrapperGrid = ({ price, extraPriceInfo }) => (
  <Fragment>
    <Grid className={styles.priceWrapper} wrap>
      <Grid.Item grow={1}>
        <Price
          unitPrice={price.unitPrice}
          unitPriceMin={price.unitPriceMin}
          discounted={!!price.discount}
          currency={price.currency}
        />
        {extraPriceInfo && (
          <div className={styles.extraPriceInfoWrapper}>
            {extraPriceInfo}
          </div>
        )}
      </Grid.Item>
      {(price.msrp > 0 && price.unitPrice !== price.msrp) && (
        <Grid.Item>
          <PriceStriked
            value={price.msrp}
            currency={price.currency}
          />
        </Grid.Item>
      )}
      {(!price.msrp && price.unitPriceStriked > 0) && (
        <Grid.Item>
          <PriceStriked
            value={price.unitPriceStriked}
            currency={price.currency}
          />
        </Grid.Item>
      )}
    </Grid>
    <Grid>
      {price.info && (
        <Grid.Item>
          <PriceInfo className={styles.basicPrice} text={price.info} />
        </Grid.Item>
      )}
    </Grid>
  </Fragment>
);

PriceWrapperGrid.propTypes = {
  extraPriceInfo: PropTypes.string,
  price: PropTypes.shape(),
};

PriceWrapperGrid.defaultProps = {
  extraPriceInfo: null,
  price: {},
};

export default PriceWrapperGrid;
