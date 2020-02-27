import React from 'react';
import classNames from 'classnames';

function calendarCell({
    onClick,
    children
}) {
  return (
  <button onClick={onClick} className={classNames('calendar__cell')}>
      { children }
  </button>
  )
}

export default calendarCell;