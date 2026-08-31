import { View, Text, Image, StyleSheet } from 'react-native';

export default function DestinationCard({ name, description, image }) {
  return (
    <View style={styles.card}>

      <Image
        source={image}
        style={styles.image}
      />

      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fbf4e8',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f70b2',
    marginTop: 12,
  },

  description: {
    fontSize: 17,
    color: '#111112',
    marginTop: 6,
    lineHeight: 22,
  },

  
});

