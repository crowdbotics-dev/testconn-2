import axios from "axios"
import {
  FINN_NEW_CONN_PASSWORD,
  FINN_NEW_CONN_USERNAME
} from "react-native-dotenv"
const finnNewconn = axios.create({
  baseURL: "https://taln.com",
  auth: { username: FINN_NEW_CONN_PASSWORD, password: FINN_NEW_CONN_USERNAME },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
