
import { activityIndicator
image,
keyboardadvoidingview
modal
plataform
presaable
scrollview
text, 
switch
textInput
 } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation }) {

  const [nombre, setNombre] = useState('');
  const [destino, setDestino] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [guia, setGuia] = useState(false);
  const [resultado, setResultado] = useState('');
  const [procesando, setProcesando] = useState(false);

  const realizarReserva = () => {

    if (nombre.trim() === '' || destino.trim() === '' || cantidad.trim() === '') {
      setResultado('Debes completar todos los campos');
      return;
    }

    setProcesando(true);

    setTimeout(() => {
      setProcesando(false);
      setResultado(
        `Cliente: ${nombre}\nDestino: ${destino}\nPersonas: ${cantidad}\nGuía: ${guia ? 'Sí' : 'No'}`
      );
    }, 1000);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#06101c', padding: 25 }}>

      <Text style={{ color: '#89c9ee', fontSize: 30, fontWeight: 'bold' }}>
        Descubre Nariño
      </Text>

      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        placeholder="Destino"
        value={destino}
        onChangeText={setDestino}
      />

      <TextInput
        placeholder="Personas"
        value={cantidad}
        onChangeText={setCantidad}
        keyboardType="numeric"
      />

      <Text style={{ color: 'white' }}>¿Deseas guía?</Text>

      <Switch
        value={guia}
        onValueChange={setGuia}
      />

      <Pressable onPress={realizarReserva}>
        <Text style={{ color: '#89c9ee' }}>
          REALIZAR RESERVA
        </Text>
      </Pressable>

      {procesando && <ActivityIndicator />}

      <Text style={{ color: 'white' }}>
        {resultado}
      </Text>

      <Pressable onPress={() => navigation.navigate('Destinos')}>
        <Text style={{ color: '#89c9ee' }}>
          EXPLORAR DESTINOS
        </Text>
      </Pressable>

    </View>
  );
}
