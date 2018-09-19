import { css } from 'glamor';

const priceWrapper = css({
  lineHeight: 1.75,
}).toString();

const extraPriceInfoWrapper = css({
  fontSize: '0.70rem',
  lineHeight: 0.75,
  marginTop: 1,
  marginBottom: 3,
}).toString();

const basicPrice = css({
  fontSize: '0.85em',
  marginTop: -1,
}).toString();

export default { priceWrapper, extraPriceInfoWrapper, basicPrice };
