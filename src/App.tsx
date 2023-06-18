import { lazy } from "react";
import * as React from "react";
import { Routes, Route } from "react-router-dom";

const Sidebar = lazy(() => import("./components/SideBar/Sidebar"));
const Chatinfo = lazy(() => import("./components/ChatInfo/Chatinfo"));
function App() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Sidebar />}>
          <Route path=":chatId" element={<Chatinfo />} />
        </Route>
      </Route>
    </Routes>
  );
}

export { App };
