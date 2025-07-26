import { View, ScrollView, Text } from "react-native";
import { SceneButton } from "../components/sceneButton";

export const Scenes = ({scenes, active, switchScene},props) => {
  return(
    <View className="flex flex-1" {...props}>
      <ScrollView className="mt-2 border border-gray-400 border-solid rounded-lg shadow shadow-black bg-neutral-200" contentContainerStyle={{flexGrow: 1}}>
        <View className="flex flex-row justify-evenly flex-wrap gap-4 p-4">
            {scenes.map((scene,index) => <SceneButton key={index} switchScene={switchScene} scene={scene} isActive={scene.sceneName === active.currentProgramSceneName} />)}
        </View>
      </ScrollView>
    </View>
  )
}