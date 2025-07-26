import { create } from "zustand";
import { obsStore } from "./obsStore"
import { scenesStore } from "./scenesStore";

export const previewImageStore = create((set, get) => ({
  imagePreview: null,
  showPreview: true,
  setImagePreview: (preview) => set({imagePreview: preview}),
  setShowPreview: (show) => set({showPreview: show}),
  startPreviewFetching: async () => {
    if (get().showPreview) {
      const obs = obsStore.getState().obs
      const currentScene = scenesStore.getState().currentScene
      let img = await obs.call("GetSourceScreenshot", {imageFormat: "jpeg", width: 480, sourceName: currentScene.currentProgramSceneName})
      await set({imagePreview: img.imageData})
    }
  },
}))