/**
 * @param {Object} context
 * @param {Object} input
 * @return {Promise.<{collection}>}
 */
module.exports = async (context, input) => {
  if (!context.config.extraPriceInfo) {
    return input.products
  }
  const propertyLabel = context.config.extraPriceInfo
  const products = input.products.map(product => {
    const extraPriceInfo = product.properties
      ? findPropertyValue(propertyLabel, product.properties)
      : null
    const productCopy = {...product}

    if (!productCopy.flags) {
      productCopy.flags = {}
    }

    productCopy.flags.extraPriceInfo = extraPriceInfo

    return productCopy
  })

  return { products }
}

/**
 * @param {string} label
 * @param {Object} properties
 * @return {string}
 */
function findPropertyValue (label, properties) {
  const property = properties.find((property) => property.label === label)
  if (!property || !property.value) {
    return null
  }
  return property.value
}
