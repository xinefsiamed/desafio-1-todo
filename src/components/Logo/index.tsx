import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Logo(){
  return (
    <View style={styles.container}>

        <Image 
          source={require('../../../assets/rocket.png')}
        />

        <View style={styles.textContainer}>
          <Text style={styles.textTo}>
            to
          </Text>
          <Text style={styles.textDo}>
            do
          </Text>
        </View>

    </View>
  )
}