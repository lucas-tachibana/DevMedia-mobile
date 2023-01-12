import React from "react";
import { ScrollView, Text, View } from "react-native";
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons";

import styles from './styles';

export default function TelaContato() {
    return (
        <ScrollView>
            <View style={ styles.container }>
                <Text style={ styles.title }>Entre em contato conosco para comprar nossos produtos</Text>

                <View style={ styles.contactList }>

                    <View style={ styles.contactBox }>
                        <FontAwesome name="phone" size={ 50 } color="#400303" />
                        <Text style={ styles.contactTitle }>Telefone:</Text>
                        <Text style={ styles.contactParagraph }>+55 21 91234-1234</Text>
                    </View>

                    <View style={ styles.contactBox }>
                        <Entypo name="location-pin" size={ 50 } color="#400303" />
                        <Text style={ styles.contactTitle }>Endereço:</Text>
                        <Text style={ styles.contactParagraph }>Av. Brasil, 123</Text>
                        <Text style={ styles.contactParagraph }>Rio de Janeiro - RJ</Text>
                    </View>

                    <View style={ styles.contactBox }>
                        <MaterialIcons name="email" size={ 50 } color="#400303" />
                        <Text style={ styles.contactTitle }>E-mail:</Text>
                        <Text style={ styles.contactParagraph }>preferia@adega.com.br</Text>
                    </View>

                    <View style={ styles.contactBox }>
                        <FontAwesome name="instagram" size={ 50 } color="#400303" />
                        <Text style={ styles.contactTitle }>Instagram:</Text>
                        <Text style={ styles.contactParagraph }>@adegapreferida</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}