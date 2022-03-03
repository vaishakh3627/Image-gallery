import React from "react";

const Gallery = ({ setShow, update, ...props }) => {
  const updateShow = () => {
    setShow(true);
  };

  return (
    <>
      <div className="container1">
        {props.images &&
          props.images.map((img, index) => (
            <img
              style={{
                border:
                  props.select === img.imageLine ? "3px solid skyblue" : "",
              }}
              src={img.imageLine}
              alt=""
              key={index}
              className="imgcontainer"
              onClick={() => {
                props.selected(img.imageLine);
                updateShow();
                update();
              }}
            />
          ))}
      </div>
    </>
  );
};
export default Gallery;
