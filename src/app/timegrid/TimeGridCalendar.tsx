"use client";

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function DayGridCalendar() {

  const events = [
    { title: 'event 1', start: '2024-02-14T09:30:00', end: '2024-02-14T10:30:00' },
    { title: 'event 2', start: '2024-02-14T11:00:00', end: '2024-02-14T12:00:00' },
    { title: 'event 3', start: '2024-02-14T14:30:00', end: '2024-02-14T15:00:00' },
    { title: 'event 4', start: '2024-02-14T15:30:00', end: '2024-02-14T16:00:00' },
  ]

  return (
    <div className="grow h-full">
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridDay"
        events={events}
        aspectRatio={1.6}
        height={"100%"}
      />
    </div>
  )
}
