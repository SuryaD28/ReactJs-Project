import React, { useEffect, useState } from "react";
import axios from "axios";

//Upload Multiple file with same Field name
const UploadMultipleFile = () => {
  const [multipleFile, setMultipleFile] = useState([]);

  const handleMultipleFileUpload = () => {
    console.log("HandleMultipleFileUpload Called");

    const formData = new FormData();

    for (let i = 0; i < multipleFile.length; i++) {
      formData.append("multiplefile", multipleFile[i]);
    }

    const result = axios
      .post("http://localhost:5000/uploadMultipleFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log("Response in Multiple File Upload", res));
    console.log("result", result);
  };

  useEffect(() => {
    console.log("Multiple files ", multipleFile);
  }, [multipleFile]);

  return (
    <div>
      <h3>Multiple File Upload</h3>
      <input
        type="file"
        name="multiplefile"
        multiple
        onChange={(e) => {
          setMultipleFile(e.target.files);
        }}
      ></input>
      <button type="button" onClick={handleMultipleFileUpload}>
        Upload Multiple Files
      </button>
    </div>
  );
};

export default UploadMultipleFile;
