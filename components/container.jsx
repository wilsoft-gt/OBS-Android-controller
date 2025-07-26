import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export const Container = (props) => {
  return(
    <SafeAreaView {...props}> 
      <StatusBar style="auto" />
      {props.children}
    </SafeAreaView>
  )
}