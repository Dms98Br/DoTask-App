import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity as TO,
  SafeAreaView,
  StatusBar,
  FlatList
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cards from '../components/cards';
import AddTask from './addTask';

export const TaskList = (props) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [cards, setCards] = useState([
    {
      id: 0,
      desc: 'Teste'
    },
    {
      id: 1,
      desc: 'Teste 1'
    },
    {
      id: 2,
      desc: 'Teste 2'
    },
    {
      id: 3,
      desc: 'Teste 3'
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <AddTask isVisible={showAddTask} onCancel={() => setShowAddTask(false)} />
      <View style={styles.header}>
        <Text style={styles.textHeader}>{props.title}</Text>
      </View>
      <View>
        <FlatList data={cards}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({ item }) =>
            <TO>
              <View style={styles.flatlist}>
              <Cards desc={item.desc} />
                {/* <Text style={{ fontSize: 22, marginLeft: '2%' }}
                  onPress={() => openList(true, item.id.toString())}>
                  {item.nameList}
                </Text> */}
              </View>
            </TO>
          }
        />        
      </View>
      <TO style={styles.addButton} onPress={() => setShowAddTask(true)}>
        <Icon name='plus' size={40} color={'#FFFFFF'} />
      </TO>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
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
  },
  flatlist: {
    backgroundColor: '#F1FBDB',
    marginLeft: '2%',
    width: '95%',
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#80BB27',
    borderWidth: 1
  },
})