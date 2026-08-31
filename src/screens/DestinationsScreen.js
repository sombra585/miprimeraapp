import { ScrollView, Text, StyleSheet } from 'react-native';
import DestinationCard from '../components/DestinationCard';

export default function DestinationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>
        Destinos turísticos
      </Text>

      <DestinationCard
        name="● Laguna de la Cocha"
        description="Un hermoso destino natural rodeado de montañas y paisajes increíbles."
        image={require('../../assets/images/cocha.jpg')}
      />

      <DestinationCard
        name="● Las lajas"
        description="Una bella iglesia en medio del cañón del río Guáitara, un lugar lleno de historia y cultura."
        image={require('../../assets/images/lajas.jpg')}
      />

    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
  padding: 20,
  backgroundColor: '#0b1d2c',
},

  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});