import React, { useState } from "react";

function RMain() {
  const [input, setInput] = useState();
  const [result, setResult] = useState("");

  let str = localStorage.getItem("data");
  let data = JSON.parse(str);

  const check = () => {
    data.forEach((e) => {
      if (e.ANumber === input) {
        setResult(e);
      }
    });
  };

 
  return (
    <div className="ret">
      <h3>Retrieve Information</h3>
      <div >
      <div>
        <input
          className="search"
          type={"number"}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-find" onClick={() => check()}>
          Find
        </button>
      </div>
      <div>
        {result === "" ? (
          <h1 className="no-data">NO DATA</h1>
        ) : (
          <div >
            <h3>Name: <span>{result.Name} </span> </h3>
            <h3>DOB: <span>{result.DateOfBirth} </span> </h3>
            <h3>Aadhar: <span>{result.ANumber} </span> </h3>
            <h3>Mobile No: <span>{result.MobileNumber} </span> </h3>
            <h3>Age: <span>{result.Age} </span> </h3>
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

export default RMain;