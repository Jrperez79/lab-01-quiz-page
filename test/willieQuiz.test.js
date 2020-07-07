// IMPORT MODULES under test here:
import { countsAsYes } from '../is-yes.js';

const test = QUnit.test;

test('these should all return a true answer', (expect) => {
    //Arrange
    // Set up your arguments and expectations for true result
    const word1 = 'yes';
    const word2 = 'yes sir';
    const word3 = 'yeah';
    const word4 = 'YES';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = countsAsYes(word1);
    const actual2 = countsAsYes(word2);
    const actual3 = countsAsYes(word3);
    const actual4 = countsAsYes(word4);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
});

test('these should all return a false answer', (expect) => {
    //Arrange
    // Set up your arguments and expectations for true result
    const word1 = 'no';
    const word2 = 'no sir';
    const word3 = 'nope';
    const word4 = 'NO';
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = countsAsYes(word1);
    const actual2 = countsAsYes(word2);
    const actual3 = countsAsYes(word3);
    const actual4 = countsAsYes(word4);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected);
    expect.equal(actual2, expected);
    expect.equal(actual3, expected);
    expect.equal(actual4, expected);
});
