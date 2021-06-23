import React from 'react'
import moment from "moment";
import AddToCalendarHOC from "react-add-to-calendar-hoc";
import {Button} from "react-bootstrap";
import {SimpleDropdown} from "components/MyDropdown";

const startDatetime = moment().utc().add(2, 'days');
const endDatetime = startDatetime.clone().add(2, 'hours');
const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
const event = {
        description: 'Matrimonio Luca e Serena',
        duration,
        endDatetime: endDatetime.format('YYYYMMDDTHHmmssZ'),
        location: 'Basilica di Agliate (MB)',
        startDatetime: startDatetime.format('YYYYMMDDTHHmmssZ'),
        title: 'Matrimonio Luca e Serena',
}
const AddToCalendar = AddToCalendarHOC(Button, SimpleDropdown);

export const CalendarButton = () => (
    <AddToCalendar
        title="date"
        event={event}
        buttonText="Salva la data"
        dropdownProps={{'className': 'dropdown-menu'}}
        linkProps={{'className': 'dropdown-item'}}
    />
)