// Redux Storage
// src/js/store/index.js

import { createStore } from "redux";
import rootReducer from "./index";

const store = createStore(rootReducer);

export default store;