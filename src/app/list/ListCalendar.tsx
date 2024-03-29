"use client";

import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import { url } from 'inspector';

export default function ListCalendar() {

  const events = [
    { title: 'event 1', start: '2024-02-07T12:30:00', end: '2024-02-07T14:30:00' },
    { title: 'event 2', start: '2024-02-08T11:00:00', end: '2024-02-08T14:00:00' },
    { title: 'event 3', start: '2024-02-10T14:30:00', end: '2024-02-10T15:00:00' },
    { title: 'All day event', start: '2024-02-09T10:00:00', allDay: true }
  ]

  return (
    <div className="grow h-full">
      <FullCalendar
        plugins={[listPlugin]}
        initialView="listWeek"
        eventSources={[
          { url: 'http://localhost:3000/api/events' }
        ]}
        aspectRatio={1.6}
        height={"100%"}
      />
    </div>
  )
}
