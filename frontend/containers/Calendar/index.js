import React, { useEffect } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import CreateOrUpdateEvent from "./CreateOrUpdateEvent";

const localizer = momentLocalizer(moment);

function CalendarApp(props) {
  const [onNavigate, setOnNavigate] = React.useState(null);
  const [count, setCount] = React.useState(0);
  const handleView = (newview) => {
    props?.setView(newview);
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const [actionType, setActionType] = React.useState("create");
  const [event, setEvent] = React.useState(null);
  const [monthevent, setMonthEvent] = React.useState([]);

  const eventPropGetter = (event) => {
    const style = {
      backgroundColor: event.color,
      borderRadius: "10px",
      opacity: 0.8,
      color: "white",
      weight: "bold",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  const getDate = async () => {
    if (props?.state?.events.length === 0) {
      const response = await fetch("https://MongooseAPI.erenyea.repl.co/get");
      const post = await response.json();
      console.log('POST', post);
      if (post.success === true) {
        const senddata = post?.data?.map((i) => {
          var d = i;
          d.start = new Date(i?.start);
          d.end = new Date(i?.end);
          d.id = i?._id;
  
          return d;
        });
        console.log('here', senddata)
        // Filter out events outside the time range
        const filteredData = senddata.filter((event) => {
          const startHour = event.start.getHours();
          const endHour = event.end.getHours();
          const startDate = event.start.getDate();
          const endDate = event.end.getDate();
  
          return startDate === endDate && startHour >= 8 && endHour < 18;
        });
  
        console.log('filter', filteredData)
  
        props?.setState({ events: filteredData });
      }
    }
  };
  const getMonth = async () => {
    if (monthevent.length == 0) {
      const response = await fetch(
        "https://MongooseAPI.erenyea.repl.co/getmonth"
      );
      const month = await response.json();
      console.log(month);
      if (month?.success === true) {
        const senddata = month?.data?.map((i) => {
          var d = i;
          d.start = new Date(i?.start);
          d.end = new Date(i?.end);
          d.id = i?._id;
          d.title = i?.title + ": " + i?.jobs.toString();
          return d;
        });
        setMonthEvent(senddata);
      }
    }
  };

  const updateCalendar = (event) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(event);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://MongooseAPI.erenyea.repl.co/update", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(''))
      .catch((error) => console.log("error", error));
  };

  const handleNavigate = (date, view) => {
    props?.setDate(date);
    props?.setView(view);
  };

  function moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = props.state;
    const idx = events.indexOf(event);
    let allDay = event?.allDay;
    if (!event?.allDay && droppedOnAllDaySlot) {
      allDay = true;
    } else if (event?.allDay && !droppedOnAllDaySlot) {
      allDay = false;
    }

    const updatedEvent = { ...event, start, end, allDay };
    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    props.setState({
      ...props.state,
      events: nextEvents,
    });
  }

  function resizeEvent({ event, start, end }) {
    const { events } = props.state;

    const nextEvents = events.map((existingEvent) => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    props.setState({
      ...props.state,
      events: nextEvents,
    });

  }

  const sendEvent = async (event) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(event);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://MongooseAPI.erenyea.repl.co/post",
      requestOptions
    );
    const data = await response.json();
    return data;
  };

  async function newEvent(event) {

    var starttime = parseInt(event?.starttime.split(":")[0]);
    var starttimeminute = parseInt(event?.starttime.split(":")[1]);
    var endtime = parseInt(event?.endtime.split(":")[0]);
    var endtimeminute = parseInt(event?.endtime.split(":")[1]);
    var start = event?.slots.length == 1 ? event?.start : event?.slots[0];
    var end = event?.slots.length == 1 ? event?.end : event?.slots[1];
    var newstartdate = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
      starttime,
      starttimeminute
    );
    var newenddate = new Date(
      end.getFullYear(),
      end.getMonth(),
      end.getDate(),
      endtime,
      endtimeminute
    );
    var title = `Sunroof fitment for ${event?.work} (No. of Jobs= ${event?.title})`;
    let hour = {
      title: title,
      cars: event?.title,
      workshop: event?.workshop,
      model: event?.work,
      start: newstartdate,
      end: newenddate,
      color: event?.color,
    };
    
    const response = await sendEvent(hour);
    if (response.success == true) {
      props?.setState({
        ...props?.state,
        events: props?.state?.events.concat([hour]),
      });
    } else {
      alert(response?.message);
    }

    return;
  }

  function updateEvent(event) {
    var start = event?.slots.length == 1 ? event?.start : event?.slots[0];
    var end = event?.slots.length == 1 ? event.end : event?.slots[1];
    var starttime = parseInt(event?.starttime.split(":")[0]);
    var starttimeminute = parseInt(event?.starttime.split(":")[1]);
    var endtime = parseInt(event?.endtime.split(":")[0]);
    var endtimeminute = parseInt(event?.endtime.split(":")[1]);
    var newstartdate = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate(),
      starttime,
      starttimeminute
    );
    var newenddate = new Date(
      end.getFullYear(),
      end.getMonth(),
      end.getDate(),
      endtime,
      endtimeminute
    );
    let updatedEvent = {
      id: event?.id,
      title: event?.title,
      person: event?.person,
      start: newstartdate,
      end: newenddate,
      model: event?.model,
    };
    updateCalendar(updatedEvent);
    props?.setState({
      ...props?.state,
      events: props?.state?.events.map((item) =>
        item?.id === updatedEvent?.id ? updatedEvent : item
      ),
    });
    return;
  }

  function onSubmit(value) {
    setIsOpen(false);
    setEvent(null);
    
    if (actionType === "create") {
      newEvent(value);
    }
    if (actionType === "update") {
      updateEvent(value);
    }
  }

  function onSelectEvent(selectedEvent) {
    var sendevent = selectedEvent;
    sendevent.starttime = `${
      sendevent.start.getHours().toString().length == 1
        ? "0" + sendevent.start.getHours().toString()
        : sendevent.start.getHours().toString()
    }:${
      sendevent.start.getMinutes().toString().length == 1
        ? "0" + sendevent.start.getMinutes().toString()
        : sendevent.start.getMinutes().toString()
    }`;
    sendevent.endtime = `${
      sendevent.end.getHours().toString().length == 1
        ? "0" + sendevent.end.getHours().toString()
        : sendevent.end.getHours().toString()
    }:${
      sendevent.end.getMinutes().toString().length == 1
        ? "0" + sendevent.end.getMinutes().toString()
        : sendevent.end.getMinutes().toString()
    }`;
    
    setIsOpen(true);
    setEvent(sendevent);
    setActionType("update");
  }

  function onSelectSlot(selectedSlot) {
    setEvent(selectedSlot);
    setActionType("create");
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setEvent(null);
  }

  const today = new Date();
  useEffect(() => {
    if (props?.view == "month") {
      getMonth();
    } else {
      getDate();
    }
  }, [props?.view]);

  useEffect(() => {
    function getElementByXpath(path) {
      return document.evaluate(
        path,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;
    }

    console.log(props?.view);
    console.log("data", props?.date);
    if (props?.view == "week") {
      var ele = getElementByXpath(`//div[@data-baseweb="block"]//button[contains(text(),'Back')]`)
      ele.disabled = false;
      var ele = getElementByXpath(`//div[@data-baseweb="block"]//button[contains(text(),'Next')]`)
      ele.disabled = false;
    } else {
      if (count == 0) {
        var ele = getElementByXpath(`//div[@data-baseweb="block"]//button[contains(text(),'Back')]`)
        ele.disabled = true;
      } else {
        var ele = getElementByXpath(`//div[@data-baseweb="block"]//button[contains(text(),'Back')]`)
        ele.disabled = false;
      }
      if (count == 2) {
        var ele = getElementByXpath(`//div[@data-baseweb="block"]//button[contains(text(),'Next')]`)
        ele.disabled = true;
      } else {
        var ele = getElementByXpath(`//div[@data-baseweb="block"]//button[contains(text(),'Next')]`)
        ele.disabled = false;
      }
      if (props.date.getMonth() == new Date().getMonth()) {
        setCount(0);
      }
      if (props.date.getMonth() == new Date().getMonth() + 1) {
        setCount(1);
      }
      if (props.date.getMonth() == new Date().getMonth() + 2) {
        setCount(2);
      }
    }

  }, [props?.view, props?.date, count]);

  return (
    <>
      {props?.view == "month" ? (
        <Calendar
          popup
          selectable={props?.view == "month" ? false : true}
          localizer={localizer}
          events={props?.view == "month" ? monthevent : props?.state?.events}
          onSelectSlot={props?.view == "month" ? null : onSelectSlot}
          onSelectEvent={props?.view == "month" ? null : onSelectEvent}
          onDragStart={console.log}
          showMultiDayTimes={true}
          showNavigation={true}
          eventPropGetter={eventPropGetter}
          defaultDate={today}
          startAccessor="start"
          endAccessor="end"
          view={props?.view}
          views={["month", "week"]}
          date={props?.date}
          onNavigate={handleNavigate}
          onView={handleView}
          timeslots={15}
          step={1}
          min={
            new Date(
              today.getFullYear(),
              today.getMonth() - 1,
              today.getDate(),
              8
            )
          }
          max={
            new Date(
              today.getFullYear(),
              today.getMonth() + 1,
              today.getDate(),
              18,
              15
            )
          }
        />
      ) : (
        <>
          <Calendar
            popup
            selectable={props?.view == "month" ? false : true}
            localizer={localizer}
            events={props?.view == "month" ? monthevent : props?.state?.events}
            onSelectSlot={props?.view == "month" ? null : onSelectSlot}
            onSelectEvent={props?.view == "month" ? null : null}
            showMultiDayTimes={true}
            showNavigation={true}
            eventPropGetter={eventPropGetter}
            startAccessor="start"
            endAccessor="end"
            view={props?.view}
            views={["month", "week"]}
            date={props?.date}
            onNavigate={handleNavigate}
            onView={handleView}
            timeslots={15}
            step={1}
            min={
              new Date(
                today.getFullYear(),
                today.getMonth() - 1,
                today.getDate(),
                8
              )
            }
            max={
              new Date(
                today.getFullYear(),
                today.getMonth() + 1,
                today.getDate(),
                18,
                15
              )
            }
          />
        </>
      )}

      {event &&
        (props?.view == "week" ? (
          <CreateOrUpdateEvent
            onClose={close}
            isOpen={isOpen}
            event={event}
            type={actionType}
            onSubmit={(value) => onSubmit(value)}
          />
        ) : (
          ""
        ))}
    </>
  );
}

export default CalendarApp;