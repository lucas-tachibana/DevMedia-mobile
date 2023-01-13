import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import estilo from './estilos';

const ItemFinal = (props) => (
    <View style={estilo.itemFinais}>
        <ImageBackground source={props.background} style={estilo.containerFinal}>
            <View style={estilo.fundoEscuro}>
                <Text style={estilo.titulo}>{props.titulo}</Text>
                <View style={estilo.areaResultado}>
                    <Image source={props.bandeiraEsquerda} style={estilo.bandeira}/>
                    <Text style={estilo.placar}>{props.placar}</Text>
                    <Image source={props.bandeiraDireita} style={estilo.bandeira}/>
                </View>
            </View>
        </ImageBackground>
    </View>
);

export default ItemFinal;