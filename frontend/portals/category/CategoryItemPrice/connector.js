import { connect } from 'react-redux';
import { getExtraPriceInfoByProductId, getProductPriceById } from '../../../selectors/product';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {string} productId Given product.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, { productId }) => (
  {
    price: getProductPriceById(state, productId),
    extraPriceInfo: getExtraPriceInfoByProductId(state, productId),
    viewMode: (state.ui && state.ui.categoryPage) ? state.ui.categoryPage.viewMode : '',
  }
);

export default connect(mapStateToProps);
