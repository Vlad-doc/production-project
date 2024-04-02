import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('cls', () => {
        expect(classNames('asd', {}, [])).toBe('asd');
    });

    test('cls additional', () => {
        expect(classNames('asd', { hovered: true }, [])).toBe('asd hovered');
    });

    test('cls mods additional', () => {
        expect(classNames('asd', { hovered: true }, ['red'])).toBe('asd red hovered');
    });

    test('cls mods:false additional', () => {
        expect(classNames('asd', { hovered: true, hoisting: false }, ['red']))
            .toBe('asd red hovered');
    });

    test('cls mods:undefined additional', () => {
        expect(classNames('asd', { hovered: true, hoisting: undefined }, ['red']))
            .toBe('asd red hovered');
    });
});
