import React from 'react';
import {Text,View ,Pressable} from 'react-native';

const StyledButton = (props) =>{

    return(

        
        <View>
        <Pressable
        style={style.button}
        onPress={()=>{
            console.warn('hey wrong turn');
        }}
        >
          <Text >Order Now</Text>  
          </Pressable>
        </View>
    )

};
export default StyledButton;