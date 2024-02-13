import { NextResponse, NextRequest } from 'next/server'

// Generate a random event title.
function randomTitle() {
  const titles = ['Birthday Party', 'Meeting', 'Conference', 'Event', 'Training', 'Lunch', 'Team meeting', 'Appointment', 'Interview', 'Doctor']
  return titles[Math.floor(Math.random() * titles.length)]
}

// Returns 10 random events for this week in JSON format.
export async function GET(request: NextRequest) {

  const params = request.nextUrl.searchParams

  const start = params.get('start')
  const end = params.get('end')

  if (!start || !end) {
    return NextResponse.json({ error: 'start and end are required' }, { status: 400 })
  }

  let events = [];

  // Durations in milliseconds
  const durations = [30 * 60 * 1000, 60 * 60 * 1000];

  // For each day in the interval, create 2 to 5 random events.
  for (let i = new Date(start); i <= new Date(end); i.setDate(i.getDate() + 1)) {
    const numEvents = Math.floor(Math.random() * 4) + 2
    let lastEventEnd = new Date(i);
    for (let j = 0; j < numEvents; j++) {
      const eventStart = new Date(lastEventEnd.getTime() + Math.floor(Math.random() * 24) * 60 * 60 * 1000)
      // If the event starts after 11 PM, skip this iteration
      if (eventStart.getHours() >= 23) {
        continue;
      }
      const duration = durations[Math.floor(Math.random() * durations.length)];
      const eventEnd = new Date(eventStart.getTime() + duration)
      const event = {
        title: randomTitle(),
        start: eventStart.toISOString(),
        end: eventEnd.toISOString(),
      }
      events.push(event)
      lastEventEnd = eventEnd;
    }
  }

  return NextResponse.json(events, { status: 200 })
}
