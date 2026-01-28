import Card from '../ui/Card'
import { Event } from '../../lib/api'

interface EventsListProps {
  events?: Event[]
}

export default function EventsList({ events = [] }: EventsListProps) {
  if (events.length === 0) {
    return null
  }

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Upcoming Events
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card
            key={event.id}
            title={event.title}
            date={event.date}
            description={event.description}
            format={event.format}
          />
        ))}
      </div>
    </section>
  )
}
