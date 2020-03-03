import React from 'react';
import classNames from 'classnames';
import DateValue from '../DateValue';

const c_indicator = classNames('calendar__indicator');

function CalendarControl({
    selectedDate,
    onDateChange,
    onCalendarSwitch
}) {
    return (
        <div className={c_indicator}>
            <button onClick={()=>onDateChange('prev')} className={classNames('calendar__navigator', 'calendar__navigator--prev-month')}></button>
                <div>
                    <button onClick={()=>onCalendarSwitch('year')}>{ selectedDate.year }</button>
                    .
                    <button onClick={()=>onCalendarSwitch('month')}>{ selectedDate.month }</button>
                </div>
            <button onClick={()=>onDateChange('next')} className={classNames('calendar__navigator', 'calendar__navigator--next-month')}></button>
        </div>
    );
}

export default CalendarControl;