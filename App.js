import { StyleSheet, Text, View } from 'react-native';
import "./src/components/formulario/index";
import SeuNome from "./src/components/formulario/index";

export default function App() {
  return (
    <View style={styles.container}>
      <SeuNome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
