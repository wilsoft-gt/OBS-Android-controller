import { Pressable, Text } from "react-native"

const types = {
  "neutral": "flex flex-row w-full gap-4 justify-center items-center rounded-full pt-4 pb-4 m-1 bg-neutral-400 active:bg-neutral-600",
  "primary": "flex flex-row w-full gap-4 justify-center items-center rounded-full pt-4 pb-4 m-1 bg-sky-400 active:bg-blue-600",
  "success": "flex flex-row w-full gap-4 justify-center items-center rounded-full pt-4 pb-4 m-1 bg-green-400 active:bg-green-600",
  "warning": "flex flex-row w-full gap-4 justify-center items-center rounded-full pt-4 pb-4 m-1 bg-yellow-400 active:bg-yellow-600",
  "danger":  "flex flex-row w-full gap-4 justify-center items-center rounded-full pt-4 pb-4 m-1 bg-red-400 active:bg-red-600",

}

export const CustButton = ({label, type="neutral", onPress=() => {}, icon=null}) => {
  return (
    <Pressable className={types[type]} onPress={() => onPress()}>
      {icon ? icon : null}
      <Text className="text-white">{label}</Text>
    </Pressable>
  )
}