import React from 'react';
import classNames from 'classnames';
import CalendarHead from './CalendarHead';
import CalendarCell from './CalendarCell';
import CalendarControl from './CalendarControl';
import DateValue from '../DateValue';

const c_container = classNames('calendar__container');
const c_body = classNames('calendar__body');

function Calendar({
    selectedDate,
    handleDateChange
}) {
    const handleCellClick = (date) => {
        handleDateChange(new DateValue(selectedDate.year, selectedDate.month, date));
    };

    const isValidIndex = i => (i >= selectedDate.startOfMonth && i < selectedDate.endOfLastMonth + selectedDate.startOfMonth);

    return <div className={c_container}>
        <CalendarControl selectedDate={selectedDate} onDateChange={handleDateChange} />
        <CalendarHead />
        <div className={c_body}>
            {
                new Array(7 * 6).fill(0).map((_, i) =>  
                {
                    const date = (isValidIndex(i)) ? i  - selectedDate.startOfMonth + 1 : null;
                    return <CalendarCell selected={(selectedDate.date === date)} onClick={handleCellClick.bind(null, date)}>{date}</CalendarCell>
                })
            }
        </div>
    </div>
}

export default Calendar;