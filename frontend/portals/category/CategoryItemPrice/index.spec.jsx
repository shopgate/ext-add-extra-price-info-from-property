import React from 'react';
import { mount } from 'enzyme';
import mockRenderOptions from '@shopgate/pwa-common/helpers/mocks/mockRenderOptions';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const GRID_VIEW = 'grid';
const LIST_VIEW = 'list';
const mockedStore = configureStore();
/**
 * Mock component
 * @return {JSX} jsx
*/
const MockPriceWrapperGrid = () => <div>GridItem</div>;
/**
 * Mock component
 * @return {JSX} jsx
 */
const MockPriceWrapperList = () => <div>ListItem</div>;
const mockProductId = 'foo';

jest.mock('./components/PriceWrapperGrid', () => MockPriceWrapperGrid);
jest.mock('./components/PriceWrapperList', () => MockPriceWrapperList);

beforeEach(() => {
  jest.resetModules();
});

/**
 * Creates component with provided store state.
 * @param {Object} mockedState Mocked stage.
 * @return {ReactWrapper}
 */
const createComponent = (mockedState) => {
  /* eslint-disable global-require */
  const CategoryItem = require('./index').default;
  const store = mockedStore(mockedState);
  /* eslint-enable global-require */
  return mount(
    <Provider store={store}>
      <CategoryItem productId={mockProductId} />
    </Provider>,
    mockRenderOptions
  );
};

const commonMockedState = {
  product: {
    currentProduct: {
      productId: mockProductId,
    },
    productsById: {
      [mockProductId]: {
        productData: {
          productId: mockProductId,
        },
      },
    },
  },
};

const mockViewModeList = {
  ui: {
    categoryPage: {
      viewMode: LIST_VIEW,
    },
  },
};

const mockViewModeGrid = {
  ui: {
    categoryPage: {
      viewMode: GRID_VIEW,
    },
  },
};

describe('<CategoryItem />', () => {
  it('should render list product when view is list', () => {
    const component = createComponent({ ...commonMockedState, ...mockViewModeList });
    const listItem = component.find('MockPriceWrapperList');
    const gridItem = component.find('MockPriceWrapperGrid');

    expect(listItem.exists()).toBe(true);
    expect(gridItem.exists()).toBe(false);
  });

  it('should render grid product when view is grid', () => {
    const component = createComponent({ ...commonMockedState, ...mockViewModeGrid });
    const listItem = component.find('MockPriceWrapperList');
    const gridItem = component.find('MockPriceWrapperGrid');

    expect(listItem.exists()).toBe(false);
    expect(gridItem.exists()).toBe(true);
  });

  it('should render grid product when view is null', () => {
    const component = createComponent({ ...commonMockedState });
    const listItem = component.find('MockPriceWrapperList');
    const gridItem = component.find('MockPriceWrapperGrid');

    expect(listItem.exists()).toBe(false);
    expect(gridItem.exists()).toBe(true);
  });
});
