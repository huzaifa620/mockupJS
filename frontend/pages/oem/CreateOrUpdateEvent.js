import React, { useEffect } from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { Modal, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from "baseui/modal";
import { data } from "containers/Calendar/oem/data";

export default ({ onClose, isOpen, onSubmit, index }) => {
  const [title, setTitle] = React.useState("");
  const [model, setModel] = React.useState("");
  const [selectedData, setSelectedData] = React.useState([]);
  const [personSelect, setPersonSelect] = React.useState("");
  const [date, setDate] = React.useState();
  const [modalModal, setModalModal] = React.useState(["Ford", "Nissan", "Hyundai", "Honda", "Toyota" ]);

  const getthecar = (value) => {
    return modalModal.filter(
      (item) => item.slice(0, 3).toLowerCase() == value
    )[0];
  };

  function handleSubmit(e) {
    e.preventDefault();
    var workshop = selectedData.filter((item) => item.id == personSelect)[0];
    var carname = modalModal.filter(
      (item) => item.slice(0, 3).toLowerCase() == model
    )[0];
    var startdate = new Date(
      parseInt(date.slice(0, 4)),
      parseInt(date.slice(5, 7)),
      parseInt(date.slice(8, 10))
    );
    var enddate;
    var noofcars = parseInt(title);
    if (noofcars <= 4) {
      enddate = new Date(
        parseInt(date.slice(0, 4)),
        parseInt(date.slice(5, 7)),
        parseInt(date.slice(8, 10))
      );
    } else if (noofcars <= 8) {
      enddate = new Date(
        parseInt(date.slice(0, 4)),
        parseInt(date.slice(5, 7)),
        parseInt(date.slice(8, 10)) + 2
      );
    } else {
      enddate = new Date(
        parseInt(date.slice(0, 4)),
        parseInt(date.slice(5, 7)),
        parseInt(date.slice(8, 10)) + 4
      );
    }
    onSubmit({
      car: parseInt(title),
      model: carname,
      workshop,
      startdate: startdate.toDateString(),
      enddate: enddate.toDateString(),
    });
    
  }
  
  const modelHandler = () => {
    const value = modalModal[index].slice(0, 3).toLowerCase();
    const filteredData = data;

    filteredData.forEach(function (item) {
      item.modaldata = Object.entries(item.modaldata)
        .sort((a, b) => b[1].performance - a[1].performance)
        .reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {});
    });
    
    setSelectedData(filteredData);
    setModel(value);
  };
  useEffect(() => {
    modelHandler();
  });
  const personHandler = (e) => {
    
    const key = e.target.getAttribute("data-key");
    if (document.querySelector(`div[data-key='${key}']`)) {
      document
        .querySelector(`div[data-key='${key}']`)
        .classList.add("bg-gray-900");
    }
    setPersonSelect(key);
  };

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
          <FormControl label="Set Number of Cars">
            <Input
              id="input-id"
              value={title}
              type="number"
              onChange={(event) => setTitle(event.currentTarget.value)}
              required
            />
          </FormControl>

          <FormControl label="Select Model">
            <Input
              id="models"
              value={modalModal[index]}
              type="text"
              disabled
            />
          </FormControl>

          <FormControl label="Select Workshop">
            <>
              <div className="flex border rounded justify-center border-gray-800 h-[300px] w-full bg-gray-600">
                {model == ""
                  ? ""
                  : selectedData?.map((i, ind) => (
                      <div
                        key={ind}
                        onClick={(e) => personHandler(e)}
                        data-key={i.id}
                        className={
                          "flex w-[130px] flex-col border border-gray-900 rounded items-center  hover:bg-gray-900  hover:cursor-pointer active:bg-gray-900" +
                          (personSelect != ""
                            ? personSelect == i.id
                              ? "bg-gray-900"
                              : ""
                            : "")
                        }
                      >
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
                          {ind == 0 ? "Recommended*" : ""}
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
                            Material Present:{" "}
                            <span
                              className=" text-yellow-300 text-center w-full"
                              data-key={i.id}
                            >
                              {i.modaldata[model].material ? "Yes" : "No"}
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
                              {i.workload} cars this week (
                              {ind == 0
                                ? getthecar(model) + " only"
                                : "except " + getthecar(model)}
                              )
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </>
          </FormControl>
          <FormControl label="Select Start Date">
            <Input
              type="date"
              id="starttime"
              required
              value={date}
              onChange={(event) => setDate(event.currentTarget.value)}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <ModalButton type="button" onClick={onClose}>
            Cancel
          </ModalButton>
          <ModalButton>Okay</ModalButton>
        </ModalFooter>
      </form>
    </Modal>
  );
};
