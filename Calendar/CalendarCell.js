import React from 'react';
import classNames from 'classnames';

function calendarCell({
    handleClick,
    children
}) {
        return (
        <div onClick={handleClick} className={classNames('calendar__cell')}>
            { children }
        </div>)

}

export default calendarCell;