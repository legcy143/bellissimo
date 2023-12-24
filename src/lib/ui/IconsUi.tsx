import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../contants/Theme';

export const FaIcons = ({ icon = "rocket", size = 30, color = theme.primaryText, ...props }: any) => {
    return (
        <TouchableOpacity {...props}>
            <Text style={{
                color,
                fontWeight: '100'
            }}>
                <Icon name={icon} size={size} />
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({})