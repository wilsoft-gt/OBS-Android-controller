import { useState, useEffect } from "react";
import { Pressable  } from "react-native";
import {X, Check} from "../icons";
import Animated, { withSpring, interpolateColor, useAnimatedStyle} from "react-native-reanimated";

export const Switch = ({value=null, onToggle=null}) => {
  let [active, setActive] = useState(true)

  useEffect(() => {
    if (value != null) {
      value(active)
    }
  }, [])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(active ? 27 : 0, {duration:500})}],
    backgroundColor: interpolateColor(active, [0,1], ["#f87171", "#4ade80"])
  }))

  const handleActive = () => {
    setActive(!active)
    if (value) value(!active)
    if (onToggle) onToggle(!active)
  }
  
  return (
    <Pressable className="flex flex-row border border-solid border-gray-400 w-16 h-8 rounded-lg overflow-hidden" onPress={handleActive}>
      <Animated.View className="flex justify-center items-center w-1/2" style={animatedStyle}>
        {
          active ?
          <Check size={16} color="white" />
          :
          <X size={16} color="white"/>
        }
      </Animated.View>
    </Pressable>
  )
}