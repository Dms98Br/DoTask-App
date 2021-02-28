import React, { useState } from 'react';
import {
  View,
  Button,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity as TO
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddTask from './addTask';

export const Task = (props) => {
  const [showAddTask, setShowAddTask] = useState(false)
  
  return (
    <View style={styles.container}>
      <AddTask isVisible={showAddTask} onCancel={() => setShowAddTask(false)} />
      <View style={styles.header}>
        <Text style={styles.textHeader}>{props.title} {Platform.Version}</Text>
      </View>
      <TO style={styles.addButton} onPress={()=>setShowAddTask(true)}>
        <Icon name='plus' size={40} color={'#FFFFFF'} />
      </TO>
    </View>
  );
};
export default Task;
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header: {
    marginTop: Platform.Version >= 29 ? 48 : 20,
    width: '100%',
    backgroundColor: '#0E6BA8'
  },
  textHeader: {
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  addButton: {
    position: 'absolute',
    right: '4%',
    bottom: '3%',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E6BA8'
  }
})