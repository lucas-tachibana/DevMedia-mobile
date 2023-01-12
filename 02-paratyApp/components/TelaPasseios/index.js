import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';

import Passeio01 from '../../assets/passeios/passeio01.png';
import Passeio02 from '../../assets/passeios/passeio02.png';
import Passeio03 from '../../assets/passeios/passeio03.png';

export default function TelaPasseios(){
    return(
            <View style={ styles.container }>
                <Text style={ styles.title }>
                    Passeios em Paraty
                </Text>
                <Text style={ styles.description }>
                O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja três exemplos:
                </Text>
                
                <View style={ styles.card }>
                    <Text style= { styles.cardTitle }>
                        Tirolesa
                    </Text>
                    <Image source={Passeio01} style={ styles.cardImage } />
                </View>
                
                <View style={ styles.card }>
                    <Text style= { styles.cardTitle }>
                        Rafting
                    </Text>
                    <Image source={Passeio02} style={ styles.cardImage } />
                </View>
                
                <View style={ styles.card }>
                    <Text style= { styles.cardTitle }>
                        Canoagem no mangue
                    </Text>
                    <Image source={Passeio03} style={ styles.cardImage } />
                </View>
            </View>

    )
}