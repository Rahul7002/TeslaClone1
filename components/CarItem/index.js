import react from "react";
import { View, Text,ImageBackground } from "react-native";
import StyledButton from "../Buttons/index";
import styles from './styles'

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/Model3.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting in 1cr/100$</Text>
      </View>
      <StyledButton/>
    </View>
  );
};

export default CarItem;
