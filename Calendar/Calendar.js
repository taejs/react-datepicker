import React, {useState} from 'react';
import classNames from 'classnames';
import CalendarHead from './CalendarHead';
import CalendarCell from './CalendarCell';
import CalendarControl from './CalendarControl';
import DateValue from '../DateValue';
import YearCalendar from './YearCalendar';
import MonthCalendar from './MonthCalendar';

const c_body = classNames('calendar__body');

function Calendar({
    selectedDate,
    onDateChange,
    onCalendarChange
}) {
    const handleCellClick = (date) => {
      onDateChange(new DateValue(selectedDate.year, selectedDate.month, date));
    };

    const handleControlChange = (direction) => {
      const flag = (direction === 'prev') ? -1 : 1;
      onDateChange(new DateValue(selectedDate.year, selectedDate.month + flag, selectedDate.date));
    }

    const isValidIndex = i => (i >= selectedDate.startOfMonth && i < selectedDate.endOfMonth + selectedDate.startOfMonth);

    return <div>
      <CalendarControl selectedDate={selectedDate} onDateChange={handleControlChange} onCalendarChange={onCalendarChange}/>
      <CalendarHead />
      <div className={c_body}>
          {
              new Array(7 * 6).fill(0).map((_, i) =>
              {
                  const date = (isValidIndex(i)) ? i  - selectedDate.startOfMonth + 1 : null;
                  return <CalendarCell selected={(selectedDate.date === date)} onClick={handleCellClick.bind(null, date)}>{date}</CalendarCell>
              })
          }
      </div>
    </div>
}

export default Calendar;