import { Outlet } from "react-router-dom";
import MainHeader from "../components/Navigation/MainHeader.tsx";

import {SessionsProvider} from "../context/SessionsContext.tsx";

export default function Root() {
  return (
    
        <SessionsProvider>
            <MainHeader />
            <Outlet />
        </SessionsProvider>
    
  );
}
