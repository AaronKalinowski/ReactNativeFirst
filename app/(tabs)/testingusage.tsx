import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View,Text,ImageBackground } from 'react-native';

const logoImg = require("@/assets/images/react-logo.png");

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <View style = {{flex:1, backgroundColor: "grey", padding:20}}>
      {/* <Text style = {{color: "white", fontWeight: "bold", fontSize: 25}}><Text>HELLO SEXY</Text></Text>
      <Image source={logoImg} style = {{width:300, height:300}}/>
      <Image source={{uri:'https://picsum.photos/300'}} style = {{width:300, height:300}}/> */}
      <ImageBackground source = {logoImg} style={{flex:1}}>
        <Text>STUD</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
