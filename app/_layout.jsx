import { Stack, useRouter } from "expo-router"
import { useEffect } from "react"
import { loginStore } from "../store/loginStore"
import { useObsListeners } from "../hooks/useObsHooks"
import { recordingStore } from "../store/recordingStore"
import { streamingStore } from "../store/streamingStore"

export default RootLayout = () => {
  const isLoggedIn = loginStore(state => state.isLoggedIn)
  const router = useRouter()

  useObsListeners()

  
  useEffect(() => {
    if (isLoggedIn) {
      recordingStore.getState().getRecordingStatus(true)
      streamingStore.getState().getStreamingStatus(true)
      router.replace("/(tabs)/scenes")
    } else {
      router.replace("/")
    }
  }, [isLoggedIn])

  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
        <Stack.Screen name="index" options={{ headerShown: false}} />
    </Stack>
  )
}