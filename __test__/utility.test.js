import { test } from '../qunit';
import {dateToString} from '../utilities';
import DateValue from '../DateValue';

test('function dateToString should return string following given format', function(assert) {
    const d = new DateValue(2020, 2, 29)._nativeDateObject;
    assert.equal(dateToString(d), '2020-02-29', 'default format is YYYY-MM-DD');
    assert.equal(dateToString(d, 'YYYY-MM-DD'), '2020-02-29', 'YYYY-MM-DD');
    assert.equal(dateToString(d, 'YYYY.MM.DD'), '2020.02.29', 'YYYY.MM.DD');
});