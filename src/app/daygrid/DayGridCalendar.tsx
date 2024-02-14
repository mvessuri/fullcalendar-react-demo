"use client";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function DayGridCalendar() {

  return (
    <div className="grow h-full">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        eventSources={[
          { url: 'http://localhost:3000/api/events' }
        ]}
        aspectRatio={1.6}
        height={"100%"}
      />
    </div>
  )
}
