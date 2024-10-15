import React, { useEffect, useState } from "react";
import axios from "axios";

//Upload File with different Fields name
const UploadwithFields = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState("");

  const handleFileUploadwithField = () => {
    console.log("handleFileUploadwithField Called...");

    const formData = new FormData();
    formData.append("First", first);
    // formData.append("Second", second);
    for (let i = 0; i < second.length; i++) {
      formData.append("Second", second[i]);
    }
    formData.append("Third", third);

    const result = axios
      .post("http://localhost:5000/uploadFilewithField", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log("Response ", res));
    console.log("result", result);
  };

  useEffect(() => {
    console.log("First file Update", first);
    console.log("Second file Update", second);
    console.log("Third file Update", third);
  }, [first, second, third]);
  return (
    <div>
      <h3>Upload File with Different Field</h3>
      <input
        type="file"
        name="First"
        onChange={(e) => {
          setFirst(e.target.files[0]);
        }}
      ></input>
      <input
        type="file"
        name="Second"
        multiple
        onChange={(e) => {
          setSecond(e.target.files);
        }}
      ></input>
      <input
        type="file"
        name="Third"
        onChange={(e) => {
          setThird(e.target.files[0]);
        }}
      ></input>
      <button type="button" onClick={handleFileUploadwithField}>
        Upload files
      </button>
    </div>
  );
};

export default UploadwithFields;
