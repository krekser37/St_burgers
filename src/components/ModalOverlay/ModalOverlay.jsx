import React from "react";
import Styles from "./ModalOverlay.module.css";

const ModalOverlay = ({ children, visible, setVisible }) => {

    const modalVisible = [Styles.ModalOverlay]

if (visible) {
    modalVisible.push(Styles.active);
}

  return (
    <div className={`${modalVisible.join(' ')}`} onClick={() => setVisible(false)}>
      <div className={`${Styles.ModalOverlayContent}`} onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default ModalOverlay;
