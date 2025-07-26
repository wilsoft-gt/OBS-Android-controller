import { useEffect } from "react"

import { Text, Image, View } from "react-native"
import { Container } from "../../components/container"
import { scenesStore } from "../../store/scenesStore"
import { Scenes } from "../../sections/sceneButtonContainer"
import { previewImageStore } from "../../store/previewStore"
import { recordingStore } from "../../store/recordingStore"
import { streamingStore } from "../../store/streamingStore"
import { useShallow } from "zustand/shallow"
import { Broadcast, CircleFilled } from "../../icons"


export default ScenesView = () => {
  const getSceneList = scenesStore(store => store.getSceneList)
  const switchCurrentScene = scenesStore(store => store.switchCurrentScene)
  const scenes = scenesStore(store => store.scenes)
  const currentScene = scenesStore(store => store.currentScene)
  const startPreviewFetching = previewImageStore(store => store.startPreviewFetching)
  const [imagePreview, showPreview] = previewImageStore(useShallow(store => [store.imagePreview, store.showPreview]))
  const recordingStats = recordingStore(store => store.recordingStats)
  const streamingStats = streamingStore(store => store.streamingStats)

  const fetchData = async () => {
    await getSceneList()
    await startPreviewFetching(currentScene)
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  

  const handleSceneChange = async (scene) => {
    await switchCurrentScene(scene)
  }


  if (scenes) {
    return(
      <Container className="flex-1 relative p-1">
        {recordingStats.outputActive || streamingStats.outputActive ?
          <View className="flex flex-row justify-end gap-2 -bottom-6 z-20">
            {recordingStats.outputActive ? <CircleFilled size={16} color="red" /> : null}
            {streamingStats.outputActive ? <Broadcast size={16} color="red" /> : null}
          </View>
          : null
        }       
        {showPreview ? <Image className="bg-black shadow shadow-black rounded-lg" source={{uri: imagePreview}} style={{width: "100%", height: 220}} fadeDuration={0} resizeMode="contain"/> : null}
        <Scenes scenes={scenes} active={currentScene} switchScene={handleSceneChange}/>
      </Container>
    )
  } else {
    return (
      <Container>
        <Text className="text-blue-600">Loading...</Text>
      </Container>
    )
  }
}