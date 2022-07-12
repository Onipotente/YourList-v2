import React, { useState } from "react"
import { Text, TouchableOpacity, Dimensions } from "react-native"
import CheckBox from "../../assets/img/CheckBox"


const ItemFlatList = ({task, completed, ...props}) => {

    let height = Dimensions.get('window').height;
    let width = Dimensions.get('window').width;

    
    return (
        
        // <Text>{task}</Text>
        <TouchableOpacity style={{flexDirection:"row", alignItems:"center"}} {...props}>
            <CheckBox />
            {completed ? 
            <Text style={{fontSize:20, marginLeft:10, color:'green', textDecorationLine:"line-through"}}>{task}</Text> : <Text style={{fontSize:20, marginLeft:10}}>{task}</Text>}
        </TouchableOpacity>
    )
}

export default ItemFlatList;
