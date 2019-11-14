import React from "react";
import { Cardiv } from "../Atom/Cardiv";
import Expand from "../Atom/Expand";
import Scrollablediv from "../Atom/Scrollablediv";

export default function Box(props) {
  return (
    <div className="col-5 px-2" style={{ position: "relative" }}>
      <Cardiv
        opac="0.1"
        blurpixels="20px"
        className="rounded"
        style={{ position: "relative" }}
      >
        <div className="py-4">
          <Scrollablediv maxheight="65vh" minheight="60vh">
            <div className="mt-5">
              {props.data.map(item => (
                <Expand
                  message={item.message}
                  date={item.date}
                  buttonname={item.buttonname}
                />
              ))}
            </div>
          </Scrollablediv>
        </div>
      </Cardiv>
      <h1 style={{ position: "absolute", top: -1, left: 20 }}>
        {props.boxname}
      </h1>
    </div>
  );
}
