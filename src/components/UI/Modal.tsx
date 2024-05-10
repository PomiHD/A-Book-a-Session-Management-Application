import { forwardRef, type ReactNode, useImperativeHandle, useRef } from "react";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { onClose, children },
  ref,
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));

  return (
    <dialog ref={dialog} className={"modal"} onClose={onClose}>
      {children}
    </dialog>
  );
});

export default Modal;
