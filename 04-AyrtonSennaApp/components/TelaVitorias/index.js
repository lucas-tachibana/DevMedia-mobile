import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

import Corrida from '../../assets/corrida1.jpg';
import Vitoria1 from '../../assets/vitoria1.jpg';
import Vitoria2 from '../../assets/vitoria2.jpg';
import Vitoria3 from '../../assets/vitoria3.jpg';

export default function TelaVitorias() {
    return (
        <ScrollView>
            <ImageBackground blurRadius={5} source={ Corrida } style={ styles.imageBackground }>
            
                <View style={ styles.resultsCard }>
                    <Text style={ styles.resultsTitle }>Senna em Números</Text>
                    <Text style={ styles.resultsParagraph }>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>
                    
                    <View style={ styles.resultsDataItem }>
                        <FontAwesome5 name="trophy" color="#ceb105" size={25}/>
                        <Text style={ styles.resultsDataSpan }>161</Text>
                        <Text style={ styles.resultsDataDescription }>GPS DISPUTADOS</Text>
                    </View>

                    <View style={ styles.resultsDataItem }>
                        <FontAwesome5 name="trophy" color="#ceb105" size={25}/>
                        <Text style={ styles.resultsDataSpan }>65</Text>
                        <Text style={ styles.resultsDataDescription }>POLE POSITIONS</Text>
                    </View>

                    <View style={ styles.resultsDataItem }>
                        <FontAwesome5 name="trophy" color="#ceb105" size={25}/>
                        <Text style={ styles.resultsDataSpan }>41</Text>
                        <Text style={ styles.resultsDataDescription }>VITÓRIAS</Text>
                    </View>

                    <View style={ styles.resultsDataItem }>
                        <FontAwesome5 name="trophy" color="#ceb105" size={25}/>
                        <Text style={ styles.resultsDataSpan }>3X</Text>
                        <Text style={ styles.resultsDataDescription }>CAMPEÃO MUNDIAL</Text>
                    </View>
                </View>

                <View style={ styles.worldChampionshipCard }>
                    <Text style={ styles.worldChampionshipTitle}>Campeonato Mundial - 1988</Text>
                    <Image source={ Vitoria1 } style={ styles.worldChampionshipImage } />
                </View>

                <View style={ styles.worldChampionshipCard }>
                    <Text style={ styles.worldChampionshipTitle}>Campeonato Mundial - 1990</Text>
                    <Image source={ Vitoria2 } style={ styles.worldChampionshipImage } />
                </View>

                <View style={ styles.worldChampionshipCard }>
                    <Text style={ styles.worldChampionshipTitle}>Campeonato Mundial - 1991</Text>
                    <Image source={ Vitoria3 } style={ styles.worldChampionshipImage } />
                </View>


            </ImageBackground>
        </ScrollView>
    )
}