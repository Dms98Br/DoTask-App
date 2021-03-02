import React, { useState } from 'react';
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
import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment';
import 'moment/locale/pt-br';

const addTask = (props) => {
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDatePicker(false)
  };

  const getDatePicker = () => {
    let datePicker = <DateTimePicker
      value={date}
      is24Hour={true}
      onChange={onChange}
      mode='date' />

    const dateString = moment(date).format('dddd, D [de] MMMM [de] YYYY')

    if (Platform.OS === 'android') {
      datePicker = (
        <View>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.date}>
              {dateString}
            </Text>
          </TouchableOpacity>
          {showDatePicker && datePicker}
        </View>
      )
    }

    return datePicker
  }
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
          onChangeText={desc => setDesc(desc)}
          value={desc} />
        {getDatePicker()}
        <View style={styles.buttons}>
          <TouchableOpacity onPress={props.onCancel}>
            <Text style={styles.button}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={props.Save}>
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