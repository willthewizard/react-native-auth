// Import a libaray to help create a component
import React from 'react';
import {Text,View} from 'react-native';

// create a component
 const Header=(props)=>{
     const {textStyle,viewStyle} = styles;
     return(
        <View style ={viewStyle}>
         <Text style ={textStyle}>{props.headerText}</Text>
        </View>
     )
 };

 const styles = {
    viewStyle:{
        backgroundColor :'#F8F8E8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor:'#000',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.8,
        elevation:0,
        position:'relative'


    },
    textStyle:{
        fontSize:20
    }
};
 export {Header};