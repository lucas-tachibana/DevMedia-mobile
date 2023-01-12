import React from "react";
import { Image, Text, View } from "react-native";

import styles from '../../assets/styles/styles';

import CPU from '../../assets/especificacoes/cpu.png';
import GPU from '../../assets/especificacoes/gpu.png';
import HDD from '../../assets/especificacoes/hdd.png';
import RAM from '../../assets/especificacoes/ram.png';

export default function Especificacoes() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Especificações Técnicas</Text>
            <Text style={ styles.description }>Confira a seguir as especificações técnicas do NES, lançado em 1983</Text>
            {/* CardsContainer */}
            <View style={ styles.cardsContainer }> 
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 1st line */}
                    <View  style={ [styles.card, styles.nintendoBackgroundColorCard] }>
                        <Image source={ CPU } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>Ricoh 2A03{"\n"}Processador 8-bit</Text>
                    </View>
                    <View  style={ [styles.card, styles.nintendoBackgroundColorCard] }>
                        <Image source={ GPU } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>52 Cores{"\n"}256 x 240</Text>
                    </View>
                </View>
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 2nd line */}
                    <View  style={ [styles.card, styles.nintendoBackgroundColorCard] }>
                        <Image source={ RAM } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>2KB RAM{"\n"}Memória</Text>
                    </View>
                    <View  style={ [styles.card, styles.nintendoBackgroundColorCard] }>
                        <Image source={ HDD } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>Cartucho{"\n"}Proprietário</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}