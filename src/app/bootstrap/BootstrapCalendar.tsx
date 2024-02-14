"use client";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import bootstrap5Plugin from '@fullcalendar/bootstrap5';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function DayGridCalendar() {

  return (
    <div className="grow h-full">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, bootstrap5Plugin]}
        themeSystem='bootstrap5'
        initialView="dayGridMonth"
        eventSources={[
          { url: 'http://localhost:3000/api/events' }
        ]}
        aspectRatio={1.6}
        height={"100%"}

        headerToolbar={{
          left: 'prev,next today myCustomButton',
          center: 'title',
          right: 'dayGridMonth,timeGridDay'
        }}

        customButtons={{
          myCustomButton: {
            text: 'Custom',
            icon: 'plus-square-fill',
            click: function () {
              alert('Clicked the custom button.');
            }
          }
        }}

        buttonIcons={{
          dayGridMonth: 'calendar-month',
          timeGridDay: 'calendar-date',
        }}

      />
    </div>
  )
}
