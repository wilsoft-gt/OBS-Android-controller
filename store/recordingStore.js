import { create } from 'zustand';
import { obsStore } from "./obsStore"

export const recordingStore = create((set, get) => ({
  recordingStats: {outputActive: false, outputPaused: false},
  setRecordingState: (state) => {
    set({ recordingStats: { ...get().recordingStats, outputActive: state } });
  },
  setPausedState: (state) => {
    set({ recordingStats: { ...get().recordingStats, outputPaused: state } });
  },
  startRecording: async () => {
    const obs = obsStore.getState().obs;
    if (obs) {
      await obs.call("StartRecord");
      set({ recordingStats: { outputActive: true, outputPaused: false } });
    }
  },
  stopRecording: async () => {
    const obs = obsStore.getState().obs;
    if (obs) {
      await obs.call("StopRecord");
      set({ recordingStats: { outputActive: false, outputPaused: false } });
    }
  },
  getRecordingStatus: async (bypass=false) => {
    if (get().recordingStats.outputActive || bypass) {
      const obs = obsStore.getState().obs;
      if (obs) {
        const stats = await obs.call("GetRecordStatus");
        set({ recordingStats: stats });
      }
    }
  },
}));