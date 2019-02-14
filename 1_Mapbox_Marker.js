import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import Mapbox from '@mapbox/react-native-mapbox-gl'
Mapbox.setAccessToken('pk.eyJ1IjoibGludGFuZzIiLCJhIjoiY2pzNDJkaGJuMDBscDRhbGczMm1nOGM3aSJ9.9mrUUK4Z_YX9bZDMm1YZFA')

class App extends Component{
  
  titikMarker(){
    return (
      <Mapbox.PointAnnotation
        key = 'titik'
        id = 'titik'
        coordinate = {[106.8222893, -6.2106448]}
      >
        <View style={desain.posisi}>
          <View style={desain.titik}/>
        </View>
      </Mapbox.PointAnnotation>
    )
  }
  
  render(){
    return(
      <View style={desain.peta}>
        <Mapbox.MapView
          styleURL = {Mapbox.StyleURL.Street} // Dark, Light, Satellite
          zoomLevel = {15}
          centerCoordinate = {[106.8222893, -6.2106448]}
          style = {desain.peta}
        >
          {this.titikMarker()}
        </Mapbox.MapView>
      </View>
    )
  }
}

var desain = StyleSheet.create({
  peta: {flex: 1},
  posisi: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  },
  titik: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'lightpink',
    transform: [{ scale: 0.5}]
  }
})

export default App