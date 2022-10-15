import React, { useState } from "react";
import Form1B from "./Form1B";


export default function ImageInput(props) {
  const [showForm1B, setShowForm1B] = useState(false)

  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();
  const [uploadImage, setUploadImage] = React.useState()

  const handleFileChange = (event) => {

    const file = event.target.files[0];
    setUploadImage(file)
    console.log(file, "file")
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  const uploadDemoImage = () => {
    setShowForm1B(true);
  }
  return (
    <div className=" mt-16 m-auto pb-20 flex flex-col ">
      {source && (
        <img
          className="m-auto w-72 h-48 mb-2 rounded-lg"
          width={width}
          height={height}
          controls
          src={source}
          alt="preview"
        />
      )}
      <div className="w-full m-auto p-6 text-lg text-purple-900 border-2 rounded-md  overflow-auto">{source || "No Image Selected"}</div>
      <input
        ref={inputRef}
        className="w-48 invisible"
        type="file"
        onChange={handleFileChange}
        accept="png,jpg"
      />
      {!source && <button className="border p-1 mt-6 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto" onClick={handleChoose}>Choose File</button>}

      <button
        className="border p-1 mt-2 text-lg rounded-lg bg-purple-900 text-white w-32 m-auto focus:outline-none focus:shadow-outline"
        onClick={uploadDemoImage} >Upload Image</button>
      {showForm1B && <Form1B image={uploadImage} />}
    </div>
  );
}
