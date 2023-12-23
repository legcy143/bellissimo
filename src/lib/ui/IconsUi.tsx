import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconButton, MD3Colors } from 'react-native-paper';

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

export const RnPaperIconsUi = ({ icon = "camera", size = 30, ...props }: IconsProps) => {
    return (
        <IconButton
            icon={icon}
            iconColor={MD3Colors.error50}
            size={size}
            mode='outlined'
            {...props}
        />
    )
}


const styles = StyleSheet.create({})