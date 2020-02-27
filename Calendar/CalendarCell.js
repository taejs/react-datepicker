import React from 'react';
import classNames from 'classnames';

function calendarCell({
    onClick,
    children
}) {
        return (
        <div onClick={onClick} className={classNames('calendar__cell')}>
            { children }
        </div>)

}

export default calendarCell;