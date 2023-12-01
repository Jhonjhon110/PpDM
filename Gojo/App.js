import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
        name='Login' 
        component={Login} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name='Senha' 
        component={Senha} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name='Cadastro' 
        component={Cadastro} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name='TabNavigation' 
        component={TabNavigation} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen 
        name='Config' 
        component={Config} 
        options={{
          headerShown: false
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigation () {
  const Tab = createBottomTabNavigator();
  return(
  <Tab.Navigator>
    <Tab.Screen 
    name='Home' 
    component={Home}
  options={{
    tabBarIcon: () => (
      <MaterialCommunityIcons name="home" color='black' size={26} />
    ),
    headerShown: false
  }}/>
  <Tab.Screen 
    name='Perfil' 
    component={Perfil}
    options={{
      tabBarIcon: () => (
        <MaterialCommunityIcons name="account-box" color='black' size={26} />
      ),
      headerShown: false
    }}/>
    <Tab.Screen 
    name='Pesquisar' 
    component={Pesquisar}
    options={{
      tabBarIcon: () => (
        <MaterialCommunityIcons name="magnify" color='black' size={26} />
      ),
      headerShown: false
    }}/>
    <Tab.Screen 
    name='Mensagem' 
    component={Mensagem}
    options={{
      tabBarIcon: () => (
        <MaterialCommunityIcons name="cog-outline" color='black' size={26} />
      ),
      headerShown: false
    }}/>
  </Tab.Navigator>
  )
}

function Login() {
  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>Entrar</Text>
      <Text>Email</Text>
      <TextInput
      value={email}
      onChangeText={(e) => setEmail(e)}
      keyboardType='email-address'
      placeholder='Digite seu email:'
      placeholderTextColor='black'/>
      <Text>Senha</Text>
      <TextInput
      value={senha}
      onChangeText={(e) => setSenha(e)}
      placeholder='Digite sua senha:'
      secureTextEntry={true}
      placeholderTextColor='black'/>
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigation')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('Senha')}>
        <Text>Esqueci a senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text>Cadastra-se</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

function Senha() {
  const [senha, setSenha] = useState('')
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
    <TouchableOpacity>
      <Text onPress={(() => navigation.navigate('Login'))}>Voltar</Text>
    </TouchableOpacity>
    <TextInput
    value={senha}
    onChangeText={(e) => setSenha(e)}
    placeholder='Digite seu email'
    placeholderTextColor='black'/>
    </View>

  )
}

function Cadastro () {
  const navigation = useNavigation()
  const [ nome, setNome ] = useState('')
  const [ sobrenome, setSobrenome ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ senhaRepetida, setSenhaRepetida ] = useState('')
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <View>
      <Text>Nome</Text>
      <TextInput 
      value={nome}
      onChangeText={(e) => setNome(e)}
      placeholder='Digite o nome:'
      placeholderTextColor='black'/>
      <Text>Sobrenome</Text>
      <TextInput 
      value={sobrenome}
      onChangeText={(e) => setSobrenome(e)}
      placeholder='Digite o sobrenome:'
      placeholderTextColor='black'/>
      <Text>Email</Text>
      <TextInput
      value={email}
      onChangeText={(e) => setEmail(e)} 
      keyboardType='email-address'
      placeholder='Digite seu email:'
      placeholderTextColor='black'/>
      <Text>Senha</Text>
      <TextInput 
      value={senha}
      onChangeText={(e) => setSenha(e)}
      placeholder='Repita sua senha:'
      placeholderTextColor='black'
      secureTextEntry={true}/>
      <Text>Repita a senha</Text>
      <TextInput
      value={senhaRepetida}
      onChangeText={(e) => setSenhaRepetida(e)}
      placeholder='Repita sua senha:'
      placeholderTextColor='black'
      secureTextEntry={true}
      />
      </View>
    </View>
  )
}

function Home () {
  return(
    <View style={styles.container}>
      <Text>Tela de Home</Text>
    </View>
  )
}

function Pesquisar () {
  const [pesq, setPesq] = useState('')
  return(
    <View style={styles.container}>
      <Text>Pesquisar</Text>
      <TextInput 
      value={pesq}
      onChangeText={(e) => setPesq(e)}
      placeholder='Pesquisar'
      placeholderTextColor='black'/>
    </View>
  )
}

function Perfil () {
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
      <Text>Perfil</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Config')}>
        <Text>settings</Text>
      </TouchableOpacity>
    </View>
  )
}

function Mensagem () {
  return(
    <View style={styles.container}>
      <Text>Chat</Text>
    </View>
  )
}

function Config () {
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
      <Text>Connfig</Text>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('TabNavigation')}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
