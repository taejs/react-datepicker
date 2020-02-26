import React from 'react';
import classNames from 'classnames';
import CalendarHead from './CalendarHead';
import CalendarCell from './CalendarCell';
import CalendarControl from './CalendarControl';


function Calendar({
    selectedDate,
    handleDateChange
}) {
    const isValidIndex = i => (i >= selectedDate.firstDay && i < selectedDate.lastDate + selectedDate.firstDay);

    return <div className={classNames('calendar__container')}>
        <CalendarControl selectedDate={selectedDate} handleDateChange={handleDateChange} />
        <CalendarHead />
        <div className={classNames('calendar__body')}>
            {
                new Array(7 * 6).fill(0).map((_, i) =>  
                {
                    const date = (isValidIndex(i)) ? i  - selectedDate.firstDay + 1 : null;
                    return <CalendarCell handleClick={handleDateChange}>{date}</CalendarCell>
                })
            }
        </div>
    </div>
}

export default Calendar;