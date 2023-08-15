import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Participant } from "../components/Participant";

export function Home() {
  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
        return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
      }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
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
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
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
