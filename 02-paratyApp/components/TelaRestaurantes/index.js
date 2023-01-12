import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from '../TelaRestaurantes/styles';

import Restaurante01 from '../../assets/restaurantes/restaurante01.png';
import Restaurante02 from '../../assets/restaurantes/restaurante02.png';
import Restaurante03 from '../../assets/restaurantes/restaurante03.png';

export default function TelaRestaurantes(){
    return(
        <ScrollView>
            <View style={ styles.container}>
            <Text style={ styles.title }>
                Bares e Restaurantes
            </Text>

            <Text style={ styles.description }>
                O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.
            </Text>

            <View style={ styles.restaurantCard}>
                <Image source={Restaurante01} style={styles.cardImage} />
                <Text style={ styles.cardTitle }>
                    Armazén Mar
                </Text>
                <Text style={ styles.cardDescription }>
                    Localização: Rod Rio-Santos
                </Text>
            </View>
            
            <View style={ styles.restaurantCard}>
                <Image source={Restaurante02} style={styles.cardImage} />
                <Text style={ styles.cardTitle }>
                    Bendita's Restaurante
                </Text>
                <Text style={ styles.cardDescription }>
                    Localização: Centro Histórico
                </Text>
            </View>

            <View style={ styles.restaurantCard}>
                <Image source={Restaurante03} style={styles.cardImage} />
                <Text style={ styles.cardTitle }>
                    SEREIA DO MAR PIZZA-BAR
                </Text>
                <Text style={ styles.cardDescription }>
                    Localização: Praia do Jabaquara
                </Text>
            </View>
            </View>
        </ScrollView>
    )
}