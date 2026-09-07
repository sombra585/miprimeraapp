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
  const [cafe, setCafe] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [paraLlevar, setLlevar] = useState(false);
  const [resultado, setResultado] = useState('');
  const [proceso, setProceso] = useState(false);

  const realizarPedidos = () => {

    if (
      nombre.trim() === '' ||
      cafe.trim() === '' ||
      cantidad.trim() === ''
    ) {
      setResultado('Debes completar todos los campos');
      return;
    }

    setProceso(true);

    setTimeout(() => {

      setProceso(false);

      setResultado(
        `Cliente: ${nombre}
Café: ${cafe}
Cantidad: ${cantidad}
Para llevar: ${paraLlevar ? 'Sí' : 'No'}`
      );

    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F5E6D3',
        padding: 25,
        justifyContent: 'center'
      }}
    >

      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#5C3A21',
          textAlign: 'center',
          marginBottom: 25
        }}
      >
        ☕ Mi Cafetería
      </Text>

      <TextInput
        placeholder="Nombre del cliente"
        value={nombre}
        onChangeText={setNombre}
        style={{
          backgroundColor: 'white',
          padding: 13,
          marginBottom: 12,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#D2B48C'
        }}
      />

      <TextInput
        placeholder="Tipo de café"
        value={cafe}
        onChangeText={setCafe}
        style={{
          backgroundColor: 'white',
          padding: 13,
          marginBottom: 12,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#D2B48C'
        }}
      />

      <TextInput
        placeholder="Cantidad"
        value={cantidad}
        onChangeText={setCantidad}
        keyboardType="numeric"
        style={{
          backgroundColor: 'white',
          padding: 13,
          marginBottom: 15,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#D2B48C'
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
            color: '#5C3A21'
          }}
        >
          ¿Para llevar?
        </Text>

        <Switch
          value={paraLlevar}
          onValueChange={setLlevar}
        />

      </View>

      <Pressable
        onPress={realizarPedidos}
        style={{
          backgroundColor: '#6F4E37',
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
          REALIZAR PEDIDO
        </Text>

      </Pressable>

      {proceso && (
        <ActivityIndicator
          size="large"
          color="#6F4E37"
          style={{ marginTop: 20 }}
        />
      )}

      <Text
        style={{
          color: '#5C3A21',
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