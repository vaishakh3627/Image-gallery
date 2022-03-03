import React from "react";
import { useRef } from "react";

import { Button } from "react-bootstrap";

import Image4 from "../../assets/images/image4.png";

const Upload = () => {
    const hiddenFileInput = useRef(null);
  
    const handleClick = (e) => {
      hiddenFileInput.current.click();
    };
  
    return (
      <div className="container1">
        <div className="container2">
          <div>
            <img className="container3" src={Image4} alt="" />
            <h6 className="content-line">DROP FILES HERE OR CLICK TO UPLOAD</h6>
            <h6 className="content-line1">
              Drag files and folders here to upload or click here to browse images
              from your computer
            </h6>
            <Button className="content-button" onClick={handleClick}>
              Select a photo from your computer
            </Button>
            <input
              type="file"
              id="file"
              ref={hiddenFileInput}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    );
  };
  export default Upload;