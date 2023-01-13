import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import styles from './style';

export default function TelaInicial() {
    const [ valorMinimo, setValorMinimo ] = useState(0);
    const [ valorMaximo, setValorMaximo ] = useState(10);
    const [ numeroSorteado, setNumeroSorteado ] = useState(0);
    const [ flagInputFocus, setFlagInputFocus ] = useState("");

    const validarCampos = (minimo, maximo) => {
        if(isNaN(minimo) || isNaN(maximo)) {
            alert("Digite os valores");
            return false;
        }
        if(minimo > maximo) {
            alert("O valor mínimo deve ser menor que o valor máximo");
            return false;
        }

        return true;
    }

    const gerarNumero = () => {
        const min = parseInt(valorMinimo);
        const max = parseInt(valorMaximo);

        if( !validarCampos(min, max) ) {
            return;
        }

        const novoNumero = Math.floor(Math.random() * (max + 1 - min) + min);
        setNumeroSorteado(novoNumero);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha os valores mínimo e máximo para o sorteio</Text>
            
            <View style={styles.inputLine}>
                <View>
                    <Text style={styles.inputDescription}>Valor Mínimo:</Text>
                </View>
                <View>
                    <TextInput
                    style={flagInputFocus === "txt_min" ? styles.inputFocus : styles.inputNormal}
                    textAlign="center"
                    keyboardType="numeric"
                    maxLength={4}
                    autoFocus = { true }
                    onFocus={() => setFlagInputFocus("txt_min")}
                    onBlur={() => setFlagInputFocus("")}
                    value={valorMinimo.toString()}
                    onChangeText={setValorMinimo}
                />
                </View>
            </View>

            <View style={styles.inputLine}>
                <View>
                    <Text style={styles.inputDescription}>Valor Máximo:</Text>
                </View>
                <View>
                    <TextInput
                    style={flagInputFocus === "txt_max" ? styles.inputFocus : styles.inputNormal}
                    textAlign="center"
                    keyboardType="numeric"
                    maxLength={4}
                    onFocus={() => setFlagInputFocus("txt_max")}
                    onBlur={() => setFlagInputFocus("")}
                    value={valorMaximo.toString()}
                    onChangeText={setValorMaximo}
                />
                </View>
            </View>

            <View style={styles.buttonBox}>
                <Button title="Sortear" onPress={gerarNumero} color="#1f4f66"/>
            </View>

            <View style={styles.numberBox}>
                <Text style={styles.number}>{numeroSorteado}</Text>
            </View>

        </View>
    )
}