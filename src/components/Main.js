import React, { useState, useEffect } from "react";

const Main = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [singleDetail, setSingleDetail] = useState({});
  const [details, setDetails] = useState([]);
  const [hide, setHide] = useState("");

  useEffect(() => {
    setSingleDetail({
      Name: `${name}`,
      DateOfBirth: `${dob}`,
      ANumber: `${aadhar}`,
      MobileNumber: `${number}`,
      Age: `${age}`,
    });
  }, [name, dob, aadhar, number, age]);

  useEffect(() => {
    if (dob === "") {
    } else {
      let DOB = new Date(dob);
      let month_diff = Date.now() - DOB.getTime();
      let age_dt = new Date(month_diff);
      let year = age_dt.getUTCFullYear();
      let Age = Math.abs(year - 1970);
      setAge(Age);
    }
  }, [dob]);

  const add = () => {
    if (name === "" || dob === "" || aadhar === "" || number === "") {
      alert("Fill  the inputs values!");
    } else if (aadhar.length !== 12) {
      alert("Aadhar  should be 12 digits .");
    } else if (number.length !== 10) {
      alert("Mobile Number should be 10 digits .");
    } else {
      setDetails([...details, singleDetail]);
      setHide("none");
    }
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(details));
  }, [details]);

  const removeAfterSave = (e) => {
    console.log(e);
    let arr = [];
    details.forEach((ele) => {
      if (ele.ANumber !== e.ANumber) {
        arr.push(ele);
      }
    });
    setDetails(arr);
  };

  const remove = () => {
    setName("");
    setDob("");
    setAadhar("");
    setNumber("");
    setAge("");
  };

  const display = () => {
    setHide("");
    setName("");
    setDob("");
    setAadhar("");
    setNumber("");
    setAge("");
  };
  return (
    <div
     className="flex"
     >
      <h3 className="person">Add Person</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th className="head">Name</th>
              <th className="head">Date of Birth</th>
              <th className="head">Aadhar Number</th>
              <th className="head">Mobile Number</th>
              <th className="head">Age</th>
              <th className="head">Actions</th>
            </tr>
          </thead>
          <tbody>
            {details.map((e, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input defaultValue={e.Name} type={"text"} />
                  </td>
                  <td>
                    <input
                      defaultValue={e.DateOfBirth}
                     // className="input-date"
                      type={"date"}
                    />
                  </td>
                  <td>
                    <input
                    //className="input-num" 
                    defaultValue={e.ANumber}type={"number"}
                    />
                  </td>
                  <td>
                    <input  className="input-num" defaultValue={e.MobileNumber}type={"number"}
                    />
                  </td>
                  <td>{e.Age}</td>
                  <td>
                    <button >Save</button>
                    <button
                      //className="action"
                      onClick={() => removeAfterSave(e)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr style={{ display: hide }}>
              <td>
                <input 
                // className="input-num"
                  value={name}
                  type={"text"}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
              <td>
                <input 
                  value={dob}
                 // className="input-date"
                  type={"date"}
                  onChange={(e) => setDob(e.target.value)}
                />
              </td>
              <td>
                <input value={aadhar}  type={"number"}
                  onChange={(e) => setAadhar(e.target.value)}
                />
              </td>
              <td>
                <input value={number}  type={"number"}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </td>
              <td>{age}</td>
              <td>
                <button  onClick={() => add()}>
                  Save
                </button>
                <button  onClick={() => remove()}>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className="add" onClick={() => display()}>
        Add
      </button>
    </div>
  );
};

export default Main;