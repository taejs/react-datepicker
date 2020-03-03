import React from 'react';
import classNames from 'classnames';
import CalendarControl from './CalendarControl';
import DateValue from '../DateValue';
import YearCalendarCell from './YearCalendarCell';

const c_body = classNames('calendar__body');

function YearCalendar({
  selectedDate,
  onDateChange,
  onCalendarChange
}) {
  let startYear = Math.floor((selectedDate.year - 1 ) / 20) * 20; //2001 - 2020처럼 20년 주기로 보임
  console.log(startYear);

  const handleCellClick = (year) => {
    onDateChange(new DateValue(year, selectedDate.month, selectedDate.date));
    onCalendarChange(null);
  };

  const handleControlChange = (direction) => {
    const flag = (direction === 'prev') ? -10 : 10;
    onDateChange(new DateValue(selectedDate.year + flag, selectedDate.month, selectedDate.date));
  };

  return <div>
    <CalendarControl selectedDate={selectedDate} onDateChange={handleControlChange} onCalendarChange={onCalendarChange}/>
    <div className={c_body}>
      {
        new Array(4 * 5).fill(0).map((_, i) =>
        {
          const year = startYear + ((i * 5 % 20) + Math.floor(i / 4)) + 1; // 세로로 1년씩 늘어나는 형태
          return <YearCalendarCell selected={(selectedDate.year === year)} onClick={handleCellClick.bind(null, year)}>{year}</YearCalendarCell>
        })
      }
    </div>
  </div>
}

export default YearCalendar;