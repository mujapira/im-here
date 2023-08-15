import { Text, TextInput, View } from "react-native";
import { styles, placeholderColor } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <TextInput 
        style={styles.input}
        placeholder="Digite seu nome"
        placeholderTextColor={placeholderColor}
        keyboardType="default"
      />
    </View>
  );
}
