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
            <Text style={ styles.title }>Final Fantasy VII</Text>
            <Text style={ styles.description }>
                Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito bem recebido pelo público e pela crítica especializada.
                {"\n"}
                {"\n"}
                Final Fantasy VII foi um lançamento muito importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir:
                </Text>
            {/* CardsContainer */}
            <View style={ styles.cardsContainer }> 
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 1st line */}
                    <View  style={ [styles.card, styles.playstationBackgroundColorCard] }>
                        <Image source={ Sales } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>2 milhões de cópias{"\n"}Em 2 dias no Japão</Text>
                    </View>
                    <View  style={ [styles.card, styles.playstationBackgroundColorCard] }>
                        <Image source={ Money } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>US$ 115 milhões{"\n"}Em 2 dias no Japão</Text>
                    </View>
                </View>
                {/* ContainerRow */}
                <View style={ styles.containerRow }>
                    {/* Cards 2nd line */}
                    <View  style={ [styles.card, styles.playstationBackgroundColorCard] }>
                        <Image source={ Ranking } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>92% de Aprovação{"\n"}Metacritic</Text>
                    </View>
                    <View  style={ [styles.card, styles.playstationBackgroundColorCard] }>
                        <Image source={ Disc } style={ styles.cardIcon }/>
                        <Text style={ styles.cardText }>Remake em 2020{"\n"}Para o PS4</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}