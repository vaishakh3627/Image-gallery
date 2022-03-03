import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import "./modal.scss";

import { GALLERY, UPLOAD } from "./constatnts";

import Gallery from "./Gallery";
import Upload from "./Upload";

const ModelComponent = ({ modalview, update, ...props }) => {
  const [component, setComponent] = useState(GALLERY);
  const [show, setShow] = useState(false);

  const renderComponent = {
    [GALLERY]: <Gallery setShow={setShow} update={update} {...props} />,
    [UPLOAD]: <Upload />,
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="title">
            Select Image
            <div className="gallery-elements">
              <Button
                variant="outline-none"
                onClick={() => setComponent(GALLERY)}
              >
                Gallery
              </Button>
              <Button
                variant="outline-none"
                onClick={() => setComponent(UPLOAD)}
              >
                Upload
              </Button>
            </div>
          </Modal.Title>
        </Modal.Header>
        {renderComponent[component]}
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" disabled={!show} onClick={props.onHide}>
            Select
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ModelComponent;
