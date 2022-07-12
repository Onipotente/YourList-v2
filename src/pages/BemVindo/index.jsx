import React, { useState } from "react"
import { FlatList, View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native"
import LogoPrimeiraPagina from "../../assets/img/LogoPrimeiraPagina.png"
import { AndroidSafeArea, Container } from './styles'

const BemVindo = () => {

    let height = Dimensions.get('window').height;
    let width = Dimensions.get('window').width;

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignContent:"center", alignItems:"center"}}>
            <Image source={LogoPrimeiraPagina} style={{width:300, height:300}}/>
        </SafeAreaView>
    )
}

export default BemVindo;
