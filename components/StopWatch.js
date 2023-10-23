import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { displayTime } from './Utils'
import Result from './Result'
import Control from './Control'
import  Constants  from 'expo-constants'
import { StatusBar } from 'expo-status-bar'
import Myheader from './Myheader'

export default function StopWatch() {
    const [time, setTime]= useState(0);
    const [isRunning,setRunning]=useState(false);
    const [results,setResult]=useState([]);
    const timer=useRef(null);


    const leftButtonPress = useCallback(()=>{
        if(isRunning){
            setResult((previousResult)=> [time, ...previousResult] )
        }else{
            setResult([])
            setTime(0)
        }
    }, [isRunning, time])
    const RightButtonPress =useCallback(()=>{
        if(!isRunning){
            const interval= setInterval(()=>{
                setTime((previousTime)=>previousTime+1)
            },10)
            timer.current = interval
        }else{
            clearInterval(timer.current)
        }
        setRunning((previousState)=>!previousState)
    },[isRunning])
           
  return (
    <SafeAreaView style={styles.containner}>
            <Myheader/>
        <StatusBar style='light'/>
        <View style={styles.displayTime}>
            <Text style={styles.displaytxt}>{displayTime(time)}</Text>
        </View>
        <View style={styles.control}>
            <Control isRunning={isRunning} leftButtonPress={leftButtonPress} RightButtonPress={RightButtonPress}/>

        </View>
        <View style={styles.results}>
        <Result results={results}/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    containner:{
        flex:1,
        backgroundColor:"#535c68",
        paddingTop: Constants.statusBarHeight 
    },
    displayTime:{
        flex:1/5,
        justifyContent:'center',
        alignItems:'center'

    },
    control:{
        flexDirection:'row',
        justifyContent:'space-around'
        
    },
    displaytxt:{
        color:"#fff",
        fontSize:20,
        fontWeight:'200',
        fontFamily: Platform.OS === 'ios' ? "Helvetica Neue": null,
    },
    results:{
       flex:4/5,
      
    }
})