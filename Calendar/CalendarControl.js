import React from 'react';
import classNames from 'classnames';
import DateValue from '../DateValue';

const c_indicator = classNames('calendar__indicator');
const c_switch =  classNames('calendar__switch');
const c_switchContainer =  classNames('calendar__switch-container');

function CalendarControl({
    selectedDate,
    onDateChange,
    onCalendarChange
}) {
    return (
        <div className={c_indicator}>
            <button onClick={()=>onDateChange('prev')} className={classNames('calendar__navigator', 'calendar__navigator--prev-month')}></button>
                <div className={c_switchContainer}>
                    <button className={c_switch} onClick={(e)=>{e.stopPropagation();  debugger; onCalendarChange('year')}}>{ selectedDate.year }</button>
                    .
                    <button className={c_switch}  onClick={()=>onCalendarChange('month')}>{ selectedDate.month }</button>
                </div>
            <button onClick={()=>onDateChange('next')} className={classNames('calendar__navigator', 'calendar__navigator--next-month')}></button>
        </div>
    );
}

export default CalendarControl;