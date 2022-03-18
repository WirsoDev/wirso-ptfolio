const dataService = require('../services/dataService')


describe('data tests', () => {

    test('check length', () => {
        let value = dataService.allStats()
        expect(value).toBe(1);
      })
})