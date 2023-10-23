import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {memo} from 'react'

function Control({isRunning, leftButtonPress, RightButtonPress}) {
  return (
    <View style ={{flexDirection:'row', justifyContent:'space-around'}}>
    <TouchableOpacity  style={[styles.containner,{backgroundColor: isRunning? "#f6e58d":"#6ab04c"} ]}
    onPress={leftButtonPress}>
        <View style={styles.control}>
            <Text style={{color: isRunning? "#e056fd":"#535c68", alignSelf:'center'}}>
            {isRunning ? 'hold':'reset'} 
            </Text>
        </View> 
    </TouchableOpacity>

<TouchableOpacity  style={[styles.containner,{backgroundColor: isRunning? "#f0932b":"#be2edd"} ]}
onPress={RightButtonPress}>
<View style={styles.control}>
    <Text style={{color: isRunning? "#535c68":"#95afc0", alignSelf:'center'}}>
        {isRunning ? 'Stop':'Start'}
    </Text>
</View> 
</TouchableOpacity>
</View>
  )
}

const center ={
    justifyContent: 'center',
    alignSelf:'center'
}

const styles = StyleSheet.create({
    containner:{
        ...center,
        height:65,
        width: 65,
        borderRadius: 65,
        marginLeft:30
    },
    control:{
        ...center,
        height:55,
        width: 55,
        borderRadius: 55
    }
})

export default memo(Control);
