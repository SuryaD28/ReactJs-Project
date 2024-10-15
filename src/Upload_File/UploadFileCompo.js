import React, { useEffect, useState } from "react";
import axios from "axios";

//Upload single File
const UploadFileCompo = () => {
  const [file, setFile] = useState("");

  //   const handleFileChange = (e) => {
  //     console.log(e.target.files[0]);
  //     setFile(e.target.files[0]);
  //   };

  const handleUploadFile = () => {
    console.log("UploadFileHandler called");

    const formData = new FormData();
    formData.append("singlefile", file);

    const result = axios
      .post("http://localhost:5000/uploadSingleFile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) =>
        console.log("Response in Single File Upload", response.data)
      );
    console.log(" Result", result);
  };

  useEffect(() => {
    console.log("Single File ", file);
  }, [file]);

  return (
    <div>
      <h2>Upload File Component</h2>
      <h3>Single File Upload</h3>
      <input
        type="file"
        name="singlefile"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        // onChange={(e) => {
        //   handleFileChange(e);
        // }}
      ></input>
      <button type="button" onClick={handleUploadFile}>
        Upload Single File
      </button>
    </div>
  );
};

export default UploadFileCompo;
