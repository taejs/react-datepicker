import React, { useEffect, useState } from 'react';

const day = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const today = new Date();
const firstDatesOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const firstDay = firstDatesOfMonth.getDay();
const lastDatesOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);
const lastDate = lastDatesOfMonth.getDate();
const lastDay = lastDatesOfMonth.getDay();

const renderDays = () => day.map((v)=><div className="datepicker__cell">{v}</div>)

const renderDates = () => {
    return [ 
        new Array(firstDay).fill(null).map(_=><div className="datepicker__cell"></div>),
        new Array(lastDate).fill(null).map((_, i)=><div className="datepicker__cell">{i+1}</div>),
        new Array(6 - lastDay).fill(null).map(_=><div className="datepicker__cell"></div>)
    ];
}

function Calendar() {
    return <div className="datepicker__container">
        <div className="datepicker__indicator">
            <button className="datepicker__navigator datepicker__navigator--prev-month"></button>
                {
                    today.getFullYear() + '.' + (today.getMonth()+1)
                }
            <button className="datepicker__navigator datepicker__navigator--next-month"></button>
        </div>
        <div className="datepicker__header">
            { renderDays() }
        </div>
        <div className="datepicker__body">
            { renderDates() }
        </div>
    </div>
}

export default Calendar;