import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
// import { persistor, store } from "./Redux/index.js"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000/api"
// axios.defaults.baseURL = "https://countdownbackend.vercel.app/api"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
