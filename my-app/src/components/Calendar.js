// src/components/Calendar.js
import React, {
    useRef
} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar() {
    const calendarRef = useRef(null);

    function goNext() {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.next();
    }

    return ( <
        >
        <
        button onClick = {
            goNext
        } > Go Next! < /button> <
        FullCalendar ref = {
            calendarRef
        }
        plugins = {
            [dayGridPlugin]
        }
        /> < /
        >
    );
}