import React, { useRef, useState, useCallback } from 'react';
import Calendar from './Calendar';
import useHandleOuterClick from './useHandleOuterClick';
import './datepicker.css';

function DatePicker() {
    const ref = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const open = useCallback(()=> setIsOpen(true));
    const close = useCallback(()=> setIsOpen(false));
    const handleFocus = () => open();
    
    useHandleOuterClick(ref, close);

    return <div class="datepicker__container" ref={ref}>
        <input onFocus={handleFocus}/>
        <button></button>
        { isOpen && <Calendar />}
    </div>
}

export default DatePicker;