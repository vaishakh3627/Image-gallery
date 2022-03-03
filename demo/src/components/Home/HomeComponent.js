import { React, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./layout.scss";

import { AiOutlinePlus } from "react-icons/ai";
import ModelComponent from "../Modal/ModelComponent";

import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";

const HomeComponent = () => {
  const [modalShow, setModalShow] = useState(false);

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

  const [selectedImage, setSelectedImage] = useState(images[""]);
  const [displayImage, setDisplayImage] = useState(false);

  const updateDisplayImage = () => {
    setDisplayImage(true);
  };

  return (
    <Container className="background" fluid>
      <Container className="elements3">
        <Row className="elements">
          <Col sm={9} className="elements1">
            <div className="text-elements">
              <h4 className="text-content1">Set up your WorkPerk</h4>
              <h6 className="text-content2">
                Work perks set up will only take a minutes
              </h6>
              <hr className="line-content" size="6" />
              <h6 className="text-content3">Image</h6>
              <Row className="row-elements">
                {displayImage ? <DisplayImage show={selectedImage}/> : ""}
                <Col>
                  <Button
                    variant="outline-dark"
                    className="button-content"
                    onClick={() => setModalShow(true)}
                  >
                    <AiOutlinePlus className="plus-icon" />
                  </Button>
                  <ModelComponent
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    images={images}
                    modalview={setModalShow}
                    select={selectedImage}
                    selected={setSelectedImage}
                    update={updateDisplayImage}
                  />
                </Col>
              </Row>
              <div></div>
              <div>
                <Button variant="primary" className="button-content1">
                  Next
                </Button>
              </div>
            </div>
          </Col>
          <Col sm={3} className="elements2"></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomeComponent;

const DisplayImage = ({ show }) => {
  return (
    <Col sm={3}>
      <img src={show} alt="" className="display-content" />
    </Col>
  );
};
