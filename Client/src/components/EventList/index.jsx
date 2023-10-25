import { useEffect } from 'react';
import axios from 'axios';
import './index.css';
import Event from '../Event';
import { useEventContext } from '../Context/EventContext';

const EventList = () => {
  const { eventItems, setEventItems } = useEventContext();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios('/server/events');
        setEventItems(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, [setEventItems]);

  const handleDelete = async (eventId) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `/server/events/${eventId}`,
      });

      if (response.status === 200) {
        setEventItems(eventItems.filter(event => event._id !== eventId));
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className="event-list">
      <h1>My List Of Events</h1>
      {eventItems.map(event => (
        <Event key={event._id} event={event} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default EventList;
