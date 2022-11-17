import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthScreen from "./screens/AuthScreen";
import MockLogin from "./components/MockLogin/MockLogin";
import Game from "./components/Game/Game";
import WaitingRoomScreen from "./screens/WaitingRoomScreen/WaitingRoomScreen";
import Gallery from "./gallery/Gallery";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/auth" element={<AuthScreen />}>
            <Route path="login" element={<MockLogin />} />
          </Route>
          <Route path="/waiting-room" element={<WaitingRoomScreen />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
