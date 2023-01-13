import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";

import ItemArtilheiro from "./itemArtilheiro";

import estilosGlobais from '../../assets/estilos';
import background from '../../assets/background.png'


//Artilheiros
import Ademir from '../../assets/artilheiros/ademir.png';
import Jairzinho from '../../assets/artilheiros/jairzinho.png';
import Pele from '../../assets/artilheiros/pele.png';
import Ronaldo from '../../assets/artilheiros/ronaldo.png';
import Vava from '../../assets/artilheiros/vava.png';


export default function TelaArtilheiros(){
    return (
        <ScrollView style={estilosGlobais.tela}>
            <ImageBackground source={background} style={estilosGlobais.imagemFundo}>
                <Text style={estilosGlobais.titulo}>Artilheiros</Text>

                <ItemArtilheiro imagem={Ronaldo} nomeJogador="Ronaldo" gols="15" anosCopas="1994 - 1998 - 2002 - 2006"/>
                <ItemArtilheiro imagem={Pele} nomeJogador="Pelé" gols="12" anosCopas="1958 - 1962 - 1966 - 1970"/>
                <ItemArtilheiro imagem={Ademir} nomeJogador="Ademir" gols="9" anosCopas="1950"/>
                <ItemArtilheiro imagem={Vava} nomeJogador="Vavá" gols="9" anosCopas="1958 - 1952"/>
                <ItemArtilheiro imagem={Jairzinho} nomeJogador="Jairzinho" gols="9" anosCopas="1966 - 1970 - 1974"/>
            </ImageBackground>
        </ScrollView>
    )
}