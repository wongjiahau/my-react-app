import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';

it('should renders the correct text when no enthusiasm level is', () => {
    const hello = enzyme.shallow(<Hello name="Daniel"/>);
    expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('should renders the correct text with explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1}/>);
    expect(hello.find('greeting').text()).toEqual('Hello Daniel!');
});

it('should renders the correct text with explicit enthusiasm of 5', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1}/>);
    expect(hello.find('greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('should throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0}/>);
    }).toThrow();
});

it('should throws when the enthusiasm level is negative', () => {
    expect(() => {
        enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1}/>);
    }).toThrow();
});
