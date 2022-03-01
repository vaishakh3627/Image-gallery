import React from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  Card,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";

import "./modal.scss";

import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";

const ModelComponent = (props) => {
  const images = [
    {
      imageLine: Image1,
    },
    {
      imageLine: Image2,
    },
    {
      imageLine: Image3,
    },
  ];

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter" className="title">
            Select Image
            <div className="gallery-elements">
              <Button variant="outline-none">Gallery</Button>
              <Button variant="outline-none">Upload</Button>
            </div>
          </Modal.Title>
        </Modal.Header>
        <div className="container1">
          {images.map((img, index) => (
            <img src={img.imageLine} alt="" key={index} className="imgcontainer" />
          ))}
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary">Select</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModelComponent;
