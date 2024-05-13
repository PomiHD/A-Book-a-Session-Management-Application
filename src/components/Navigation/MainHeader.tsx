import { NavLink } from "react-router-dom";
import UpcomingSessions from "../Sessions/UpcomingSessions.tsx";
import Button from "../UI/Button.tsx";
import { useState } from "react";

export default function MainHeader() {
  const [upcomingSessions, setUpcomingSessions] = useState(false);

  function showUpcomingSessions() {
    setUpcomingSessions(true);
  }
  function hideUpcomingSessions() {
    setUpcomingSessions(false);
  }
  return (
    <>
      {upcomingSessions && <UpcomingSessions onClose={hideUpcomingSessions} />}
      <header id={"main-header"}>
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
                end
              >
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/sessions"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Browse Sessions
              </NavLink>
            </li>
            <li>
              <Button onClick={showUpcomingSessions}>Upcoming Sessions</Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
