import { createStore } from "redux"
import reducers from "../state/reducers"

const initialState = {
  link: 0,
}
const store = createStore(reducers, initialState)

export default store
