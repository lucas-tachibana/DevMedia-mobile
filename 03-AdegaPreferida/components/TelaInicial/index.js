import React from "react";
import { ImageBackground, Text, View } from "react-native";

import styles from './styles';
import imgCapa from '../../assets/capa.jpg';

export default function TelaInicial() {
    return (
        <ImageBackground
            blurRadius={ 10 }
            style={ styles.container }
            source={ imgCapa }
        >
            <Text style={ styles.titulo }>Adega Preferida</Text>
            <Text style={ styles.subtitulo }>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
        </ImageBackground>
    )
}