import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { displayTime } from './Utils'
function Result({results}) {
  return (
    <ScrollView>
        <View style={styles.resultItem}/>
            {results.map((items, index)=>
                (
                <View key={index} style={styles.resultItem}>
                    <Text style={styles.txt}>
                        Hold {results.length-index}
                    </Text>
                    <Text style={styles.txt}>{displayTime(items)}</Text>
                </View>

            ))}

    
     </ScrollView>
  );
};

const styles = StyleSheet.create({
    resultItem:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        borderColor:"#313131",
        height:70,
        paddingHorizontal:15,

    },
    txt:{
        color: "#fff",
    }
})

export default React.memo(Result);