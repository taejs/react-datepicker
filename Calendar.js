import React, { useEffect, useState } from 'react';

const day = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const renderDays = () => day.map((v)=><div className="calendar__cell">{v}</div>)

const renderDates = (date) => {
    return [ 
        new Array(date.firstDay).fill(null).map(_=><div className="calendar__cell"></div>),
        new Array(date.lastDate).fill(null).map((_, i)=><div className="calendar__cell">{i+1}</div>),
        new Array(6 - date.lastDay).fill(null).map(_=><div className="calendar__cell"></div>)
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

    return <div className="calendar__container">
        <div className="calendar__indicator">
            <button onClick={()=>handleMonthChangeButton('prev')} className="calendar__navigator calendar__navigator--prev-month"></button>
                { selectedDate.year + '.' + selectedDate.month }
            <button onClick={()=>handleMonthChangeButton('next')} className="calendar__navigator calendar__navigator--next-month"></button>
        </div>
        <div className="calendar__header">
            { renderDays(selectedDate) }
        </div>
        <div className="calendar__body">
            { renderDates(selectedDate) }
        </div>
    </div>
}

export default Calendar;