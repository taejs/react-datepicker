import React, { useEffect, useState } from 'react';

const day = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const today = new Date();
const firstDatesOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const firstDay = firstDatesOfMonth.getDay();
const lastDatesOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
const lastDate = lastDatesOfMonth.getDate();
const lastDay = lastDatesOfMonth.getDay();

const renderDays = () => day.map((v)=><div className="calendar__cell">{v}</div>)

const renderDates = () => {
    return [ 
        new Array(firstDay).fill(null).map(_=><div className="calendar__cell"></div>),
        new Array(lastDate).fill(null).map((_, i)=><div className="calendar__cell">{i+1}</div>),
        new Array(6 - lastDay).fill(null).map(_=><div className="calendar__cell"></div>)
    ];
}

function Calendar() {
    return <div className="calendar__container">
        <div className="calendar__indicator">
            <button className="calendar__navigator calendar__navigator--prev-month"></button>
                {
                    today.getFullYear() + '.' + (today.getMonth()+1)
                }
            <button className="calendar__navigator calendar__navigator--next-month"></button>
        </div>
        <div className="calendar__header">
            { renderDays() }
        </div>
        <div className="calendar__body">
            { renderDates() }
        </div>
    </div>
}

export default Calendar;