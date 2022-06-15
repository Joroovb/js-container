import { hoofdLetter } from './index';

test('Maakt van het hele woord hoofdletters', () => {
    expect(hoofdLetter('joris')).toBe('JORIS');
    expect(hoofdLetter('Dwarka')).toBe('DWARKA');
});
