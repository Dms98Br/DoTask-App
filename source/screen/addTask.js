import React from 'react';
import {
  Platform,
  Modal,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback as TWF,
} from 'react-native';

import moment, { relativeTimeThreshold } from 'moment';
import { render } from 'react-dom';

const state = { desc: '', date: new Date(), showDatePicker: false }
const addTask = (props) => {

  return (
    <Modal transparent={true}
      visible={props.isVisible}
      onRequestClose={props.onCancel}
      animationType='slide'>
      <TWF onPress={props.onCancel}>
        <View style={styles.background} />
      </TWF>
      <View>
        <Text style={styles.header}>Nova Tarefa</Text>
        <TextInput style={styles.input}
          placeholder="Informe a descrição..."
          onChangeText={desc => this.setState({ desc })}
          value={state.desc} />
        
        <View style={styles.buttons}>
          <TouchableOpacity onPress={props.onCancel}>
            <Text style={styles.button}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ props.Save }>
            <Text style={styles.button}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TWF onPress={props.onCancel}>
        <View style={styles.background} />
      </TWF>
    </Modal>
  )
}
export default addTask;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  container: {
    backgroundColor: '#FFF'
  },
  header: {
    textAlign: 'center',
    padding: 15,
    fontSize: 20
  },
  input: {
    height: 40,
    margin: 15,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 6,
    paddingLeft: 10
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    margin: 20,
    marginRight: 30,
  },
  date: {
    fontSize: 20,
    marginLeft: 15
  }
})