import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {


//   const type = props.type;
//   const content = props.content;                      DE_Structuring
//   const onPress = props.onPress;

const {type,content, onPress}=props;


  const backgroundColor = type == "primary" ? "pink" : "grey";
  const textColor = type == "primary" ? "white" : "white";

  
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          { backgroundColor: backgroundColor },
          { textColor: textColor },
        ]}
      >
        <Text
          style={[styles.text,{color:textColor}]}
          onPress={() => {
            onPress();
          }}
        >
          {content}
        </Text>
      </Pressable>
    </View>
  );
};
export default StyledButton;
