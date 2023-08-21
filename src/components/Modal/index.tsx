import ReactDOM from 'react-dom';

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  children?: React.ReactNode;
};


const Modal: React.FC<ModalProps>= ({ isModalOpen, setIsModalOpen }) => {
  if (!isModalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal__overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <h1>teste</h1>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
