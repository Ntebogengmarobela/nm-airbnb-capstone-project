import { OPEN_MODAL, CLOSE_MODAL } from "../types/modalTypes";

export const openModal = (openClose, content) => {
  return {
    type: OPEN_MODAL,
    payload: {
      openClose,
      content,
    },
  };
};

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
