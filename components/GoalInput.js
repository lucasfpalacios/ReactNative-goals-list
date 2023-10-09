import { Button, Modal, Image, StyleSheet, View, TextInput } from 'react-native'
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalhandler() {
    if (enteredGoalText.trim() === '') {
      return;
    }
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goals.png')} 
        />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler} 
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Add Goal'
                onPress={addGoalhandler}
                color='blue'
                disabled={enteredGoalText.trim() === ''} 
              />
            </View>
            <View style={styles.button}>
              <Button title='Cancel' onPress={props.onCancel} color='red' />
            </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#5ac19f'
  },
  image: {
    width: 100,
    height: 100,
    margin: 50,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
});
