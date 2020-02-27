import React from 'react';
import classNames from 'classnames';
import DateValue from '../DateValue';

const c_indicator = classNames('calendar__indicator');

function CalendarControl({
    selectedDate,
    onDateChange
}) {
    const handleMonthChangeButton = (direction) => {
        const flag = (direction === 'prev') ? -1 : 1;
        onDateChange(new DateValue(selectedDate.year, selectedDate.month + flag, selectedDate.date));
    }

    return (
        <div className={c_indicator}>
        <button onClick={()=>handleMonthChangeButton('prev')} className={classNames('calendar__navigator', 'calendar__navigator--prev-month')}></button>
            { selectedDate.year + '.' + selectedDate.month }
        <button onClick={()=>handleMonthChangeButton('next')} className={classNames('calendar__navigator', 'calendar__navigator--next-month')}></button>
        </div>
    );
}

export default CalendarControl;