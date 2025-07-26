import { useEffect } from "react";
import { obsStore } from "../store/obsStore";
import { scenesStore } from "../store/scenesStore";
import { recordingStore } from "../store/recordingStore";
import { streamingStore } from "../store/streamingStore";


export const useObsListeners = () => {
  const obs = obsStore.getState().obs

  useEffect(() => {
    if (!obs) return;

    const handleSceneCreated = (data) => {
      scenesStore.getState().addNewScene(data)
    }

    const handleSceneRemoved = (data) => {
      scenesStore.getState().removeScene(data)
    }

    const handleSceneChanged = (data) => {
      scenesStore.getState().setCurrentScene({"currentProgramSceneName": data.sceneName, "currentProgramSceneUuid": data.sceneUuid})
    }

    const handleRecordStateChanged = (data) => {
      if (data.outputState === "OBS_WEBSOCKET_OUTPUT_STARTED") recordingStore.getState().setRecordingState(true)
      if (data.outputState === "OBS_WEBSOCKET_OUTPUT_STOPPED") recordingStore.getState().setRecordingState(false)
      if (data.outputState === "OBS_WEBSOCKET_OUTPUT_PAUSED") recordingStore.getState().setPausedState(true)
      if (data.outputState === "OBS_WEBSOCKET_OUTPUT_RESUMED") recordingStore.getState().setPausedState(false)
    }

    const handleStreamStateChanged = (data) => {
      console.log("Stream state changed:", data)
      if (data.outputState === "OBS_WEBSOCKET_OUTPUT_STARTED") streamingStore.getState().setStreamingState(true)
      if (data.outputState === "OBS_WEBSOCKET_OUTPUT_STOPPED") streamingStore.getState().setStreamingState(false)
    }

    obs.on("SceneCreated", handleSceneCreated)
    obs.on("SceneRemoved", handleSceneRemoved)
    obs.on("CurrentProgramSceneChanged", handleSceneChanged)
    obs.on("RecordStateChanged", handleRecordStateChanged)
    obs.on("StreamStateChanged", handleStreamStateChanged)

    return () => {
      obs.off("SceneCreated", handleSceneCreated)
      obs.off("SceneRemoved", handleSceneRemoved)
      obs.off("CurrentProgramSceneChanged", handleSceneChanged)
      obs.off("RecordStateChanged", handleRecordStateChanged)
      obs.off("StreamStateChanged", handleStreamStateChanged)

    }

  }, [obs])
}
