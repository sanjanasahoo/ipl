const data  = require ('./index')
const q1 = require('./findMatchesPerYear')
test('question1 output', async() => {
    let matches = await data.matchPromise
    expect(q1.findMatchesPerYear(matches)).toEqual(
        {
            '2008': 58,
            '2009': 57,
            '2010': 60,
            '2011': 73,
            '2012': 74,
            '2013': 76,
            '2014': 60,
            '2015': 59,
            '2016': 60,
            '2017': 59
        }
    );
});


