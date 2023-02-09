import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import estilo from "./estilos";

const ItemTitulo = (props) => (
    <View style={estilo.itemTitulo}>
        <ImageBackground source={props.background} style={estilo.imagemFundoTitulo}>
            <View style={estilo.fundoEscuro}>
                <View style={estilo.areaTopo}>
                    <Text style={estilo.pais}>{props.pais}</Text>
                    <Image source={props.estrelas} style={estilo.estrelas}/>
                </View>
                    <Text style={estilo.ano}>{props.ano}</Text>
            </View>
        </ImageBackground>
    </View>
)

export default ItemTitulo;