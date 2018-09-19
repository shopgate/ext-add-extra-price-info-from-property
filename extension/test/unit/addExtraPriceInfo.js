'use strict'
const chai = require('chai')

const addExtraPrice = require('../../addExtraPriceInfo')

const context = {
  config: {
    extraPriceInfo: 'extra info property'
  }
}

const productsWithExtraPrice = [
  {
    id: '123',
    properties: [
      {
        label: 'extra info property',
        value: '120 Kapsen'
      }
    ]
  }
]

const productsWithoutExtraPrice = [
  {
    id: '123',
    properties: [
      {
        label: 'not extra info property',
        value: 'unneeded value'
      }
    ]
  }
]

const productsAfterExtraPriceAdded = [
  {
    id: '123',
    properties: [
      {
        label: 'extra info property',
        value: '120 Kapsen'
      }
    ],
    flags: {
      extraPriceInfo: '120 Kapsen'
    }
  }
]

const productsAfterNoExtraPriceAdded = [
  {
    id: '123',
    properties: [
      {
        label: 'not extra info property',
        value: 'unneeded value'
      }
    ],
    flags: {
      extraPriceInfo: null
    }
  }
]

describe('addExtraPrice', () => {
  it('should have extra price', async () => {
    const results = await addExtraPrice(context, {products: productsWithExtraPrice})

    chai.assert.deepEqual(results, {products: productsAfterExtraPriceAdded})
  })

  it('should not have extra price', async () => {
    const results = await addExtraPrice(context, {products: productsWithoutExtraPrice})

    chai.assert.deepEqual(results, {products: productsAfterNoExtraPriceAdded})
  })
})
