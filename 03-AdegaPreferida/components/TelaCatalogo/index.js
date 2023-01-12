import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

import styles from './styles';

import imgVinhoBranco from '../../assets/vinho-branco.jpg';
import imgVinhoEspecial from '../../assets/vinho-especial.jpg';
import imgVinhoRose from '../../assets/vinho-rose.jpg';
import imgVinhoTinto from '../../assets/vinho-tinto.jpg';


export default function TelaCatalogo() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerScroll}>
                <View style={styles.boxTitle}>
                    <Text style={styles.title}>Nossos Vinhos</Text>
                    <Text style={styles.subtitle}>Trabalhamos com o melhor vinho dos seguintes tipos:</Text>
                    <Text style={styles.subtitle}>Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
                </View>

                <View style={styles.wineCard}>
                    <Image resizeMode="contain" style={ styles.wineImg } source={ imgVinhoBranco } />
                    <View style={styles.cardBoxDescription}>
                        <Text style={styles.cardTitle}>Chatigny Chardonnay</Text>
                        <Text style={styles.cardDescription}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
                    </View>
                </View>

                <View style={styles.wineCard}>
                    <Image resizeMode="contain" style={ styles.wineImg } source={ imgVinhoRose } />
                    <View style={styles.cardBoxDescription}>
                        <Text style={styles.cardTitle}>Concha y Toro Exportacion</Text>
                        <Text style={styles.cardDescription}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
                    </View>
                </View>

                <View style={styles.wineCard}>
                    <Image resizeMode="contain" style={ styles.wineImg } source={ imgVinhoTinto } />
                    <View style={styles.cardBoxDescription}>
                        <Text style={styles.cardTitle}>Portada Winemaker's</Text>
                        <Text style={styles.cardDescription}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
                    </View>
                </View>

                <View style={styles.wineCard}>
                    <Image resizeMode="contain" style={ styles.wineImg } source={ imgVinhoEspecial } />
                    <View style={styles.cardBoxDescription}>
                        <Text style={styles.cardTitle}>Elvio Cogno Ravera Barolo</Text>
                        <Text style={styles.cardDescription}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
                    </View>
                </View>


            </ScrollView>
        </View>
    )
}