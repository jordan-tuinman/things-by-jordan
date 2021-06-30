import { combineReducers } from "redux"

import linkReducer from "./linkReducer"
import sliderReducer from "./sliderReducer"

export default combineReducers({
  link: linkReducer,
  slider: sliderReducer,
})
