import React, { useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import Calendar from './Calendar';
import useHandleOuterClick from './useHandleOuterClick';
import './datepicker.css';
import useDates from './useDates';


function DatePicker() {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useDates();
    const open = useCallback(()=> setIsOpen(true));
    const close = useCallback(()=> setIsOpen(false));

    const handleFocus = () => open();

    useHandleOuterClick(ref, close);
    const handleDateChange = (date) => {
        setDate(date);
    }

    return <div class={classNames('datepicker__container')} ref={ref}>
        <input onFocus={handleFocus}/>
        <button></button>
        { isOpen && <Calendar selectedDate={date} handleDateChange={handleDateChange}/>}
    </div>
}

export default DatePicker;