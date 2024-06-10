import { useEffect } from 'react';
import './index.css';

const Modal = ({ closeModal, isOpen, content }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className='fixed inset-0 bg-black/75'
        onClick={closeModal}
        aria-hidden={!isOpen}
      ></div>
      <div
        className='fixed left-1/2 top-1/3 z-10 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-8 py-4 text-left font-semibold shadow-[0_0_10px_#000]'
        onClick={(e) => e.stopPropagation()}
        aria-modal='true'
        role='dialog'
      >
        <p>{content}</p>
        <button
          className='absolute w-8 h-8 text-white bg-black -right-4 -top-4 rounded-2xl'
          onClick={closeModal}
          aria-label='Close modal'
        >
          X
        </button>
      </div>
    </>
  );
};

export default Modal;
