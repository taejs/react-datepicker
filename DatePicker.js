import React, { useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import useHandleOuterClick from './useHandleOuterClick';
import './datepicker.css';
import Calendar from './Calendar/Calendar';
import useDates from './useDates';
import DateValue from './DateValue';

function DatePicker() {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useDates(null);
    const open = useCallback(()=> setIsOpen(true), []);
    const close = useCallback(()=> setIsOpen(false), []);

    const handleFocus = () => {
        if(!date) { // 초기화
            let today = new Date();
            setDate(new DateValue(today.getFullYear(), today.getMonth() + 1, today.getDate()));
        }
        open();
    }

    useHandleOuterClick(ref, close);
    const handleDateChange = (date) => {
        setDate(date);
    }

    return <div class={classNames('datepicker__container')} ref={ref}>
        <input value={date} onFocus={handleFocus}/>
        <button></button>
        { isOpen && <Calendar selectedDate={date} handleDateChange={handleDateChange}/>}
    </div>
}

export default DatePicker;