import React, { useState } from "react";

function History(props) {
  const [taped, setTaped] = useState(false);
  return (
    <div
      className={
        taped
          ? "row bg-light text-dark flex-column border-bottom border-light mb-2"
          : "row flex-row text-light border-bottom border-light mb-2"
      }
      onClick={() => setTaped(!taped)}
    >
      <div
        className={
          taped ? "row flex-row justify-content-between mx-2" : "col-6"
        }
      >
        <p>{props.title}</p>
        {taped && <span>{props.price}$</span>}
      </div>

      <div
        className={
          taped ? "row flex-row mx-2 justify-content-between" : "col-6"
        }
      >
        {taped && <button className="btn-dark">Download Reciept</button>}
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default History;
