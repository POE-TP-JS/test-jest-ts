import {add} from "../math";


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

