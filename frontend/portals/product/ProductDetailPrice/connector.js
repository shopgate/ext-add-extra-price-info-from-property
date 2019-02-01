import { connect } from 'react-redux';
import { getCurrentProductExtraPriceInfo } from '../../../selectors/product';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  extraPriceInfo: getCurrentProductExtraPriceInfo(state, props),
});

export default connect(mapStateToProps);
