// assume use jest

import * as Utils from './index';
import * as Extensions from './__mocks';

test('test sortExtensionsByName has current value', () => {
    expect(Utils.sortExtensionsByName(Extensions.defaults)).toBe(Extensions.sortByName);
});

test('test sortExtensionsByExtType has current value', () => {
    expect(Utils.sortExtensionsByExtType(Extensions.defaults)).toBe(Extension.byExtType);
});

test('test getQuarter has current value', () => {
    expect(Utils.getQuarter(3)).toBe(1);
});