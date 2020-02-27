import React, { useState } from 'react';

function useDates(initialDate) {
    const [currentDate, setCurrentDate] = useState(initialDate);

    return [
        currentDate,
        setCurrentDate
    ]

}

export default useDates;