'use strict'
const chai = require('chai')

const addExtraPrice = require('../../addExtraPriceInfo')

const context = {
  config: {
    extraPriceInfo: 'extra info property'
  }
}

const collectionWithExtraPrice = [
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

const collectionWithoutExtraPrice = [
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

const collectionAfterExtraPriceAdded = [
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

const collectionAfterNoExtraPriceAdded = [
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
    const results = await addExtraPrice(context, {collection: collectionWithExtraPrice})

    chai.assert.deepEqual(results, {collection: collectionAfterExtraPriceAdded})
  })

  it('should not have extra price', async () => {
    const results = await addExtraPrice(context, {collection: collectionWithoutExtraPrice})

    chai.assert.deepEqual(results, {collection: collectionAfterNoExtraPriceAdded})
  })
})
