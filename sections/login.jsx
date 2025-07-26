import { useState } from "react"
import { Text, Pressable, View, TextInput } from "react-native"
import { loginStore } from "../store/loginStore"
import { obsStore } from "../store/obsStore"
import { Container } from "../components/container"
import { CustButton } from "../components/CustButton"
import { OBS, Plug } from "../icons"



export default () => {
  const setLoggin = loginStore(store => store.setLoggin)
  const obs = obsStore(store => store.obs)
  const [url, setUrl] = useState("")
  const handleLogin = async () => {
    try {
      const { negotiatedRpcVersion } = await obs.connect(url)
      if (negotiatedRpcVersion) {
        setLoggin(true)
      }
    } catch (error) {
      alert("Cound not connect to OBS")
    }
    
  }

  return(
    <Container className="flex flex-col justify-center items-center h-full bg-slate-200">
        <View className="flex flex-col m-3 p-11 gap-4 bg-white rounded-xl w-10/12 border-gray-600 border-hairline shadow shadow-gray-700">
          <View className="w-full flex flex-col items-center mb-4">
            <OBS size={75} className="m-auto" />
            <Text className="text-xl font-extrabold">OBS Controller</Text>
          </View>
          <View className="my-6">
            <Text className="text-center color-gray-500">Host address</Text>
            <TextInput value={url} className="w-full border-solid border-gray-600 border-hairline rounded-full p-4" placeholder="ws://192.168.0.10:4444" onChangeText={setUrl}/>
          </View>
          <CustButton label="Connect" type="primary" onPress={handleLogin} icon={<Plug color="white" />} />
        </View>
    </Container>
  )
}