import React from 'react';
import classNames from 'classnames';

const day = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function CalendarControl({
    selectedDate,
    handleDateChange
}) {
    const handleMonthChangeButton = (direction) => {
        const flag = (direction === 'prev') ? -1 : 1;
        handleDateChange(new Date(selectedDate.dateTime.setMonth(selectedDate.dateTime.getMonth() + flag)));
    }

    return (
        <div className={classNames('calendar__indicator')}>
        <button onClick={()=>handleMonthChangeButton('prev')} className={classNames('calendar__navigator', 'calendar__navigator--prev-month')}></button>
            { selectedDate.year + '.' + selectedDate.month }
        <button onClick={()=>handleMonthChangeButton('next')} className={classNames('calendar__navigator', 'calendar__navigator--next-month')}></button>
        </div>
    );
}

export default CalendarControl;