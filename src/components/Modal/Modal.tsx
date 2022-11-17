import React from "react";
import "./Modal.css";

function Modal(props: {
  show?: boolean;
  header?: JSX.Element;
  body?: JSX.Element;
  footer?: JSX.Element;
  setShowModal: Function;
}) {
  return (
    <div
      className="Modal"
      style={{
        display: props.show ? "flex" : "none",
      }}
    >
      <div className="Modal__Content">
        <div className="Modal__Header">{props.header && props.header}</div>
        <div className="Modal__Body">{props.body && props.body}</div>
        <div className="Modal__Footer">
          {props.footer ? (
            props.footer
          ) : (
            <div>
              <button onClick={() => props.setShowModal(false)}>
                Close Modal
              </button>
            </div>
          )}{" "}
        </div>
      </div>
    </div>
  );
}

export default Modal;
