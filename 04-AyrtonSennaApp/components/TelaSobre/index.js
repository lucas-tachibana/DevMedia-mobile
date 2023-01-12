import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import styles from './styles';

import FotoCapa from '../../assets/foto-capa.jpg';
import Preparacao from '../../assets/preparacao.png';
import Chuva from '../../assets/rei-da-chuva.png';
import Monaco from '../../assets/rei-de-monaco.png';
import Silvastone from '../../assets/silvastone.png';

export default function TelaSobre() {
    return (
        <View style={ styles.mainContainer }>
            <ScrollView style={ styles.aboutBox }>
                <Text style={ styles.aboutTitle }>Ayrton Senna</Text>
                <Image source={ FotoCapa } style={ styles.aboutImage }/>
                <Text style={ styles.aboutParagraph }>No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.</Text>
            </ScrollView>

            <ScrollView>
                <View style={ styles.newsBox }>
                    <Image source={ Chuva } style={ styles.imageNews}/>
                    <View style={ styles.newsCard}>
                        <Text style={ styles.newsTitle }>Rei da chuva</Text>
                        <Text style={ styles.newsDescription }>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.</Text>
                    </View>
                </View>
                
                <View style={ styles.newsBox }>
                    <Image source={ Monaco } style={ styles.imageNews}/>
                    <View style={ styles.newsCard}>
                        <Text style={ styles.newsTitle }>Rei de Mônaco</Text>
                        <Text style={ styles.newsDescription }>Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.</Text>
                    </View>
                </View>
                
                <View style={ styles.newsBox }>
                    <Image source={ Silvastone } style={ styles.imageNews}/>
                    <View style={ styles.newsCard}>
                        <Text style={ styles.newsTitle }>Silvastone</Text>
                        <Text style={ styles.newsDescription }>Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
                    </View>
                </View>
                
                <View style={ styles.newsBox }>
                    <Image source={ Preparacao } style={ styles.imageNews}/>
                    <View style={ styles.newsCard}>
                        <Text style={ styles.newsTitle }>Preparação</Text>
                        <Text style={ styles.newsDescription }>Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}