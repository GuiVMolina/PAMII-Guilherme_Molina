import React from "react";
import { NativeBaseProvider, Button, Text, Input, Stack, Container } from "native-base";
import { ImageBackground, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("./Fundo.png")}
    >
      <NativeBaseProvider>
        <View style={styles.container}>
          <Container style={styles.content}>
            <Text color="white" style={{ marginTop: 10, fontSize: 50 }}>
              LOGIN
            </Text>

            <Text color="white" style={{ marginTop: 30 }}>
              Email
            </Text>
            <Input color="white" variant="underlined" mx={3} placeholder="seuemail@gmail.com" w="125%" marginTop={1} padding={2} bg="rgba(0,0,0,0.5)" rounded={10}/>

            <Text color="white" style={{ marginTop: 30 }}>
              Senha
            </Text>
            <Input color="white" variant="underlined" mx={3} placeholder="Senha" w="125%" marginTop={1} padding={2} bg="rgba(0,0,0,0.5)" rounded={10}/>

            <Button size="lg" marginTop={3} colorScheme="danger" variant="ghost" width="25%" rounded={100}>
              ▶
            </Button>

            <Stack mb={2} mt={0.5}>
              <Button size="m" fontSize={18} colorScheme="black" variant="link" marginTop={1} padding={1} bg="rgba(255,255,255,0.25)">
                Não possui conta ainda?
              </Button>
            </Stack>
          </Container>
        </View>
      </NativeBaseProvider>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
});