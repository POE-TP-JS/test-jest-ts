import {add, substract} from "../math";


describe.each([
    [2,2,4],
    [4,5,9],
    [6,7,13],
    [5,6,11]
    ]
)("Test addition", (a,b,expected)=> {
    test(`${a} + ${b} = ${expected}`,()=>{
        expect(add(a,b)).toBe(expected);
    })
});


describe.each([
        [2,2,0],
        [4,5,-1],
        [9,2,7],
        [9,4,5]
    ]
)("Test subtraction", (a,b,expected)=> {
    test(`${a} - ${b} = ${expected}`,()=>{
        expect(substract(a,b)).toBe(expected);
    })
});


