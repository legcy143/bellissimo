import React, { Children, useState } from 'react';
import {
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';
import TextUi from './TextUi';
import { theme } from '../../contants/Theme';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export default function AccordianUi({ title, val = "", children }: any) {
    const [open, setopen] = useState(false);
    const onPress = () => {
        LayoutAnimation.easeInEaseOut();
        setopen(!open);
    };
    return (
        <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={1}>
            <View style={styles.row}>
                <TextUi mode='p2' style={styles.heading}>
                    <TextUi style={{
                        fontWeight: "500",
                        textTransform: "capitalize",
                        color: "#00000080"
                    }}>{title}</TextUi>
                    {val}
                </TextUi>
                <TextUi>{open ? 'close' : 'open'}</TextUi>
            </View>
            {open &&
                <>
                    {children}
                </>
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        borderWidth: 2,
        borderColor: '#00000020',
        borderRadius: 7,
        overflow: 'hidden',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 5,
    },
    heading: {
        fontSize: 17,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});