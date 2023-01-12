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
            <Text style={ styles.description }>Confira a seguir as especificações técnicas do PlayStation, lançado em 1994</Text>
            {/* CardsContainer */}
            <View style={ styles.cardsContainer }> 
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 1st line */}
                    <View  style={ [styles.card, styles.playstationBackgroundColorCard] }>
                        <Image source={ CPU } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>Sony CXD8530BQ{"\n"}33.8688 MHz</Text>
                    </View>
                    <View  style={ [styles.card, styles.playstationBackgroundColorCard] }>
                        <Image source={ GPU } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>Sony CXD8514Q{"\n"}1MB VRAM</Text>
                    </View>
                </View>
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 2nd line */}
                    <View  style={ [styles.card, styles.playstationBackgroundColorCard] }>
                        <Image source={ RAM } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>2 MB EDO DRAM{"\n"}33 MHz</Text>
                    </View>
                    <View  style={ [styles.card, styles.playstationBackgroundColorCard] }>
                        <Image source={ HDD } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>Drive de CD-ROM{"\n"}660 MB / disco</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}