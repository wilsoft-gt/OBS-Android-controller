import { View, Text } from "react-native"
import { Container } from "../../components/container"
import { CustButton } from "../../components/CustButton"
import { obsStore } from "../../store/obsStore"
import { loginStore } from "../../store/loginStore"
import { previewImageStore } from "../../store/previewStore"
import { Switch } from "../../components/CustomSwitch"
import { PlugOff } from "../../icons"


export default Settings = () => {
  const obs = obsStore(store => store.obs)
  const setLoggin = loginStore(store => store.setLoggin)
  const setShowPreview = previewImageStore(store => store.setShowPreview)


  const handleLogout = async () => {
    console.log("Logging out...")
    await obs.disconnect()
    setLoggin(false)    
  }

  const handleSwitch = async (value) => {
    await setShowPreview(value)
  }

  return(
    <Container className="px-5">
      <View className="flex flex-row justify-between items-center mb-4">
        <View>
          <Text>Show preview</Text>
          <Text className="text-sm text-neutral-500">Display or hide the scene preview</Text>
        </View>
        <Switch onToggle={handleSwitch} />
      </View>
      <CustButton label="Disconnect" type="danger" onPress={handleLogout} icon={<PlugOff color="white"/>} />
    </Container>
  )
}