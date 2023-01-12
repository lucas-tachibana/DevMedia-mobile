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
            <Text style={ styles.title }>O fenômeno Halo</Text>
            <Text>
                Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox.
                {"\n"}
                {"\n"}
                Halo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.
            </Text>
            {/* CardsContainer */}
            <View style={ styles.cardsContainer }> 
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 1st line */}
                    <View  style={ [styles.card, styles.xboxBackgroundColorCard] }>
                        <Image source={ Sales } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>4.7 milhões de cópias{"\n"}Até Julho de 2006</Text>
                    </View>
                    <View  style={ [styles.card, styles.xboxBackgroundColorCard] }>
                        <Image source={ Money } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>US$ 170 milhões{"\n"}Apenas nos EUA</Text>
                    </View>
                </View>
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 2nd line */}
                    <View  style={ [styles.card, styles.xboxBackgroundColorCard] }>
                        <Image source={ Ranking } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>97% de Aprovação{"\n"}Metacritic</Text>
                    </View>
                    <View  style={ [styles.card, styles.xboxBackgroundColorCard] }>
                        <Image source={ Disc } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>Remake em 2014{"\n"}Para o Xbox One</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}