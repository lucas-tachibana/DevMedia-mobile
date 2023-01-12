import React from "react";
import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import estiloGlobal from "../../assets/estilos/estilos";
import ItemValor from "../ItemValor";

export default function Salario() {
    return (
        <SafeAreaView>
            <ScrollView>
                <ItemValor estilo={estiloGlobal.odd} ano="Ano" valor="Salário"/>
                <ItemValor ano="2010" valor="R$ 510,00"/>
                <ItemValor estilo={estiloGlobal.odd} ano="2011" valor="R$ 545,00"/>
                <ItemValor ano="2012" valor="R$ 622,00"/>
                <ItemValor estilo={estiloGlobal.odd} ano="2013" valor="R$ 678,00"/>
                <ItemValor ano="2014" valor="R$ 724,00"/>
                <ItemValor estilo={estiloGlobal.odd} ano="2015" valor="R$ 788,00"/>
                <ItemValor ano="2016" valor="R$ 880,00"/>
                <ItemValor estilo={estiloGlobal.odd} ano="2017" valor="R$ 937,00"/>
                <ItemValor ano="2018" valor="R$ 954,00"/>
                <ItemValor estilo={estiloGlobal.odd} ano="2019" valor="R$ 998,00"/>
                <ItemValor ano="2020" valor="R$ 1045,00"/>
            </ScrollView>
        </SafeAreaView>
    )
}

// Ano  Salário
// 2010 R$ 510,00
// 2011 R$ 545,00
// 2012 R$ 622,00
// 2013 R$ 678,00
// 2014 R$ 724,00
// 2015 R$ 788,00
// 2016 R$ 880,00
// 2017 R$ 937,00
// 2018 R$ 954,00
// 2019 R$ 998,00
// 2020 R$ 1045,00