import { createSelector } from 'reselect';
import {
  getProductById,
  getCurrentProduct,
} from '@shopgate/pwa-common-commerce/product/selectors/product';

/**
 * @param {Object} product Product data.
 * @return {string|null}
 */
const findExtraPriceInfo = (product) => {
  if (!product) {
    return null;
  }

  if (product.flags && product.flags.extraPriceInfo) {
    return product.flags.extraPriceInfo;
  }

  if (product.productData
    && product.productData.flags
    && product.productData.flags.extraPriceInfo
  ) {
    return product.productData.flags.extraPriceInfo;
  }

  return null;
};

export const getExtraPriceInfoByProductId = createSelector(
  getProductById,
  product => findExtraPriceInfo(product)
);

export const getProductPriceById = createSelector(
  getProductById,
  product => product.productData.price
);

export const getCurrentProductExtraPriceInfo = createSelector(
  getCurrentProduct,
  product => findExtraPriceInfo(product)
);
