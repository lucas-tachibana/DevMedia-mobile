import React from "react";
import { Image, Text, View } from "react-native";

import styles from '../../assets/styles/styles';

import Sales from '../../assets/jogo/sales.png'
import Money from '../../assets/jogo/money.png'
import Ranking from '../../assets/jogo/ranking.png'
import Disc from '../../assets/jogo/disc.png'

export default function Jogo() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Super Mario bros</Text>
            <Text style={ styles.description }>
                Apesar de não estar disponível no lançamento do console, Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje.
                {"\n"}
                {"\n"}
                A franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:
                </Text>
            {/* CardsContainer */}
            <View style={ styles.cardsContainer }> 
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 1st line */}
                    <View  style={ [styles.card, styles.nintendoBackgroundColorCard] }>
                        <Image source={ Sales } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>40 milhões de cópias{"\n"}Até 1994</Text>
                    </View>
                    <View  style={ [styles.card, styles.nintendoBackgroundColorCard] }>
                        <Image source={ Money } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>US$ 72 milhões{"\n"}Primeiros 4 meses</Text>
                    </View>
                </View>
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 2nd line */}
                    <View  style={ [styles.card, styles.nintendoBackgroundColorCard] }>
                        <Image source={ Ranking } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>95% de Aprovação{"\n"}Revista CVG</Text>
                    </View>
                    <View  style={ [styles.card, styles.nintendoBackgroundColorCard] }>
                        <Image source={ Disc } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>Remake em 1993{"\n"}Para o SNES</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}