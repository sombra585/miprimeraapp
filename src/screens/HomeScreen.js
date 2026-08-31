import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }) {
  const irADestinos = () => {
    navigation.navigate('Destinos');
  };

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/turismo.jpg')}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>
        -- Descubre Nariño --
      </Text>

      <Text style={styles.subtitle}>
        Explora paisajes, cultura y lugares increíbles
        de nuestra región.
      </Text>

      <CustomButton
        title="EXPLORAR DESTINOS"
        onPress={irADestinos}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06101c',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },

  imageContainer: {
    width: '100%',
    height: 280,
    borderRadius: 25,
    overflow: 'hidden',
    marginBottom: 25,
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#89c9ee',
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 5,
  },
});