import react from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Filmes({ data }) {
  return (
    <View>
      <Text>{data.nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
