import React from 'react';
import {Text,View ,Pressable} from 'react-native';
import styles from '../Buttons/styles';

const StyledButton = (props) =>{

    return(

        
        <View>
        <Pressable
        style={styles.button}
        onPress={()=>{
            console.warn('hey wrong turn you wu=ill be die');
        }}
        >
          <Text >Order Now</Text>  
          </Pressable>
        </View>
    )

};
export default StyledButton;