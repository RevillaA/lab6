const e = require('express');
const numprimo = require('./numprimo');

test('El 2 es primo', ()=> {
    expect(numprimo(2)).toBe(true);
});

test('El 3 es primo', ()=> {
    expect(numprimo(3)).toBe(true);
});

test('El 4 no es primo', ()=> {
    expect(numprimo(4)).toBe(false);
});

test('El 5 es primo', ()=> {
    expect(numprimo(5)).toBe(true);
});

test('El 9 no es primo', ()=> {
    expect(numprimo(9)).toBe(false);
});