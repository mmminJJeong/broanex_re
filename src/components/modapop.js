import React, { useState } from "react";
import "./style/modal.css";
import Modal from "./modal";

const ModalPop = (props) => {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>자세히보기</button>

      <Modal open={modalOpen} close={closeModal} header="Modal heading">
        <main> {props.children} </main>
      </Modal>
    </React.Fragment>
  );
};

export default ModalPop;
