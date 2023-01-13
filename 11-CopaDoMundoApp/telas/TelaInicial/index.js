import React from "react";
import { View, Text, ImageBackground } from "react-native";

import ItemInicio from './itemInicio'; 
import FinaisBg from '../../assets/bg_finais.png';
import ArtilheirosBg from '../../assets/bg_artilheiros.png';
import TitulosBg from '../../assets/bg_titulos.png';
import Background from '../../assets/background.png';

import estilosGlobais from '../../assets/estilos';
import estilo from './estilos'; 

export default function TelaInicial(props){
    const abrirFinais = () => {
        props.navigation.navigate('TelaFinais')
    }
    const abrirArtilheiros = () => {
        props.navigation.navigate('TelaArtilheiros')
    }
    const abrirTitulos = () => {
        props.navigation.navigate('TelaTitulos')
    }

    return (
        <View>
            <ImageBackground  style={estilosGlobais.tela} resizeMode="cover" blurRadius={10} source={ Background }>
                <Text style={estilosGlobais.titulo}>Brasil nas copas do mundo</Text>
                <ItemInicio title="Finais" image={ FinaisBg } acao={abrirFinais}/>
                <ItemInicio title="Artillheiros" image={ ArtilheirosBg } acao={abrirArtilheiros}/>
                <ItemInicio title="Títulos" image={ TitulosBg } acao={abrirTitulos}/>
            </ImageBackground> 
        </View>
    )
}