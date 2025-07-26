import { Tabs } from "expo-router"
import {Photo, PhotoVideo, Settings} from "../../icons";
import { useInterval } from "../../hooks/useInterval";
import { recordingStore } from "../../store/recordingStore";
import { previewImageStore } from "../../store/previewStore";
import { scenesStore } from "../../store/scenesStore";
import { streamingStore } from "../../store/streamingStore";

export default () => {

  const intervalFunctions = async () => {
    await scenesStore.getState().getSceneList()
    await recordingStore.getState().getRecordingStatus()
    await previewImageStore.getState().startPreviewFetching()
    await streamingStore.getState().getStreamingStatus()
  }

  useInterval(intervalFunctions, 1000)

  return (
      <Tabs>
        <Tabs.Screen name="scenes" options={{ headerShown: false, tabBarIcon: ({color}) => <Photo color={color} />}}/>
        <Tabs.Screen name="SessionControl" options={{tabBarLabel: "Session Control",  headerShown: false, tabBarIcon: ({color}) => <PhotoVideo color={color} />}}/>
        <Tabs.Screen name="settings" options={{ headerShown: false, tabBarIcon: ({color}) => <Settings color={color} />}} />
      </Tabs>
  )
}