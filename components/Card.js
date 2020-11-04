import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, ImageBackground, TouchableOpacity } from 'react-native';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            full: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback style={{flex: 1}} onPress={() => this.props.action(true, this.props.cover)}>
                    <Image style={styles.cover} source={this.props.cover}/>
                </TouchableWithoutFeedback>
                <View style={styles.textContainer}>
                    <Text style={{fontWeight:'bold', fontSize: 18}}>{this.props.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{flexShrink: 1, color: '#A9A9A9'}}>{this.props.description}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 10
    },
    cover: {
        height: 80,
        borderRadius: 8,
        flex: 1
    },
    textContainer: {
        marginLeft: 10,
        flex: 2
    }
})

export default Card