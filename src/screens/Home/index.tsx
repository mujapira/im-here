import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Participant } from "../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`);
  }

  const participants = [
    "Maurício Mello",
    "Pedro José",
    "Leonardo Csik",
    "Rodrigo Manguinho",
    "Vini Black",
    "Diego Fernandes",
    "Biro Biro",
    "Ana Clara",
    "Isa Silva",
    "Jack Bauer",
    "Mayk Brito",
    "João da Silva",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item} 
            onRemove={() => handleParticipantRemove("Rodrigo")} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
      
    </View>
  );
}
