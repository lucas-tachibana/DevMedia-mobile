import React from "react";
import { ImageBackground, View, Text } from "react-native";

import estilo from "./estilos";

const ItemInicio = (props) => (
    <View style={estilo.cardContainer} onTouchEnd={props.acao}>
        <ImageBackground source={props.image} style={estilo.imageBg}>
            <View style={estilo.fundoEscuro}>
                <Text style={estilo.textoMenu}>{props.title}</Text>
            </View>
        </ImageBackground>
    </View>
)

export default ItemInicio;