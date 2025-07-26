import { create } from 'zustand';
import { obsStore } from "./obsStore"

export const scenesStore = create((set, get)=> ({
  scenes: [],
  currentScene: null,
  setScenes: (scenes) => set({ scenes: scenes }),
  getSceneList: async () => {
    const obs = obsStore.getState().obs
    let fetchesScenes = await obs.call("GetSceneList")
    set({scenes: fetchesScenes.scenes.map(scene => scene)})
    delete fetchesScenes.scenes
    set({currentScene: fetchesScenes})
  },
  switchCurrentScene: async (scene) => {
    const obs = obsStore.getState().obs
    await obs.call("SetCurrentProgramScene", {"sceneName": scene})
    set({currentScene: {...get().currentScene, currentProgramSceneName: scene}})
  },
  setCurrentScene: (scene) => {
    set({currentScene: scene})
  },  
  addNewScene: (scene) => {
    set({scenes: [...get().scenes, scene]})
  },
  removeScene: (scene) => {
    const newList = get().scenes.filter(item => item.sceneUuid !== scene.sceneUuid)
    set({scenes: newList})  
  }
}))