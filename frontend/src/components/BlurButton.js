import { BlurView } from '@react-native-community/blur';
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export default function BlurButton() {
    return (
        <BlurView
        style={{
          width: 100, // Ajustez la largeur de l'image comme vous le souhaitez
          height: 100, // Ajustez la hauteur de l'image comme vous le souhaitez
          borderRadius: 50, // Un bord arrondi pour le bouton
        }}
        blurType="light" // Vous pouvez ajuster le type de flou selon vos préférences (light, dark, extra-light, etc.)
        blurAmount={10} // Ajustez l'intensité du flou selon vos besoins
      >
        <Image
          source={require("../../../assets/nature.jpg")}
          style={styles.image}
        />
      </BlurView>
    );
}

const styles = StyleSheet.create({})

