import React from "react";
import { ImageBackground, Text, View } from "react-native";

import estilo from './estilos';

const ItemArtilheiro = (props) => (
    <View style={estilo.itemArtilheiros}>
        <ImageBackground source={props.imagem} style={estilo.imagemFundoArtilheiros}>
            <View style={estilo.fundoEscuro}>
                <View style={estilo.areaGols}>
                    <Text style={estilo.nome}>{props.nomeJogador}</Text>
                    <Text style={estilo.gols}>{props.gols} gols</Text>
                </View>
                <Text style={estilo.anos}>{props.anosCopas}</Text>
            </View>
        </ImageBackground>
    </View>
);

export default ItemArtilheiro;