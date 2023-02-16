import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

axios.defaults.baseURL = process.env.REACT_APP_API;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
