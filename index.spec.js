const testFunction = require('./index.js');


describe('index function',() => {
    it('It should return 3',() => {
        expect(testFunction([1,4,6,7,8,20], [2,7,15])).toBe(11)      
    })    
})

