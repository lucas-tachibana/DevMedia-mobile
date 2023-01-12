import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

import styles from './styles';

import FotoCapa from '../../assets/foto-capa.jpg';
import Fundo from '../../assets/fundo.jpg';
export default function TelaInicio() {
    return (
        <ImageBackground blurRadius={5} source={ Fundo } style={ styles.container}>
            <Image source={ FotoCapa } style={ styles.profileImage } />

            <View style={ styles.card }>
                <Text style={ styles.cardTitle }>Ayrton Senna</Text>
                <Text style={ styles.cardDescription }>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
            </View>

        </ImageBackground>
    )
}