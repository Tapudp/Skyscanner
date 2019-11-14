import React, { useState } from "react";

function Expand(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={
        expanded
          ? "row bg-light text-dark border border-dark border-3 flex-column m-auto p-1"
          : "row flex-column border-bottom border-light text-light justify-content-between mx-2"
      }
      onClick={() => setExpanded(!expanded)}
    >
      <div className="d-flex flex-row justify-content-between text-left">
        <p className="pt-2">{props.message}</p>
        <p className="pl-2">{props.date}</p>
      </div>
      {expanded && (
        <div className="px-2 pb-2">
          <button className="btn btn-dark border border-dark">
            {props.buttonname}
          </button>
        </div>
      )}
    </div>
  );
}

export default Expand;
