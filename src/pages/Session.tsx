import { useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/UI/Button.tsx";
import { useEffect, useRef, useState } from "react";
import Input from "../components/UI/Input.tsx";

export default function SessionPage() {
  const [isBooking, setIsBooking] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  function handelStartBooking() {
    console.log("Booking...");
    setIsBooking(true);
  }
  function handelStopBooking() {
    setIsBooking(false);
  }
  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }
  useEffect(() => {
    const modal = dialog.current;
    if (isBooking) {
      // @ts-ignore
      modal.showModal();
    }
    return () => modal?.close();
  }, [isBooking]);

  return (
    <main id="session-page">
      {isBooking && (
        <dialog ref={dialog}>
          <h2>Book Session</h2>
          <Input label={"Your name"} id={"name"} type={"text"} required />
          <Input label={"Your email"} id={"email"} type={"email"} required />
          <div className="actions">
            <Button type="button" onClick={handelStopBooking}>
              Cancel
            </Button>
            <Button>Confirm</Button>
          </div>
        </dialog>
      )}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              {/* Todo: Add button that opens "Book Session" dialog / modal */}
              <Button onClick={handelStartBooking}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
