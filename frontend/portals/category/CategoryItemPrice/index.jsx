import React from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import PriceWrapperGrid from './components/PriceWrapperGrid';
import PriceWrapperList from './components/PriceWrapperList';

const LIST_VIEW = 'list';

/**
 * The CategoryItemPrice component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const CategoryItemPrice = ({ price, extraPriceInfo, viewMode }) => (
  viewMode === LIST_VIEW ?
    <PriceWrapperList price={price} extraPriceInfo={extraPriceInfo} /> :
    <PriceWrapperGrid price={price} extraPriceInfo={extraPriceInfo} />
);

CategoryItemPrice.propTypes = {
  extraPriceInfo: PropTypes.string,
  price: PropTypes.shape(),
  viewMode: PropTypes.string,
};

CategoryItemPrice.defaultProps = {
  extraPriceInfo: null,
  price: {},
  viewMode: LIST_VIEW,
};

export default connect(CategoryItemPrice);
