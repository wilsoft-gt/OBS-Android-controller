import { create } from "zustand";
import OBSWebSocket from "obs-websocket-js";



let initialState = {
  obs: new OBSWebSocket()
}

export const obsStore = create((set) => ({
  ...initialState
}))