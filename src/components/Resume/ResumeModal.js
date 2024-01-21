import { Modal, ButtonToolbar, Button, Loader } from "rsuite";
import React from "react";
import Resume, { ResumeButton } from "./Resume";

const ResumeModal = () => {
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //   const handleEntered = () => {
  //     setTimeout(() => setRows({ Resume }), 2000);
  //   };
  const handleEntered = () => {
    setTimeout(() => setRows(80), 500);
  };

  return (
    <>
      <ButtonToolbar>
        <p style={{ padding: "10px 0" }} onClick={handleOpen}>
          Resume
        </p>
      </ButtonToolbar>

      <Modal
        open={open}
        onClose={handleClose}
        onEntered={handleEntered}
        onExited={() => {
          setRows(0);
        }}
      >
        <Modal.Header>
          <Modal.Title>Resume:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {rows ? (
            <Placeholder.Paragraph rows={rows} />
          ) : (
            <div style={{ textAlign: "center" }}>
              <Loader size="md" />
            </div>
          )} */}

          {rows ? (
            <Resume />
          ) : (
            <div style={{ textAlign: "center" }}>
              <Loader size="md" />
            </div>
          )}

          {/* <Resume /> */}
        </Modal.Body>
        <Modal.Footer>
          <ResumeButton />
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ResumeModal;
