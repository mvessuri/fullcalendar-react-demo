"use client";

import FullCalendar from '@fullcalendar/react'
import multiMonthPlugin from '@fullcalendar/multimonth'

export default function MultiCalendar() {

  return (
    <div className="grow h-full">
      <FullCalendar
        plugins={[multiMonthPlugin]}
        initialView="multiMonthYear"
        aspectRatio={1.6}
        height={"100%"}
      />
    </div>
  )
}
