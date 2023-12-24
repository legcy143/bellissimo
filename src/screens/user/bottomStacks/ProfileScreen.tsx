import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import TextUi from '../../../lib/ui/TextUi';
import { FaIcons } from '../../../lib/ui/IconsUi';

const { width } = Dimensions.get('window');
const headerHeight = 300;
const headerFinalHeight = 70;
const imageSize = (headerHeight / 3) * 2;

const DATA = [
  { id: 'header' },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

export default function ProfileScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [textWidth, setTextWidth] = useState(0);
  const offset = headerHeight - headerFinalHeight;
  const translateHeader = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -offset],
    extrapolate: 'clamp',
  });
  const translateImageY = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -(headerFinalHeight - headerHeight) / 2],
    extrapolate: 'clamp',
  });
  const translateImageX = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [
      0,
      -(width / 2) + (imageSize * headerFinalHeight) / headerHeight,
    ],
    extrapolate: 'clamp',
  });
  const scaleImage = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, headerFinalHeight / headerHeight],
    extrapolate: 'clamp',
  });
  const translateName = scrollY.interpolate({
    inputRange: [0, offset / 2, offset],
    outputRange: [0, 10, -width / 2 + textWidth / 2 + headerFinalHeight],
    extrapolate: 'clamp',
  });
  const scaleName = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  });
  const renderItem = ({ index }) => {
    if (index == 0)
      return (
        <Animated.View
          style={[styles.header, { transform: [{ translateY: translateHeader }] }]}>
          <TextUi style={{
            position: "absolute",
            bottom: 25,
            left: 4,
          }}>Back</TextUi>
          <Animated.View
            style={[
              styles.image,
              {
                transform: [
                  { translateY: translateImageY },
                  { translateX: translateImageX },
                  { scale: scaleImage },
                ],
              },
            ]}>
            <Image
              source={{
                uri: 'https://i.ibb.co/YySxPQC/pro.jpeg',
              }}
              style={styles.img}
              resizeMode="cover"
            />
          </Animated.View>
          <Animated.Text
            onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
            style={[
              styles.name,
              { transform: [{ translateX: translateName }, { scale: scaleName }] },
            ]}>
            ASWINdfgsdfgsdfgsdf
          </Animated.Text>
        </Animated.View>
      );
    if (index == 1) {
      return (
        <View>
          <TextUi>Detail my</TextUi>
        </View>
      )
    }
    return (
      <TouchableOpacity style={styles.item} >
        <TextUi mode='p1'>Page</TextUi>
        <FaIcons icon="arrow-right" size={20} />
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      stickyHeaderIndices={[0]}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
        useNativeDriver: false,
      })}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 5,
    borderColor: 'grey',
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  header: {
    height: headerHeight,
    marginBottom: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: headerHeight,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  name: {
    fontSize: 25,
    padding: 2,
    color: '#000',
    position: 'absolute',
    bottom: 0,
    height: headerFinalHeight,
    textAlignVertical: 'center',
    letterSpacing: 1,
  },
});