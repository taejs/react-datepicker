import {dateToString} from './utilities';

class DateValue {
  _date = new Date(); // DateType

  constructor(year, month, date) {
    this._date = new Date();
    this._date.setFullYear(year);
    this._date.setMonth(month - 1);

    // 현재 말일을 선택하고
    if(date > this.endOfMonth) date = this.endOfMonth;
    this._date.setDate(date);
  }

  get _nativeDateObject () { // for testing
    return this._date;
  }

  get year() {
    return this._date.getFullYear();
  }

  get month() {
    return this._date.getMonth() + 1;
  }

  get date() {
    return this._date.getDate();
  }

  get day() {
    return this._date.getDay();
  }

  get startOfMonth() {
    const startOfMonth = new Date(this._date.getFullYear(), this._date.getMonth(), 1);
    return startOfMonth.getDay();
  }

  get endOfMonth() {
    const endOfMonth = new Date(this._date.getFullYear(), this._date.getMonth() + 1, 0);
    return endOfMonth.getDate();
  }

  get endOfLastMonth() {
    const endOfLastMonth = new Date(this._date.getFullYear(), this._date.getMonth(), 0);
    return endOfLastMonth.getDate();
  }

  toString() {
    if(!this._date) return '';
    return dateToString(this);
  }
}

export default DateValue;