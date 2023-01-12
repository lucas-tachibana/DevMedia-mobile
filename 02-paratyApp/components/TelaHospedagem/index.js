import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

import Hospedagem01 from '../../assets/hospedagens/hospedagem01.png';
import Hospedagem02 from '../../assets/hospedagens/hospedagem02.png';
import Hospedagem03 from '../../assets/hospedagens/hospedagem03.png';

export default function TelaHospedagem(){
    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>
                Pousadas e Hotéis em Paraty
            </Text>
            <Text style={ styles.description }>
                Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.
            </Text>

            <View style={ styles.card }>
                <Image source={ Hospedagem01 } style={ styles.cardImage }/>
                <Text style={ styles.cardTitle }>
                    Pousada Missanga
                </Text>
                <Text style={ styles.cardDescription }>
                    Valor médio: R$ 350,00
                </Text>
                <Text style={ styles.cardLocation }>
                    Localização: Próx. à Av. Roberto Silveira
                </Text>
            </View>

            <View style={ styles.card }>
                <Image source={ Hospedagem02 } style={ styles.cardImage }/>
                <Text style={ styles.cardTitle }>
                    Pousada Morro do Forte
                </Text>
                <Text style={ styles.cardDescription }>
                    Valor médio: R$ 450,00
                </Text>
                <Text style={ styles.cardLocation }>
                    Localização: Próximo à Praia - Pontal
                </Text>
            </View>

            <View style={ styles.card }>
                <Image source={ Hospedagem03 } style={ styles.cardImage }/>
                <Text style={ styles.cardTitle }>
                    Pousada Porto Imperial
                </Text>
                <Text style={ styles.cardDescription }>
                    Valor médio: R$ 550,00
                </Text>
                <Text style={ styles.cardLocation }>
                    Localização: Centro Histórico
                </Text>
            </View>
        </View>
    )
}