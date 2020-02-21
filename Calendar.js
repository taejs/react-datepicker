import React from 'react';
import classNames from 'classnames';

const day = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const renderDays = () => day.map((v)=><div className={classNames('calendar__cell')}>{v}</div>)

const renderDates = (date) => {
    return [ 
        new Array(date.firstDay).fill(null).map(_=><div className={classNames('calendar__cell')}></div>),
        new Array(date.lastDate).fill(null).map((_, i)=><div className={classNames('calendar__cell')}>{i+1}</div>),
        new Array(6 - date.lastDay).fill(null).map(_=><div className={classNames('calendar__cell')}></div>)
    ];
}

function Calendar({
    selectedDate,
    handleDateChange
}) {
    const handleMonthChangeButton = (direction) => {
        const flag = (direction === 'prev') ? -1 : 1;
        handleDateChange(new Date(selectedDate.dateTime.setMonth(selectedDate.dateTime.getMonth() + flag)));
    }

    return <div className={classNames('calendar__container')}>
        <div className={classNames('calendar__indicator')}>
            <button onClick={()=>handleMonthChangeButton('prev')} className={classNames('calendar__navigator', 'calendar__navigator--prev-month')}></button>
                { selectedDate.year + '.' + selectedDate.month }
            <button onClick={()=>handleMonthChangeButton('next')} className={classNames('calendar__navigator', 'calendar__navigator--next-month')}></button>
        </div>
        <div className={classNames('calendar__header')}>
            { renderDays(selectedDate) }
        </div>
        <div className={classNames('calendar__body')}>
            { renderDates(selectedDate) }
        </div>
    </div>
}

export default Calendar;