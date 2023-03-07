import React, { useEffect, useState } from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Modal, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from "baseui/modal";
import { data } from "./data";

const MonthModal = ({ onClose, isOpen, onSubmit, event }) => {
  const [time, setTime] = useState([]);
  const [title, setTitle] = React.useState(event.title ? event.title : "");
  const [model, setModel] = React.useState(event.model ? event.model : "");
  const [slots, setSlots] = React.useState([event.start, event.end]);
  const [selectedData, setSelectedData] = React.useState([]);
  const [personSelect, setPersonSelect] = React.useState( event.person ? event.person : "" );
  const [modalModal, setModalModal] = React.useState([ "Ford Motors", "Nissan", "Hyundai", "Honda", "Toyota" ]);

  const getthecar = (value) => {
    return modalModal.filter(
      (item) => item.slice(0, 3).toLowerCase() == value
    )[0];
  };

  const [starttime, setStartTime] = React.useState( event.starttime ? event.starttime : "" );
  const [endtime, setEndTime] = React.useState( event.endtime ? event.endtime : "" );

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
    var sl = slots;
    var da = sl[1];
    var person = selectedData.filter((i) => {
      if (i.id == personSelect) {
        return true;
      } else {
        return false;
      }
    })[0].name;
    sl[1] = da.setDate(da.getDate() - 1);
    onSubmit({ ...event, title, model, person, sl, starttime, endtime });
  }
  
  const modelHandler = () => {
    const value = document.getElementById("models").value;
    const filteredData = data;
    filteredData.sort(
      (a, b) => b.modaldata[value].performance - a.modaldata[value].performance
    );
    setSelectedData(filteredData);
    setModel(value);
  };

  const personHandler = (e) => {
    const key = e.target.getAttribute("data-key");
    if (document.querySelector(`main[data-key='${key}']`)) {
      document
        .querySelector(`main[data-key='${key}']`)
        .classList.add("bg-gray-900");
    }
    setPersonSelect(key);
  };

  const handleStarttime = (event) => {
    const value = document.getElementById("timemodels").value;
    var da = selectedData.filter((i) => {
      if (i.id == personSelect) {
        return true;
      } else {
        return false;
      }
    });
    var min;
    var hour;
    var cond = false;

    if (da[0].modaldata[model].time + parseInt(value.split(":")[1]) >= 60) {
      min = (da[0].modaldata[model].time + parseInt(value.split(":")[1])) % 60;
      hour = Math.floor(
        (da[0].modaldata[model].time + parseInt(value.split(":")[1])) / 60
      );
      cond = true;
    } else {
      min = da[0].modaldata[model].time + parseInt(value.split(":")[1]);
      hour = 0;
    }

    var end = (parseInt(value.split(":")[0]) + hour).toString();
    end = end.length > 1 ? end : "0" + end;
    end =
      end +
      ":" +
      (min.toString().length > 1 ? min.toString() : "0" + min.toString());
    setEndTime(end);
    setStartTime(value);
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
          <FormControl label="Set Title">
            <Input
              id="input-id"
              value={title}
              onChange={(event) => setTitle(event.currentTarget.value)}
              required
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

          <FormControl label="Select Person">
            <>
              <div className="flex border rounded justify-center border-gray-800 h-[300px] w-full bg-gray-600">
                {model == "" ? (
                  ""
                ) : event.person ? (
                  <main className={"flex w-[130px] flex-col border border-gray-900 rounded items-center hover:bg-gray-900  hover:cursor-pointer active:bg-gray-900"}>
                    <img
                      src={
                        data.filter(
                          (item) =>
                            item.id === event.person.slice(0, 3).toLowerCase()
                        )[0].img
                      }
                      alt=""
                      className="w-[130px] h-[100px] rounded"
                    />
                    <div
                      id="name"
                      className=" text-purple-600 text-bold text-lg"
                    >
                      {
                        data.filter(
                          (item) =>
                            item.id === event.person.slice(0, 3).toLowerCase()
                        )[0].name
                      }
                    </div>
                    <div className=" text-red-600 text-base h-[24px]"></div>
                    <div className="flex flex-col items-center border-gray-400">
                      <div className="text-white text-[14px] text-center">
                        Performance:{" "}
                        <span className=" text-yellow-300 text-center w-full">
                          {
                            data.filter(
                              (item) =>
                                item.id ===
                                event.person.slice(0, 3).toLowerCase()
                            )[0].modaldata[model].performance
                          }
                          /10
                        </span>
                      </div>
                      <div
                        className="text-white text-[14px] text-center" >
                        Time to Completion:{" "}
                        <span className=" text-yellow-300 text-center w-full">
                          {
                            data.filter(
                              (item) =>
                                item.id ===
                                event.person.slice(0, 3).toLowerCase()
                            )[0].modaldata[model].time
                          }{" "}
                          min
                        </span>
                      </div>
                      <div className="text-white text-[14px] text-center">
                        Workload:{" "}
                        <span className=" text-yellow-300 text-center w-full">
                          {
                            data.filter(
                              (item) =>
                                item.id ===
                                event.person.slice(0, 3).toLowerCase()
                            )[0].workload
                          }{" "}
                          jobs this week
                        </span>
                      </div>
                    </div>
                  </main>
                ) : (
                  selectedData?.map((i, ind) => (
                    <main
                      key={ind}
                      onClick={(e) => personHandler(e)}
                      data-key={i.id}
                      className={
                        "flex w-[130px] flex-col border border-gray-900 rounded items-center hover:bg-gray-900  hover:cursor-pointer active:bg-gray-900" +
                        (personSelect != ""
                          ? personSelect == i.id
                            ? "bg-gray-900"
                            : ""
                          : "")
                      }
                    >
                      <img
                        data-key={i.id}
                        src={i.img}
                        alt=""
                        className="w-[130px] h-[100px] rounded"
                      />
                      <div
                        data-key={i.id}
                        id="name"
                        className=" text-purple-600 text-bold text-lg"
                      >
                        {i.name}
                      </div>
                      <div
                        className=" text-red-600 text-base h-[24px]"
                        ddata-key={i.id}
                      >
                        {ind == 0 ? "Recomended*" : ""}
                      </div>
                      <div
                        className="flex flex-col items-center border-gray-400"
                        data-key={i.id}
                      >
                        <div
                          className="text-white text-[14px] text-center"
                          data-key={i.id}
                        >
                          Performance:{" "}
                          <span
                            className=" text-yellow-300 text-center w-full"
                            data-key={i.id}
                          >
                            {i.modaldata[model].performance}/10
                          </span>
                        </div>
                        <div
                          className="text-white text-[14px] text-center"
                          data-key={i.id}
                        >
                          Time to Completion:{" "}
                          <span
                            className=" text-yellow-300 text-center w-full"
                            data-key={i.id}
                          >
                            {i.modaldata[model].time} min
                          </span>
                        </div>
                        <div
                          className="text-white text-[14px] text-center"
                          data-key={i.id}
                        >
                          Workload:{" "}
                          <span
                            className=" text-yellow-300 text-center w-full"
                            data-key={i.id}
                          >
                            {i.workload} jobs this week (
                            {ind == 0
                              ? getthecar(model) + " only"
                              : "except " + getthecar(model)}
                            )
                          </span>
                        </div>
                      </div>
                    </main>
                  ))
                )}
              </div>
            </>
          </FormControl>

          <FormControl label="Start Time">
            <>
              <select
                id="timemodels"
                onChange={handleStarttime}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                disabled={personSelect == "" ? true : false}
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
            <Input
              id="endtime"
              value={endtime}
              disabled
              placeholder={"00:00"}
              required
            />
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

export default MonthModal;