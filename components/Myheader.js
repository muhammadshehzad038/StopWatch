
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react'
import { Appbar } from 'react-native-paper'

export default function Myheader() {
  return (
    <SafeAreaProvider>   
        <Appbar.Header style={{backgroundColor:'black'}}>
            <Appbar.Content title={'Stop Watch'} style={{alignItems:'center'}} color='#fff'/>
        </Appbar.Header>

        </SafeAreaProvider>
    

  )
}
