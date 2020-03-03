import React, { useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import useHandleOuterClick from './useHandleOuterClick';
import './datepicker.css';
import Calendar from './Calendar/Calendar';
import useDates from './useDates';
import DateValue from './DateValue';
import MonthCalendar from './Calendar/MonthCalendar';
import YearCalendar from './Calendar/YearCalendar';

const c_container = classNames('calendar__container');

function DatePicker() {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [currentCalendar, setCurrentCalendar] = useState(null);
    const [date, setDate] = useDates(null);
    const [inputValue, setInputValue] = useState('');

    const handleFocus = () => {
        if(!date) { // 초기화
            let today = new Date();
            setDate(new DateValue(today.getFullYear(), today.getMonth() + 1, today.getDate()));
        }
        setIsOpen(true);
    }

    useHandleOuterClick(ref, ()=>setIsOpen(false));

    const handleDateChange = (date) => {
        setDate(date);
        setInputValue(date);
    }

    const handleCalendarChange = (calendarType) => {
        setCurrentCalendar(calendarType);
    }
        
    const renderCalendar = (openedLayer) => { // 년,월 선택하는 창 띄우기
        const props  = {
            selectedDate : date,
            onDateChange : handleDateChange,
            onCalendarChange : handleCalendarChange
        };

        switch(openedLayer) {
            case 'year': return <YearCalendar {...props} />;
            case 'month': return <MonthCalendar  {...props}/>;
            default :  return <Calendar {...props}/>;
        }
    }

    return <div className={classNames('datepicker__container')} ref={ref}>
                                                                  <input value={inputValue} onFocus={handleFocus}/>
<button></button>
    { isOpen && <div className={c_container} >{ renderCalendar(currentCalendar) }</div>}
</div>
}

export default DatePicker;