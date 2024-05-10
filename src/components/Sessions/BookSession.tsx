import Input from "../UI/Input.tsx";
import Button from "../UI/Button.tsx";
import { useEffect, useRef } from "react";

type BookSessionProps = {
  isBooking: boolean;
  onClose: () => void;
};

export default function BookSession({ isBooking, onClose }: BookSessionProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const modal = dialog.current;
    if (isBooking) {
      // @ts-ignore
      modal.showModal();
    }
    return () => modal?.close();
  }, [isBooking]);
  return (
    <dialog ref={dialog}>
      <h2>Book Session</h2>
      <Input label={"Your name"} id={"name"} type={"text"} required />
      <Input label={"Your email"} id={"email"} type={"email"} required />
      <div className="actions">
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button>Confirm</Button>
      </div>
    </dialog>
  );
}
