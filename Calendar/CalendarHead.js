import React from 'react';
import classNames from 'classnames';

const day = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function calendarHead({
}) {
    
    return (
        <div className={classNames('calendar__header')}>
            { day.map((v)=><div className={classNames('calendar__cell')}>{v}</div>) }
        </div>
    );
}

export default calendarHead;