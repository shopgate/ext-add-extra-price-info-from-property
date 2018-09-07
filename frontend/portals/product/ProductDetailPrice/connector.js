import { connect } from 'react-redux';
import { getCurrentProductExtraPriceInfo } from '../../../selectors/product';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  extraPriceInfo: getCurrentProductExtraPriceInfo(state),
});

export default connect(mapStateToProps);
