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
            <Text>Confira a seguir as especificações técnicas do Xbox de 2001</Text>
            {/* CardsContainer */}
            <View style={ styles.cardsContainer }> 
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 1st line */}
                    <View  style={ [styles.card, styles.xboxBackgroundColorCard] }>
                        <Image source={ CPU } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>Intel Pentium 3{"\n"}733 MHz</Text>
                    </View>
                    <View  style={ [styles.card, styles.xboxBackgroundColorCard] }>
                        <Image source={ GPU } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>nVidia NV2A{"\n"}233 MHz</Text>
                    </View>
                </View>
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 2nd line */}
                    <View  style={ [styles.card, styles.xboxBackgroundColorCard] }>
                        <Image source={ RAM } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>64 MB DDR SDRAM{"\n"}200 MHz</Text>
                    </View>
                    <View  style={ [styles.card, styles.xboxBackgroundColorCard] }>
                        <Image source={ HDD } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>HD 8GB{"\n"}5400 RPM</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}