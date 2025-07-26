import { Text, View } from "react-native"
import { Container } from "../../components/container"
import { CustButton } from "../../components/CustButton"
import {VideoPlus, Broadcast, CircleFilled, Pause, SquareFilled} from "../../icons"
import { recordingStore } from "../../store/recordingStore"
import { streamingStore } from "../../store/streamingStore"

export default SessionControl = () => {
  const startRecording = recordingStore(store => store.startRecording)
  const stopRecording = recordingStore(store => store.stopRecording)
  const recordingStats = recordingStore(store => store.recordingStats)
  const startStreaming = streamingStore(store => store.startStreaming)
  const stopStreaming = streamingStore(store => store.stopStreaming)
  const streamingStats = streamingStore(store => store.streamingStats)
  
  const bytesFormater = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  }

  const handleStartRecording = async () => {
    await startRecording()
  }

  const handleStopRecording = async () => {
    await stopRecording()
  }
  
  const handleStartStreaming = async () => {
    await startStreaming()
  } 

  const handleStopStreaming = async () => {
    await stopStreaming()
  }

  return (
    <Container className="m-5 gap-6">
      {recordingStats.outputActive || recordingStats.outputPaused ? 
      <View className="flex flex-col gap-2 items-center">
        <CustButton onPress={handleStopRecording} label="Stop recording"type="danger" icon={<SquareFilled color="white" />}/>
        <View className="flex flex-row items-center gap-2">
          {recordingStats.outputPaused ? 
          <>
            <Pause size={16} color="red" />
            <Text className="text-black text-lg">Paused...</Text>
          </> 
          :
          <>
            <CircleFilled size={12} color="red" />
            <Text className="text-black text-lg">Recording...</Text>
          </>
          }
        </View>
        <Text className="text-black text-lg">Recording time: {recordingStats.outputTimecode && recordingStats.outputTimecode.split(".")[0] || null}</Text>
        <Text>File size: {bytesFormater(recordingStats.outputBytes)}</Text>
      </View>
        : 
        <CustButton onPress={handleStartRecording} label="Start recording"type="primary" icon={<VideoPlus color="white" />}/>
      }

      {streamingStats.outputActive || streamingStats.outputPaused ?
      <View className="flex flex-col gap-2 items-center">
        <CustButton onPress={handleStopStreaming} label="Stop stream" type="danger" icon={<SquareFilled color="white" />}/>
        <View className="flex flex-row items-center gap-2">
            <CircleFilled size={12} color="red" />
            <Text className="text-black text-lg">Streaming...</Text>
        </View>
        <Text className="text-black text-lg">Streaming time: {streamingStats.outputTimecode && streamingStats.outputTimecode.split(".")[0] || null}</Text>
        <Text>Bytes sent: {streamingStats.outputBytes && bytesFormater(streamingStats.outputBytes) || null}</Text>
        <Text>Frames sent: {streamingStats.outputTotalFrames && streamingStats.outputTotalFrames || null}</Text>
        <Text>Frames skipped: {streamingStats.outputSkippedFrames || 0}</Text>
      </View>
        :
        <CustButton onPress={handleStartStreaming} label="Start streaming" type="warning" icon={<Broadcast color="white" />}/>
      }
    </Container>
  )
}