import { useEffect } from "react"
import Login from "../sections/login"
import { useRouter } from "expo-router"
import { loginStore } from "../store/loginStore"
import "../global.css"

export default () => {
  const isLoggedIn = loginStore(state => state.isLoggedIn)
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/(tabs)/scenes")
    }
  }, [isLoggedIn])

  return <Login />
}