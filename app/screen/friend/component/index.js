import React, { Component } from 'react'
import { Container } from 'native-base';
import Header from '../../../component/headerTextinput'
import { FlatList } from 'react-native-gesture-handler';
import { IMAGE } from '../../../asset';
import ListItem from '../../../component/listItem'


const data = [
    {name: 'Ariana Grande', followed: false, image: IMAGE.ava},
    {name: 'Lady Gaga', followed: true, image: IMAGE.ava},
    {name: 'Bilie Elle', followed: true, image: IMAGE.ava},
    {name: 'Bambang Ella', followed: false, image: IMAGE.ava}
]
export default class friend extends Component {

    constructor(props){
        super(props)

        this.state = {
            input: ''
        }
    }

    _openDrawer = () => {
        this.props.navigation.openDrawer()
    }

    _handleChangeText = text => {
        this.setState({
            input: text
        })
    }
    render() {
        const filteredItem = data.filter((user) => {return user.name.toLocaleLowerCase().startsWith(this.state.input.toLocaleLowerCase())})
        return (
            <Container>
                <Header onPress={() => this._openDrawer()} onChangeText={(text) => this._handleChangeText(text)} value={this.state.input} title="Following" />
                <FlatList
                    data={filteredItem}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <ListItem 
                            image={item.image}
                            text={item.name}
                            status={item.followed}
                        />
                    )}
                />
            </Container>
        )
    }
}
