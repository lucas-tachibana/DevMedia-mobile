import React from "react";
import { Text, View } from "react-native";

import styles from './style';

export default function Titulo() {
    return (
        <View style={styles.containerTopo}>
            <Text style={styles.title}>Sorteio DevMedia</Text>
            <Text style={styles.subtitle}>Sorteie um número para descobrir o vencedor!!</Text>
        </View>
    )
}