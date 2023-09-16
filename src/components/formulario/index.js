import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput,Button,SafeAreaView} from 'react-native';

const SeuNome= () =>{
    const [nome,setNome]=useState('');
    const [mensagem,setMensagem]=useState('');

    const Ola=() =>{
        setMensagem("Olá "+nome+"!");
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto}>
                Qual o seu nome?
            </Text>
            <TextInput
            style={styles.input}
            onChangeText={setNome}
            value={nome}
            placeholder="Digite o seu nome"
        />
        <Button title="Diga olá"  onPress={() => Ola()}/>
        <Text style={styles.message}>
             {mensagem}
        </Text>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
    texto: {
        fontSize: 15,
        justifyContent: 'center',
    },
    input: {
        width: 250,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: "center",
      },
    message: {
        fontSize: 20,
        justifyContent: 'center',
    },
});
export default SeuNome;