import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

interface IconsProps {
    icon?: string;
    size?: number;
}

export const FaIcons = ({ icon = "rocket", size = 30, ...props }: any) => {
    return (
        <TouchableOpacity {...props}>
            <Text style={{
                color: "#111111"
            }}>
                <Icon name={icon} size={size} />
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({})