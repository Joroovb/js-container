/**
 * @jest-environment jsdom
 */

// import { kleurDiv } from './index';
describe('Test de html pagina', () => {
    beforeEach(() => {
        document.body.innerHTML =
            '<div>' +
            '<div id="kleur-hier"></div>' +
            '<button id="button">Submit</button>' +
            '</div>';
        return import('./index');
    });

    test('Kleurt het divje rood', () => {
        document.getElementById('button').click();
        expect(
            document.getElementById('kleur-hier').style.backgroundColor
        ).toEqual('red');
    });
});
