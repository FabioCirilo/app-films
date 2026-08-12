import react from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>{props.filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.descricao}>{props.filme.sinopse}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 10,
    marginLeft: 10
  },
  modalContainer: {
    height: '70%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borTderTopRightRadius: 5
  },
  btnVoltar: {
    backgroundColor: '#E52246',
    padding: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  titulo: {
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 8
  },
  descricao: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10
  }
})
