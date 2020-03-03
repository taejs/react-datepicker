import React, { useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import useHandleOuterClick from './useHandleOuterClick';
import './datepicker.css';
import useDates from './useDates';
import DateValue from './DateValue';

function DatePickerSet(props) {

    return (<>
        <DatePicker value={}/>
        <DatePicker value={}/>
    </>);
}

export default DatePickerSet;