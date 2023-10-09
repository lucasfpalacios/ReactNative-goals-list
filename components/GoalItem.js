import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
   
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: '#315e26'}}
          onPress={props.onDeleteItem.bind(this, props.id)}
          style={({pressed}) => pressed && styles.pressedItem}
        >
          <Text style={styles.goalText}>
            {props.text}
          </Text>
        </Pressable>
      </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'green',
    color: 'white'
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: 'white'
  }
});
