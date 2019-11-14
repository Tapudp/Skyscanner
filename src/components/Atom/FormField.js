import React from "react";
function FormField(props) {
  const { firstitem, firstplaceholder, seconditem, secondplaceholder } = props;
  return (
    <div className="d-flex flex-row justify-content-between mx-5 my-2">
      <div className="d-flex flex-column align-items-start mx-1">
        <div>{firstitem}</div>
        <div>
          <input
            className="rounded mb-0 p-1 border border-dark"
            placeholder={firstplaceholder}
          />
        </div>
      </div>
      <div className="d-flex flex-column align-items-start mx-1">
        <div>{seconditem}</div>
        <div>
          <input
            className="rounded mb-0 p-1 border border-dark"
            placeholder={secondplaceholder}
          />
        </div>
      </div>
    </div>
  );
}

export default FormField;
