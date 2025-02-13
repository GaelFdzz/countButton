import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

const images = {
  1: require('./images/1.jpg'),
  2: require('./images/2.jpg'),
  3: require('./images/3.jpg'),
  4: require('./images/4.jpg'),
  5: require('./images/5.jpg'),
};

export default function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(null);

  const imagenRandom = () => {
    const numeroRandom = Math.floor(Math.random() * 5) + 1;
    return images[numeroRandom];
  };

  const sumarContador = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount % 10 === 0) {
      setImage(imagenRandom());
    }

    if (newCount == 51) {
      setCount(0);
    }
  };

  return (
    <View style={styles.container}>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      )}

      <Text style={styles.counterText}>{count}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={sumarContador}>
          <Text>Presiona aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'absolute',  // Fija la imagen en la parte superior
    top: 50,               // Ajusta la posición desde la parte superior
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'center',
  },
  buttonContainer: {
    position: 'absolute',  // Fija el botón en su lugar
    bottom: 100,           // Ajusta la distancia desde la parte inferior
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});