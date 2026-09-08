import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  Switch,
  TextInput,
  View
} from 'react-native';

import { useState } from 'react';

export default function HomeScreen() {

  // Estados
  const [nombre, setNombre] = useState('');
  const [destino, setDestino] = useState('');
  const [personas, setPersonas] = useState('');
  const [guia, setGuia] = useState(false);
  const [resultado, setResultado] = useState('');
  const [proceso, setProceso] = useState(false);

  const realizarReserva = () => {

    if (
      nombre.trim() === '' ||
      destino.trim() === '' ||
      personas.trim() === ''
    ) {
      setResultado('Debes completar todos los campos');
      return;
    }

    setProceso(true);

    setTimeout(() => {

      setProceso(false);

      setResultado(
        `Turista: ${nombre}
Destino: ${destino}
Personas: ${personas}
Guía turístico: ${guia ? 'Sí' : 'No'}`
      );

    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E3F2FD',
        padding: 25,
        justifyContent: 'center'
      }}
    >

      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#1565C0',
          textAlign: 'center',
          marginBottom: 20
        }}
      >
        🌎 Turismo Colombia
      </Text>

      {/* ESPACIO PARA LA IMAGEN */}
      <Image
        source={require('../../assets/images/turismo.jpg')}
        style={{
          width: '100%',
          height: 180,
          borderRadius: 15,
          marginBottom: 20
        }}
        resizeMode="cover"
      />

      <TextInput
        placeholder="Nombre del turista"
        value={nombre}
        onChangeText={setNombre}
        style={{
          backgroundColor: 'white',
          padding: 13,
          marginBottom: 12,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#90CAF9'
        }}
      />

      <TextInput
        placeholder="Destino turístico"
        value={destino}
        onChangeText={setDestino}
        style={{
          backgroundColor: 'white',
          padding: 13,
          marginBottom: 12,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#90CAF9'
        }}
      />

      <TextInput
        placeholder="Cantidad de personas"
        value={personas}
        onChangeText={setPersonas}
        keyboardType="numeric"
        style={{
          backgroundColor: 'white',
          padding: 13,
          marginBottom: 15,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#90CAF9'
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20
        }}
      >

        <Text
          style={{
            fontSize: 16,
            color: '#1565C0'
          }}
        >
          ¿Desea guía turístico?
        </Text>

        <Switch
          value={guia}
          onValueChange={setGuia}
        />

      </View>

      <Pressable
        onPress={realizarReserva}
        style={{
          backgroundColor: '#1976D2',
          padding: 15,
          borderRadius: 10,
          alignItems: 'center'
        }}
      >

        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold'
          }}
        >
          REALIZAR RESERVA
        </Text>

      </Pressable>

      {proceso && (
        <ActivityIndicator
          size="large"
          color="#1976D2"
          style={{ marginTop: 20 }}
        />
      )}

      <Text
        style={{
          color: '#1565C0',
          fontSize: 16,
          marginTop: 20,
          backgroundColor: 'white',
          padding: 15,
          borderRadius: 10
        }}
      >
        {resultado}
      </Text>

    </View>
  );
}