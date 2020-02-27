import React from 'react';
import classNames from 'classnames';
import CalendarControl from './CalendarControl';
import DateValue from '../DateValue';
import MonthCalendarCell from './MonthCalendarCell';

const c_container = classNames('calendar__container');
const c_body = classNames('calendar__body');

function MonthCalendar({
  selectedDate,
  handleDateChange
}) {
  const handleCellClick = (month) => {
    handleDateChange(new DateValue(selectedDate.year, month, selectedDate.date));
  };

  const handleControlChange = (direction) => {
    const flag = (direction === 'prev') ? -1 : 1;
    handleDateChange(new DateValue(selectedDate.year + flag, selectedDate.month, selectedDate.date));
  }

  return <div className={c_container}>
    <CalendarControl selectedDate={selectedDate} onDateChange={handleControlChange} />
    <div className={c_body}>
      {
        new Array(12).fill(0).map((_, i) =>
        {
          const month = i + 1;
          return <MonthCalendarCell selected={(selectedDate.month === month)} onClick={handleCellClick.bind(null, month)}>{month}</MonthCalendarCell>
        })
      }
    </div>
  </div>
}

export default MonthCalendar;