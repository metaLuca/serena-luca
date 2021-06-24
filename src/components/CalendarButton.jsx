import React from 'react'
import moment from "moment";
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import {Button} from "react-bootstrap";
import {SimpleDropdown} from "components/MyDropdown";

const startDatetime = moment('2021-09-18 11:00');
const endDatetime = moment('2021-09-18 18:00');
const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
const event = {
        title: 'Matrimonio Serena e Luca',
        location: 'Basilica dei santi Pietro e Paolo, Agliate (MB)',
        duration,
        startDatetime: startDatetime.format('YYYYMMDDTHHmmssZ'),
        endDatetime: endDatetime.format('YYYYMMDDTHHmmssZ'),
        description: `Sei invitato alla cerimonia di matrimonio di Serena e Luca.
I parcheggi non sono molti e le strade non sono larghissime. Consigliamo di organizzarvi per fare una macchinata unica.
Per altre info: <a href="https://sere-luca.netlify.app/">sere-luca.netlify.app</a>`,
}
const AddToCalendar = AddToCalendarHOC(Button, SimpleDropdown);

export const CalendarButton = () => {
        return (
            <AddToCalendar
                title="date"
                event={event}
                buttonText="Salva la data"
                onRequestClose={e => console.log('aaa',e)}
                linkProps={{className: 'dropdown-item-cal'}}
            />
        )
}
