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

  return (
    <EventContext.Provider
      value={{
        show,
        setShow,
        newDescription,
        setNewDescription,
        eventItems,
        setEventItems,
        addToEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
