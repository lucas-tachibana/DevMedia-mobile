import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles';

import Capa from '../../assets/01.png';

export default function TelaHome(props){
    return(
        <View style={ styles.container }>
            <View style={ styles.card }>
                <Text style={ styles.title }>Paraty</Text>
                <Text style={ styles.description }>Saiba o que visitar em Paraty</Text>

                <Image source={Capa} style={ styles.imageCover }/>

                <View style={ styles.buttonWrapper }>
                    <Button 
                        title="Hospedagem" 
                        onPress={() => props.navigation.navigate('Hospedagem')}
                        color='#372d00'
                    />
                </View>

                <View style={ styles.buttonWrapper }>
                    <Button 
                        title="Passeios" 
                        onPress={() => props.navigation.navigate('Passeios')} 
                        color='#372d00'
                    />
                </View>


                <View style={ styles.buttonWrapper }>
                    <Button 
                        title="Restaurantes" 
                        onPress={() => props.navigation.navigate('Restaurantes')} 
                        color='#372d00'
                    />
                </View>

            </View>

        </View>
    );
}