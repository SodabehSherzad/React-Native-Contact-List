import React from 'react'
import{ View, Text, StyleSheet } from 'react-native'
import colors from '../utils/colors.js' 

import ContactThumnail from '../components/ContactThumnail'
import DetailsListItem from '../components/DetailsListItem'

export default function Profile({name, phone, email}){
    return (
        <View style={styles.container}>
            <View style={styles.thumnailSection}>
                <ContactThumnail name={name} phone={phone}/>
            </View>
            <View style={styles.detailSection}>
                <DetailsListItem icon="email" title="Email" subTitle={email}/>
                <DetailsListItem icon="phone" title="work" subTitle={phone}/>     
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    thumnailSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary
    },
    detailSection: {
        flex: 1,
        paddingTop: 10
    }
})