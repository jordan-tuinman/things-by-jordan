import { createStore } from "redux"
import reducers from "./reducers"

const initialState = {
  link: 0,
  slider: [],
}
const store = createStore(reducers, initialState)

export default store
