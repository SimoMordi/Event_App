import { createContext, useContext, useState } from "react";

export const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

const EventProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const [eventItems, setEventItems] = useState([]);

  const addToEvent = (eventToAdd) => {
    setEventItems((prevEventItems) => {
      return [...prevEventItems, eventToAdd];
    });
  };
  const updateEvent = (updatedEvent) => {
    setEventItems((prevEventItems) => {
      return prevEventItems.map((eventItem) =>
        eventItem._id === updatedEvent._id ? updatedEvent : eventItem
      );
    });
  };

  return (
    <EventContext.Provider
      value={{
        show, setShow,  newDescription,
        setNewDescription, eventItems,
        setEventItems, addToEvent, updateEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
