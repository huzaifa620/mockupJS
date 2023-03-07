import React, { useEffect, useState } from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Datepicker } from "baseui/datepicker";
import { Modal, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from "baseui/modal";
import { data } from "./data";

export default ({ onClose, isOpen, onSubmit, event }) => {
  const [time, setTime] = useState([]);
  const [title, setTitle] = React.useState(0);
  const [model, setModel] = React.useState("");
  const [workshop, setWorkshop] = React.useState("");
  const [slots, setSlots] = React.useState([event.start, event.end]);
  const [selectedData, setSelectedData] = React.useState([]);
  const [modalModal, setModalModal] = React.useState([ "Ford Motors", "Nissan", "Hyundai", "Honda", "Toyota"]);

  const getthecar = (value) => {
    return modalModal?.filter(
      (item) => item.slice(0, 3).toLowerCase() == value
    )[0];
  };

  const [starttime, setStartTime] = React.useState(
    event.starttime ? event.starttime : "08:00"
  );

  const [endtime, setEndTime] = React.useState(
    event.endtime ? event.endtime : "08:00"
  );

  const fillTime = () => {
    var timetofill = [];
    for (var i = 8; i < 18; i++) {
      for (var j = 0; j < 60; j += 15) {
        timetofill.push(
          (i.toString().length == 1 ? `0${i.toString()}` : i.toString()) +
            ":" +
            (j.toString().length == 1 ? `0${j.toString()}` : j.toString())
        );
      }
    }
    timetofill.push("18:00");
    setTime(timetofill);
  };

  function handleSubmit(e) {
    e.preventDefault();
    var work = modalModal?.filter(
      (item) => item.slice(0, 3).toLowerCase() == model
    )[0];
    var color;
    if (workshop == "1") {
      color = "#42dd60";
    }
    if (workshop == "2") {
      color = "#3F51B5";
    }
    if (workshop == "3") {
      color = "#f408a4";
    }
    if (workshop == "4") {
      color = "#f47908";
    }
    onSubmit({
      ...event,
      title,
      work,
      workshop,
      slots,
      starttime,
      endtime,
      color,
    });
  }
  
  const modelHandler = () => {
    const value = document.getElementById("models").value;
    const filteredData = data;
    filteredData?.sort(
      (a, b) => b.modaldata[value].performance - a.modaldata[value].performance
    );
    setSelectedData(filteredData);
    setModel(value);
  };
  
  const personHandler = (e) => {
    const value = document.getElementById("workshop").value;
    setWorkshop(value);
  };

  const handleStarttime = (event) => {
    const value = document.getElementById("timemodels").value;
    setStartTime(value);
  };

  const handleEndtime = (event) => {
    const value = document.getElementById("endtime").value;
    setEndTime(value);
  };

  useEffect(() => {
    fillTime();
  }, []);

  return (
    <Modal
      onClose={onClose}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={{
        Root: {
          style: {
            zIndex: 99999,
          },
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <FormControl label="Set No of Cars">
            <Input
              id="input-id"
              value={title}
              onChange={(event) => setTitle(event.currentTarget.value)}
              required
              type="number"
            />
          </FormControl>

          <FormControl label="Select Model">
            <>
              <select
                id="models"
                onChange={modelHandler}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected={model != "" ? false : true} disabled>
                  Choose a Model
                </option>
                {modalModal.map((item, index) => (
                  <option
                    key={index}
                    value={item.slice(0, 3).toLowerCase()}
                    selected={
                      model != ""
                        ? model == item.slice(0, 3).toLowerCase()
                          ? true
                          : false
                        : false
                    }
                  >
                    {item}
                  </option>
                ))}
              </select>
            </>
          </FormControl>

          <FormControl label="Select WorkShop">
            <>
              <select
                disabled={model == ""}
                id="workshop"
                onChange={personHandler}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected disabled>
                  Choose a Workshop
                </option>

                <option value="1">Workshop Floor 1</option>
                <option value="2">Workshop Floor 2</option>
                <option value="3">Workshop Floor 3</option>
                <option value="4">Workshop Floor 4</option>
              </select>
            </>
          </FormControl>

          <FormControl label="Set Date">
            <Datepicker
              range
              value={slots}
              onChange={({ date }) => setSlots(date)}
              placeholder="YYYY/MM/DD – YYYY/MM/DD"
            />
          </FormControl>
          <FormControl label="Start Time">
            <>
              <select
                id="timemodels"
                onChange={handleStarttime}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled={workshop == "" ? true : false}
              >
                <option selected={model != "" ? false : true} disabled>
                  Choose a Start Time
                </option>
                {time.map((item, index) => (
                  <option
                    key={index}
                    value={item}
                    selected={
                      model != "" ? (model == item ? true : false) : false
                    }
                  >
                    {item}
                  </option>
                ))}
              </select>
            </>
          </FormControl>
          <FormControl label="End Time">
            <>
              <select
                id="endtime"
                onChange={handleEndtime}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled={workshop == "" ? true : false}
              >
                <option selected={model != "" ? false : true} disabled>
                  Choose a End Time
                </option>
                {time.map((item, index) => (
                  <option
                    key={index}
                    value={item}
                    selected={
                      model != "" ? (model == item ? true : false) : false
                    }
                  >
                    {item}
                  </option>
                ))}
              </select>
            </>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <ModalButton
            type="button"
            onClick={onClose}
            disabled={event.person ? true : false}
          >
            Cancel
          </ModalButton>
          <ModalButton disabled={event.person ? true : false}>Okay</ModalButton>
        </ModalFooter>
      </form>
    </Modal>
  );
};