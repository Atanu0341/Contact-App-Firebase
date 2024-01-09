import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="m-auto relative z-50 p-4 min-h-[200px] max-w-[80%] bg-white">
            <div className="flex justify-end ">
              <AiOutlineClose
                onClick={onClose}
                className="text-2xl cursor-pointer"
              />
            </div>
            {children }
          </div>
          <div
            onClick={onClose}
            className="backdrop-blur z-40 h-screen w-screen absolute top-0"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
