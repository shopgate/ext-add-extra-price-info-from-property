import React, { Component } from 'react';
import { mount } from 'enzyme';
import mockRenderOptions from '@shopgate/pwa-common/helpers/mocks/mockRenderOptions';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockedStore = configureStore();

beforeEach(() => {
  jest.resetModules();
});

let mockedProductId = null;
jest.mock('@shopgate/pwa-extension-kit/connectors', () => ({
  withPageProductId: WrappedComponent => () => <WrappedComponent productId={mockedProductId} />,
}));

/**
 * Creates component with provided store state.
 * @param {Object} mockedState Mocked stage.
 * @return {ReactWrapper}
 */
const createComponent = (mockedState) => {
  /* eslint-disable global-require */
  const ProductDetailPrice = require('./index').default;
  const store = mockedStore(mockedState);
  /* eslint-enable global-require */
  return mount(
    <Provider store={store}>
      <ProductDetailPrice />
    </Provider>,
    mockRenderOptions
  );
};

const mockedStateWithExtraPriceInfo = {
  product: {
    productsById: {
      foo: {
        productData: {
          productId: 'foo',
          flags: {
            extraPriceInfo: '120 Tabletten',
          },
        },
      },
    },
  },
};

const mockedStateWithoutExtraPriceInfo = {
  product: {
    productsById: {
      foo: {
        productData: {
          productId: 'foo',
        },
      },
    },
  },
};

describe('<ProductDetailPrice />', () => {
  it('should render extraPrice', () => {
    mockedProductId = 'foo';
    const component = createComponent(mockedStateWithExtraPriceInfo);
    const ExtraPriceDiv = component.find('div');

    expect(component).toMatchSnapshot();
    expect(ExtraPriceDiv.exists()).toBe(true);
  });

  it('should not render extraPrice', () => {
    mockedProductId = null;
    const component = createComponent(mockedStateWithoutExtraPriceInfo);
    const ExtraPriceDiv = component.find('div');

    expect(component).toMatchSnapshot();
    expect(ExtraPriceDiv.exists()).toBe(false);
  });
});
