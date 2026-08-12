import react, { useState } from 'react'
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Detalhes from '../Detalhes'

export default function Filmes({ data }) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image source={{ uri: data.foto }} style={styles.capa} />
      </View>

      <View style={styles.areaBotao}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setIsVisible(true)}
        >
          <Text style={styles.botaoTexto}>Ler mais</Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <Detalhes filme={data} voltar={() => setIsVisible(false)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  card: {
    backgroundColor: '#FFf',
    margin: 15,
    elevation: 3,
    shadowColor: '#000'
  },
  capa: {
    height: 250,
    zIndex: 2
  },
  titulo: {
    fontSize: 18,
    padding: 15,
    fontWeight: 'bold'
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -50,
    zIndex: 9
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    marginRight: 15
  },
  botaoTexto: {
    color: '#FFF',
    textAlign: 'center'
  }
})
