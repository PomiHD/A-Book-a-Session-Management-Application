import { Outlet } from "react-router-dom";
import MainHeader from "../components/Navigation/MainHeader.tsx";

export default function Root() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}
