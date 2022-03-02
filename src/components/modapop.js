import React, { useState } from "react";
import "./style/modal.css";
import Modal from "./modal";

const ModalPop = props => {
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
      <button onClick={openModal}>자세히 보기</button>
      {/* header 부분에 텍스트를 입력한다. */}
      <Modal open={modalOpen} close={closeModal} header="구축사례">
        {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
        <div>구축사례 진행중입니다.</div>
      </Modal>
    </React.Fragment>
  );
};

export default ModalPop;
