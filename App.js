import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Card from './components/Card'

class App extends Component {
  constructor(props) {
    super(props)
    this.toggleFull = this.toggleFull.bind(this)
    this.showFullImage = this.showFullImage.bind(this)
    this.state = {
      full: false,
      image: require('./assets/mountain1.jpg')
    }
  }

  toggleFull(full, image) {
    this.setState({
      full: full,
      image: image
    })
  }

  showFullImage() {
    if (this.state.full) {
      return(
          <View style={{
              position: 'absolute',
              top: 30,
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 8,
          }}>
              <ImageBackground source={this.state.image} style={styles.fullSize}>
                  <TouchableOpacity style={styles.closeButton} onPress={() => this.setState({
                      full: false
                  })}> 
                      <Text>close</Text>
                  </TouchableOpacity>
              </ImageBackground>
          </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Card cover={require('./assets/mountain1.jpg')} title="Mountain 1" description="Unlock your full potential with our hiking tour. Explore the best hiking sights with us!" action={this.toggleFull}/>
        <Card cover={require('./assets/mountain2.jpg')} title="Mountain 2" description="Unlock your full potential with our hiking tour. Explore the best hiking sights with us!"  action={this.toggleFull}/>
        <Card cover={require('./assets/mountain1.jpg')} title="Mountain 1" description="Unlock your full potential with our hiking tour. Explore the best hiking sights with us!" action={this.toggleFull}/>
        <Card cover={require('./assets/mountain2.jpg')} title="Mountain 2" description="Unlock your full potential with our hiking tour. Explore the best hiking sights with us!"  action={this.toggleFull}/>
        <Card cover={require('./assets/mountain1.jpg')} title="Mountain 1" description="Unlock your full potential with our hiking tour. Explore the best hiking sights with us!" action={this.toggleFull}/>
        <Card cover={require('./assets/mountain2.jpg')} title="Mountain 2" description="Unlock your full potential with our hiking tour. Explore the best hiking sights with us!"  action={this.toggleFull}/>
        <Card cover={require('./assets/mountain1.jpg')} title="Mountain 1" description="Unlock your full potential with our hiking tour. Explore the best hiking sights with us!" action={this.toggleFull}/>
        <Card cover={require('./assets/mountain2.jpg')} title="Mountain 2" description="Unlock your full potential with our hiking tour. Explore the best hiking sights with us!"  action={this.toggleFull}/>
        {this.showFullImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#eeeeee',
    position: 'relative'
  },
  fullSize: {
      flex: 1,
      resizeMode: 'contain',
      borderRadius: 8
  },
  closeButton: {
      backgroundColor: '#ffffff',
      minWidth: 40,
      minHeight: 40,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default App