import React from 'react';
import classNames from 'classnames';
import DateValue from '../DateValue';

const c_indicator = classNames('calendar__indicator');

function CalendarControl({
    selectedDate,
    onDateChange
}) {
    return (
        <div className={c_indicator}>
        <button onClick={()=>onDateChange('prev')} className={classNames('calendar__navigator', 'calendar__navigator--prev-month')}></button>
            { selectedDate.year + '.' + selectedDate.month }
        <button onClick={()=>onDateChange('next')} className={classNames('calendar__navigator', 'calendar__navigator--next-month')}></button>
        </div>
    );
}

export default CalendarControl;