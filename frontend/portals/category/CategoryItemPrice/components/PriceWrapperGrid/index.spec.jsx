import React from 'react';
import { mount } from 'enzyme';
import PriceWrapperGrid from './index';

const mockPrice = {
  currency: 'EUR',
  msrp: 0,
  discount: 0,
  unitPrice: 22.95,
  unitPriceMin: 22.95,
  unitPriceStriked: 0,
  info: 'PriceInfoString',
};

const mockPriceStriked = {
  currency: 'EUR',
  msrp: 0,
  discount: 52,
  unitPrice: 10.95,
  unitPriceMin: 10.95,
  unitPriceStriked: 22.95,
  info: '',
};

const mockPriceMsrp = {
  currency: 'EUR',
  msrp: 22.95,
  discount: 52,
  unitPrice: 10.95,
  unitPriceMin: 10.95,
  unitPriceStriked: 0,
  info: 'PriceInfoString',
};

const mockExtraPriceInfo = '120 Tabletten';

describe('<PriceWrapperGrid />', () => {
  it('should render without discounts', () => {
    const component = mount(<PriceWrapperGrid price={mockPrice} extraPriceInfo="" />);
    const price = component.find('Price');
    const priceStriked = component.find('PriceStriked');
    const priceInfo = component.find('PriceInfo');

    expect(component).toMatchSnapshot();

    expect(price.exists()).toBe(true);
    expect(price.prop('currency')).toBe(mockPrice.currency);
    expect(price.prop('unitPrice')).toBe(mockPrice.unitPrice);
    expect(price.prop('unitPriceMin')).toBe(mockPrice.unitPriceMin);
    expect(price.prop('discounted')).toBe(false);

    expect(priceStriked.exists()).toBe(false);

    expect(priceInfo.exists()).toBe(true);
    expect(priceInfo.prop('text')).toBe(mockPrice.info);
  });

  it('should render with strike price', () => {
    const component = mount(<PriceWrapperGrid price={mockPriceStriked} extraPriceInfo="" />);
    const price = component.find('Price');
    const priceStriked = component.find('PriceStriked');
    const priceInfo = component.find('PriceInfo');

    expect(component).toMatchSnapshot();
    expect(price.exists()).toBe(true);
    expect(price.prop('currency')).toBe(mockPriceStriked.currency);
    expect(price.prop('unitPrice')).toBe(mockPriceStriked.unitPrice);
    expect(price.prop('unitPriceMin')).toBe(mockPriceStriked.unitPriceMin);
    expect(price.prop('discounted')).toBe(true);

    expect(priceStriked.exists()).toBe(true);
    expect(priceStriked.prop('currency')).toBe(mockPriceStriked.currency);
    expect(priceStriked.prop('value')).toBe(mockPriceStriked.unitPriceStriked);

    expect(priceInfo.exists()).toBe(false);
  });

  it('should render with msrp', () => {
    const component = mount(<PriceWrapperGrid price={mockPriceMsrp} extraPriceInfo="" />);
    const price = component.find('Price');
    const priceStriked = component.find('PriceStriked');
    const priceInfo = component.find('PriceInfo');

    expect(component).toMatchSnapshot();
    expect(price.exists()).toBe(true);
    expect(price.prop('currency')).toBe(mockPriceMsrp.currency);
    expect(price.prop('unitPrice')).toBe(mockPriceMsrp.unitPrice);
    expect(price.prop('unitPriceMin')).toBe(mockPriceMsrp.unitPriceMin);
    expect(price.prop('discounted')).toBe(true);

    expect(priceStriked.exists()).toBe(true);
    expect(priceStriked.prop('currency')).toBe(mockPriceMsrp.currency);
    expect(priceStriked.prop('value')).toBe(mockPriceMsrp.msrp);

    expect(priceInfo.exists()).toBe(true);
    expect(priceInfo.prop('text')).toBe(mockPriceMsrp.info);
  });

  it('should render with extra price information', () => {
    const component = mount(<PriceWrapperGrid
      price={mockPriceMsrp}
      extraPriceInfo={mockExtraPriceInfo}
    />);
    const price = component.find('Price');
    const priceStriked = component.find('PriceStriked');
    const priceInfo = component.find('PriceInfo');
    const extraPriceInfo = component.find('ExtraPriceInfo');

    expect(component).toMatchSnapshot();
    expect(price.exists()).toBe(true);
    expect(price.prop('currency')).toBe(mockPriceMsrp.currency);
    expect(price.prop('unitPrice')).toBe(mockPriceMsrp.unitPrice);
    expect(price.prop('unitPriceMin')).toBe(mockPriceMsrp.unitPriceMin);
    expect(price.prop('discounted')).toBe(true);

    expect(priceStriked.exists()).toBe(true);
    expect(priceStriked.prop('currency')).toBe(mockPriceMsrp.currency);
    expect(priceStriked.prop('value')).toBe(mockPriceMsrp.msrp);

    expect(priceInfo.exists()).toBe(true);
    expect(priceInfo.prop('text')).toBe(mockPriceMsrp.info);

    expect(extraPriceInfo.exists()).toBe(true);
    expect(extraPriceInfo.prop('text')).toBe(mockExtraPriceInfo);
  });
});
