import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const DragDrop = ({file, setFile}) => {
    

    const handleChange = (file) => {
      setFile(file);
    };

    return (
      <FileUploader
        file={file}
       /*  handleChange={handleChange} */
        name="file"
        types={fileTypes}
      />
    );
};

export default DragDrop;