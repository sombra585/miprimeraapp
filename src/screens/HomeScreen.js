import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Switch,
  Text,
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

  // Realizar reserva
  const realizarReserva = () => {

    if (
      nombre.trim() === '' ||
      destino.trim() === '' ||
      personas.trim() === ''
    ) {
      setResultado('⚠️ Debes completar todos los campos');
      return;
    }

    setProceso(true);
    setResultado('');

    setTimeout(() => {

      setProceso(false);

      setResultado(
        `✅ Reserva realizada correctamente

Turista: ${nombre}
Destino: ${destino}
Personas: ${personas}
Guía turístico: ${guia ? 'Sí' : 'No'}`
      );

    }, 1000);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 30
      }}
      style={{
        flex: 1,
        backgroundColor: '#EAF4F4'
      }}
    >

      {/* ENCABEZADO */}
      <View
        style={{
          backgroundColor: '#00695C',
          paddingTop: 55,
          paddingBottom: 25,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25
        }}
      >

        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          🇨🇴 Turismo Colombia
        </Text>

        <Text
          style={{
            color: '#B2DFDB',
            fontSize: 16,
            textAlign: 'center',
            marginTop: 8
          }}
        >
          Descubre lugares increíbles
        </Text>

      </View>


      {/* IMAGEN PRINCIPAL */}
      <View
        style={{
          margin: 18,
          backgroundColor: 'white',
          borderRadius: 18,
          overflow: 'hidden',
          elevation: 4
        }}
      >

        <Image
          source={require('../../assets/images/turismo.jpg')}
          style={{
            width: '100%',
            height: 200
          }}
          resizeMode="cover"
        />

        <View
          style={{
            padding: 15
          }}
        >

          <Text
            style={{
              fontSize: 21,
              fontWeight: 'bold',
              color: '#004D40'
            }}
          >
            Vive una nueva aventura
          </Text>

          <Text
            style={{
              color: '#607D8B',
              marginTop: 5,
              fontSize: 14
            }}
          >
            Explora los paisajes, cultura y lugares turísticos
            de Colombia.
          </Text>

        </View>

      </View>


      {/* DESTINOS */}
      <Text
        style={{
          fontSize: 23,
          fontWeight: 'bold',
          color: '#004D40',
          marginHorizontal: 18,
          marginTop: 5,
          marginBottom: 12
        }}
      >
        Destinos destacados
      </Text>


      {/* TARJETAS */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingLeft: 18
        }}
      >

        {/* TARJETA 1 */}
        <Pressable
          onPress={() => setDestino('Laguna de la Cocha')}
          style={{
            width: 210,
            backgroundColor: 'white',
            borderRadius: 15,
            marginRight: 14,
            overflow: 'hidden',
            elevation: 3
          }}
        >

          <Image
            source={require('../../assets/images/cocha.jpg')}
            style={{
              width: '100%',
              height: 120
            }}
            resizeMode="cover"
          />

          <View
            style={{
              padding: 12
            }}
          >

            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#00695C'
              }}
            >
              Laguna de la Cocha
            </Text>

            <Text
              style={{
                color: '#78909C',
                marginTop: 4
              }}
            >
              Naturaleza y tranquilidad
            </Text>

          </View>

        </Pressable>


        {/* TARJETA 2 */}
        <Pressable
          onPress={() => setDestino('Santuario de Las Lajas')}
          style={{
            width: 210,
            backgroundColor: 'white',
            borderRadius: 15,
            marginRight: 18,
            overflow: 'hidden',
            elevation: 3
          }}
        >

          <Image
            source={require('../../assets/images/lajas.jpg')}
            style={{
              width: '100%',
              height: 120
            }}
            resizeMode="cover"
          />

          <View
            style={{
              padding: 12
            }}
          >

            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: '#00695C'
              }}
            >
              Santuario de Las Lajas
            </Text>

            <Text
              style={{
                color: '#78909C',
                marginTop: 4
              }}
            >
              Cultura y arquitectura
            </Text>

          </View>

        </Pressable>

      </ScrollView>


      {/* FORMULARIO */}
      <View
        style={{
          backgroundColor: 'white',
          margin: 18,
          marginTop: 25,
          padding: 20,
          borderRadius: 18,
          elevation: 3
        }}
      >

        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            color: '#004D40',
            marginBottom: 5
          }}
        >
          📋 Realiza tu reserva
        </Text>

        <Text
          style={{
            color: '#78909C',
            marginBottom: 18
          }}
        >
          Completa los datos de tu viaje
        </Text>


        {/* NOMBRE */}
        <Text
          style={{
            fontWeight: 'bold',
            color: '#455A64',
            marginBottom: 6
          }}
        >
          Nombre del turista
        </Text>

        <TextInput
          placeholder="Ej: Juan Pérez"
          value={nombre}
          onChangeText={setNombre}
          style={{
            backgroundColor: '#F5F7F7',
            padding: 13,
            marginBottom: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B2DFDB'
          }}
        />


        {/* DESTINO */}
        <Text
          style={{
            fontWeight: 'bold',
            color: '#455A64',
            marginBottom: 6
          }}
        >
          Destino turístico
        </Text>

        <TextInput
          placeholder="Ej: Laguna de la Cocha"
          value={destino}
          onChangeText={setDestino}
          style={{
            backgroundColor: '#F5F7F7',
            padding: 13,
            marginBottom: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B2DFDB'
          }}
        />


        {/* PERSONAS */}
        <Text
          style={{
            fontWeight: 'bold',
            color: '#455A64',
            marginBottom: 6
          }}
        >
          Cantidad de personas
        </Text>

        <TextInput
          placeholder="Ej: 4"
          value={personas}
          onChangeText={setPersonas}
          keyboardType="numeric"
          style={{
            backgroundColor: '#F5F7F7',
            padding: 13,
            marginBottom: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#B2DFDB'
          }}
        />


        {/* GUIA */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#E0F2F1',
            padding: 13,
            borderRadius: 10,
            marginBottom: 18
          }}
        >

          <View>

            <Text
              style={{
                fontWeight: 'bold',
                color: '#004D40'
              }}
            >
              ¿Desea guía turístico?
            </Text>

            <Text
              style={{
                color: '#78909C',
                marginTop: 3
              }}
            >
              Acompañamiento durante el recorrido
            </Text>

          </View>

          <Switch
            value={guia}
            onValueChange={setGuia}
            trackColor={{
              false: '#B0BEC5',
              true: '#80CBC4'
            }}
            thumbColor={
              guia ? '#00695C' : '#ECEFF1'
            }
          />

        </View>


        {/* BOTÓN */}
        <Pressable
          onPress={realizarReserva}
          style={{
            backgroundColor: '#00695C',
            padding: 16,
            borderRadius: 12,
            alignItems: 'center'
          }}
        >

          <Text
            style={{
              color: 'white',
              fontSize: 17,
              fontWeight: 'bold'
            }}
          >
            REALIZAR RESERVA
          </Text>

        </Pressable>


        {/* PROCESANDO */}
        {proceso && (
          <View
            style={{
              alignItems: 'center',
              marginTop: 18
            }}
          >

            <ActivityIndicator
              size="large"
              color="#00695C"
            />

            <Text
              style={{
                color: '#607D8B',
                marginTop: 8
              }}
            >
              Procesando reserva...
            </Text>

          </View>
        )}


        {/* RESULTADO */}
        {resultado !== '' && (

          <View
            style={{
              marginTop: 18,
              backgroundColor: '#E8F5E9',
              padding: 15,
              borderRadius: 12,
              borderLeftWidth: 5,
              borderLeftColor: '#2E7D32'
            }}
          >

            <Text
              style={{
                color: '#1B5E20',
                fontSize: 15,
                lineHeight: 23
              }}
            >
              {resultado}
            </Text>

          </View>

        )}

      </View>

    </ScrollView>
  );
}

