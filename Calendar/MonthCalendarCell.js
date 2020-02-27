import React from 'react';
import classNames from 'classnames';

function MonthCalendarCell({
  onClick,
  selected,
  children
}) {
  return (
  <button onClick={onClick} className={classNames('month-calendar__cell', { 'month-calendar__cell--selected' : selected })}>
      { children }월
  </button>
  );
}

export default MonthCalendarCell;