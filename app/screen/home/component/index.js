import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Container, Card, Icon } from 'native-base';

import { defaultStyle } from '../../../constant';
import Header from '../../../component/headerTextinput'
import { FlatList } from 'react-native-gesture-handler';
import { IMAGE } from '../../../asset';
import styles from '../style';


const data = [
    { image: IMAGE.img, tag: ["ullamco", "nisi", "laboris", "lorem"], title: "Lorem Ipsum 1" },
    { image: IMAGE.img, tag: ["ullamco", "nisi", "laboris", "lorem"], title: "Lorem Ipsum 1" },
    { image: IMAGE.img, tag: ["ullamco", "nisi", "laboris", "lorem"], title: "Lorem Ipsum 1" },
    { image: IMAGE.img, tag: ["ullamco", "nisi", "laboris", "lorem"], title: "Lorem Ipsum 1" }
]
export default class Home extends Component {

    _openDrawer = () => {
        this.props.navigation.openDrawer()
    }
    render() {
        return (
            <Container>
                <Header onPress={() => this._openDrawer()} title="Feed"/>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={defaultStyle.content}>
                            <Card style={{ borderRadius: 5, overflow: 'hidden' }}>
                                <View style={styles.card_container}>
                                    <Image source={item.image} style={defaultStyle.image} resizeMode="cover" />
                                </View>
                                <View style={styles.card_text__container}>
                                    <Text style={styles.card_text__title}>{item.title}</Text>
                                    <View style={defaultStyle.horizontalView}>
                                        {item.tag.map((item, key) => {
                                            return (
                                                <Text key={key} style={styles.card_text__tag}>#{item}</Text>
                                            )
                                        })}
                                    </View>
                                </View>
                                <View style={styles.card_icon__container}>
                                  <View style={styles.card_icon__left}>
                                    <Icon name="backward" type="FontAwesome" style={defaultStyle.icon}/>
                                    <Icon name="play" type="FontAwesome" style={defaultStyle.icon}/>
                                    <Icon name="forward" type="FontAwesome" style={defaultStyle.icon}/>
                                  </View>
                                  <View>
                                    <Icon name="upload" type="FontAwesome" style={defaultStyle.icon}/>
                                  </View>
                                </View>
                            </Card>
                        </View>
                    )}
                />
            </Container>
        )
    }
}
