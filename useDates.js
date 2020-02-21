import React, { useState } from 'react';

function useDates() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const firstDatesOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDatesOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth()+1, 0);

    return [
        {
            dateTime : selectedDate,
            year: selectedDate.getFullYear(),
            month : selectedDate.getMonth() + 1,
            date : selectedDate.getDate(),
            day : selectedDate.getDay(),
            firstDay : firstDatesOfMonth.getDay(),
            lastDate : lastDatesOfMonth.getDate(),
            lastDay : lastDatesOfMonth.getDay()
        },
        setSelectedDate
    ]

}

export default useDates;