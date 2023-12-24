import React, { useState } from 'react';
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

export default function AccordianUi({ i }: any) {
    const [open, setopen] = useState(false);
    const onPress = () => {
        LayoutAnimation.easeInEaseOut();
        setopen(!open);
    };
    return (
        <TouchableOpacity style={styles.item} onPress={onPress} activeOpacity={1}>
            <View style={styles.row}>
                <TextUi mode='p1' style={styles.heading}>Header - {i + 1}</TextUi>
                <TextUi>{open ? 'close' : 'open'}</TextUi>
            </View>
            {open &&
                [1, 2, 3, 4, 5].map(x => (
                    <TextUi key={x} style={styles.subItem}>
                        - SOME DATA
                    </TextUi>
                ))}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        borderWidth: 1.3,
        borderColor: `gray`,
        borderRadius: 7,
        paddingHorizontal: 20,
        overflow: 'hidden',
        paddingVertical: 10,
        marginBottom: 5,
    },
    heading: {
        fontSize: 17,
    },
    subItem: {
        padding: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});