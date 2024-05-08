import { NavLink } from "react-router-dom";

export default function MainHeader() {
  return (
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
            <NavLink to={"/upcoming-sessions"}>Upcoming Sessions</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
