import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.secondary
    },
    formRow: {
        margin:10

    },
    icon:{
    fontSize: 28,
    colors: colors.primary,
    padding: 5

    },
    input: {

    fontSize: 18,
    padding: 5,
    width: "70%"
    }
})
export default styles