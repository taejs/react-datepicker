import React from 'react';
import classNames from 'classnames';

function YearCalendarCell({
  onClick,
  selected,
  children
}) {
  return (
  <button onClick={onClick} className={classNames('year-calendar__cell', { 'year-calendar__cell--selected' : selected })}>
      { children }
  </button>
  );
}

export default YearCalendarCell;