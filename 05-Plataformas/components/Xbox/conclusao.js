import React from "react";
import { Text, View } from "react-native";

import styles from '../../assets/styles/styles';

export default function Conclusao() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Conclusão</Text>
            <Text style={ styles.description }>
                A Microsoft conseguiu criar com o Xbox uma grande base de fãs em todo mundo que jogam suas franquias diariamente. O que começou como uma tentativa de defender o territórios dos PCs nas salas se tornou um dos produtos mais vendidos da companhia e parte de um dos setores mais lucrativos da industria do entretenimento.
            </Text>
        </View>
    )
}