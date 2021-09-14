import React from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native';

import styles from './Card.style'

function Card(props) {
  return (
    <View styles={styles.container}>
      <View>
        <Text>{props.title}</Text>
        <Text>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={() => Alert.alert('Merhaba ' + props.title)}>
        <Text>I Liked</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Card
