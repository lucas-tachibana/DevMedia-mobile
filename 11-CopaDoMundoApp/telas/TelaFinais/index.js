import React from "react";
import { ImageBackground, ScrollView, Text } from "react-native";
import ItemFinal from "./itemFinal";

import estiloGlobal from '../../assets/estilos';

import Background from '../../assets/background.png'

// Bandeiras
import BandeiraAlemanha from '../../assets/bandeiras/alemanha.png';
import BandeiraBrasil from '../../assets/bandeiras/brasil.png';
import BandeiraFranca from '../../assets/bandeiras/franca.png';
import BandeiraItalia from '../../assets/bandeiras/italia.png';
import BandeiraSuecia from '../../assets/bandeiras/suecia.png';
import BandeiraTchecoslovaquia from '../../assets/bandeiras/tchecoslovaquia.png';
import BandeiraUruguai from '../../assets/bandeiras/uruguai.png';

//Estádios
import EstadioBrasil from '../../assets/estadios/estadio_brasil.png';
import EstadioChile from '../../assets/estadios/estadio_chile.png';
import EstadioEua from '../../assets/estadios/estadio_eua.png';
import EstadioFranca from '../../assets/estadios/estadio_franca.png';
import EstadioJapao from '../../assets/estadios/estadio_japao.png';
import EstadioMexico from '../../assets/estadios/estadio_mexico.png';
import EstadioSuecia from '../../assets/estadios/estadio_suecia.png';

export default function TelaFinais() {
    return (
        <ScrollView>
            <ImageBackground source={Background} style={estiloGlobal.tela}>
                <Text style={estiloGlobal.titulo}>Finais</Text>
                <ItemFinal
                    background={EstadioBrasil}
                    titulo="1950 - Maracanã, Brasil"
                    bandeiraEsquerda={BandeiraUruguai}
                    placar="2 x 1"
                    bandeiraDireita={BandeiraBrasil}
                />

                <ItemFinal
                    background={EstadioSuecia}
                    titulo="1958 - Rasunda, Suécia"
                    bandeiraEsquerda={BandeiraBrasil}
                    placar="5 x 2"
                    bandeiraDireita={BandeiraSuecia}
                />

                <ItemFinal
                    background={EstadioChile}
                    titulo="1962 - Estadio Nacional, Chile"
                    bandeiraEsquerda={BandeiraBrasil}
                    placar="3 x 1"
                    bandeiraDireita={BandeiraTchecoslovaquia}
                />

                <ItemFinal
                    background={EstadioMexico}
                    titulo="1970 - Estádio Azteca, México"
                    bandeiraEsquerda={BandeiraBrasil}
                    placar="4 x 1"
                    bandeiraDireita={BandeiraItalia}
                />

                <ItemFinal
                    background={EstadioEua}
                    titulo="1994 - Rose Bowl, EUA"
                    bandeiraEsquerda={BandeiraBrasil}
                    placar="0 x 0"
                    bandeiraDireita={BandeiraItalia}
                />

                <ItemFinal
                    background={EstadioFranca}
                    titulo="1998 - Stade de France, França"
                    bandeiraEsquerda={BandeiraFranca}
                    placar="3 x 0"
                    bandeiraDireita={BandeiraBrasil}
                />

                <ItemFinal
                    background={EstadioJapao}
                    titulo="2002 - Yokohama, Japão"
                    bandeiraEsquerda={BandeiraBrasil}
                    placar="2 x 0"
                    bandeiraDireita={BandeiraAlemanha}
                />

            </ImageBackground>
        </ScrollView>

    )
}