import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import Mapbox from '@mapbox/react-native-mapbox-gl'
Mapbox.setAccessToken('pk.eyJ1IjoibGludGFuZzIiLCJhIjoiY2pzNDJkaGJuMDBscDRhbGczMm1nOGM3aSJ9.9mrUUK4Z_YX9bZDMm1YZFA')

class App extends Component{
  render(){
    return(
      <View style={desain.peta}>
        <Mapbox.MapView
          styleURL = {Mapbox.StyleURL.Street} // Dark, Light, Satellite
          zoomLevel = {15}
          centerCoordinate = {[106.8222893, -6.2106448]}
          style = {desain.peta}
        >
        </Mapbox.MapView>
      </View>
    )
  }
}

var desain = StyleSheet.create({
  peta: {flex: 1}
})

export default App