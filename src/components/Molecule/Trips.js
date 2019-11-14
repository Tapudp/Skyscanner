import React, { useState } from "react";
import Scrollablediv from "../Atom/Scrollablediv";

function Trips(props) {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  return (
    <div className="row mb-3">
      <div className="d-flex flex-column">
        <div>
          <span className="mx-1">{props.logo}</span>
          <input
            className="rounded border border-dark p-1 mx-1"
            placeholder={props.name}
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />
          <button
            className="bg-light text-transparent border rounded-circle mx-1"
            onClick={() => setItems(prevItems => [...prevItems, inputValue])}
          >
            +
          </button>
        </div>
        <Scrollablediv className="my-3" maxheight="10vh" minheight="5vh">
          <div className="flex-column px-4">
            {items.map((item, index) => (
              <div className="d-flex my-1 flex-row align-items-center justify-content-between">
                <div className="px-3 border border-light rounded">{item}</div>
                <button
                  onClick={() => setItems(items.filter((_, i) => i != index))}
                  className="border border-light bg-light rounded-circle"
                >
                  -
                </button>
              </div>
            ))}
          </div>
        </Scrollablediv>
      </div>
    </div>
  );
}

export default Trips;
