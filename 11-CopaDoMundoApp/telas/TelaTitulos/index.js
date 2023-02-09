import React from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";

import background from '../../assets/background.png';
import estilosGlobais from '../../assets/estilos';
import ItemTitulo from "./itemTitulo";

import Mexico from '../../assets/cidades/cidademexico.png';
import Pasadena from '../../assets/cidades/pasadena.png';
import Santiago from '../../assets/cidades/santiago.png';
import Solna from '../../assets/cidades/solna.png';
import Yokohama from '../../assets/cidades/yokohama.png';

import Star from '../../assets/1.png';
import Star2 from '../../assets/2.png';
import Star3 from '../../assets/3.png';
import Star4 from '../../assets/4.png';
import Star5 from '../../assets/5.png';

export default function TelaTitulos(){
    return (
        <ImageBackground source={background} style={estilosGlobais.tela}>
            <ScrollView>
                <Text style={estilosGlobais.titulo}>Títulos</Text>

                <ItemTitulo background={Solna} pais="Suécia" estrelas={Star} ano="1958"/>
                <ItemTitulo background={Santiago} pais="Chile" estrelas={Star2} ano="1962"/>
                <ItemTitulo background={Mexico} pais="México" estrelas={Star3} ano="1970"/>
                <ItemTitulo background={Pasadena} pais="Suécia" estrelas={Star4} ano="1994"/>
                <ItemTitulo background={Yokohama} pais="Japão" estrelas={Star5} ano="2002"/>
            </ScrollView>
        </ImageBackground>
    )
}