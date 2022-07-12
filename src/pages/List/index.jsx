import React, { useState } from "react"
import { FlatList, View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native"
import EditButton from "../../assets/img/EditButton"
import TrashButton from "../../assets/img/TrashButton.png"
import Gradiente from "../../assets/img/gradiente.png"
import PlusButton from "../../assets/img/plus.png"
import ItemFlatList from "../../components/ItemFlatList"
import Logo from "../../assets/img/Logo.png"
import { AndroidSafeArea, Container } from './styles'

const List = () => {

    let height = Dimensions.get('window').height;
    let width = Dimensions.get('window').width;

    const data = [
        { id: 1, task: "Tirar A" },
        { id: 2, task: "Estudar React Native" },
        { id: 3, task: "Passar de ano" },
        { id: 4, task: "Ir bem na AV2" },
    ]

    const [listItem, setListItem] = useState(data)


    const renderItem = ({ item }) => {
        return (
            <View style={Container}>
                <ItemFlatList task={item.task}
                />
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <TouchableOpacity>
                        <EditButton />
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}}>
                        <Image source={TrashButton} style={{width:40, height:40,}}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <Image source={Gradiente} style={{position:"relative", marginVertical:true}}/>
                <Image source={Logo} style={{position:"absolute", top:50, left:(width * 0.5) - 140}}/>
                <Text style={{position:"absolute", top:280, fontSize:40, alignSelf:"center"}}>What's up, Matheus!</Text>

                <FlatList
                    data={listItem}
                    renderItem={renderItem}
                    keyExtractor={listItem.id}
                />
                <TouchableOpacity>
                    <Image source={PlusButton} style={{width: 60, height:60, alignSelf:"flex-end", marginTop:24, marginRight:10, marginBottom:30}}/>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default List
