import { Text, Pressable } from "react-native";
import {PhotoCheck, Photo} from "../icons"

export const SceneButton = ({scene, isActive,switchScene}, props) => {
  return (
    <Pressable className="flex justify-center items-center w-1/3 border border-gray-400 border-solid p-3 rounded-lg shadow shadow-black active:shadow active:shadow-neutral-500 bg-white" {...props} onPress={() => switchScene(scene.sceneName)}>
      <Text className="text-center">{scene.sceneName}</Text>
      {isActive ? <PhotoCheck color="black" size={50} /> : <Photo color="gray" size={50} />}
    </Pressable>
  )
}