
import {Dimensions, StyleSheet} from "react-native"
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: "center"

    },
    camera: {
      flex: 1,
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').width,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 64,
    },
    button: {
      
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
    },
    img:{
      height: Dimensions.get('window').width * 0.7,
      width: Dimensions.get('window').width * 0.7,
    }
  });
  