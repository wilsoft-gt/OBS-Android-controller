import { create } from "zustand";
import { obsStore } from "./obsStore";


export const streamingStore = create((set, get) => ({
  streamingStats: {outputActive: false},
  setStreamingState: (state) => {
    console.log("Setting streaming state to:", state);
    set({ streamingStats: { ...get().streamingStats, outputActive: state } });
  },
  startStreaming: async () => {
    const obs = obsStore.getState().obs;
    if (obs) {
      await obs.call("StartStream");
    }
  },
  stopStreaming: async () => {
    const obs = obsStore.getState().obs;
    if (obs) {
      await obs.call("StopStream");
      set({ streamingStats: { outputActive: false } });
    }
  },
  getStreamingStatus: async (bypass=false) => {
    if (get().streamingStats.outputActive || bypass) {
      const obs = obsStore.getState().obs;
      if (obs) {
        const stats = await obs.call("GetStreamStatus");
        console.log("Streaming stats:", stats);
        set({ streamingStats: stats });
      }
    }
  }
}));