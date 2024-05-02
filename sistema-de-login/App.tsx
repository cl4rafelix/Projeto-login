import { useState } from 'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'

export default function App() {
  const [emailField, setEmailField]=useState<string>('')
  const [passwordField, setPasswordField]=useState<string>('')
  const [botaoEntrar, setBotaoEntrar] = useState('false')
  const [inicial, setInicial] = useState('true') 
  const [resetPage, setResetPage] = useState('false')
  const [restoredPage, setRestoredPage] = useState('false')
  const [signUpPage, setSignUpPage] = useState('false')

   const handleForgotButton = () => {
    setResetPage('true'); 
    setInicial('false')  
  };
   const handleLoginButton = () => {  
    if(emailField == '' && passwordField != ''){
      alert('Você não digitou o email')
    } else if (emailField != '' && passwordField == ''){ 
      alert('Você não digitou a senha')
    }else if(emailField == '' && passwordField == ''){
      alert('Você não digitou o Email e a senha') 
    }  else {
      alert('Seus dados estão certo')
    }
  };    

  //Função do Cadastre-se  
  const handleSignUpButton = () => {
    setInicial('false') 
    setSignUpPage('true')
     
  };
  const handlePasswordReset = () => { 
      setRestoredPage('true')
      setResetPage('false');
  } 
  return (
      <ScrollView style={styles.scrollview}>
      {inicial == 'true' &&
      <>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./assets/estetica.jpg')}/>
          <Text style={styles.h1}>Agendamentos de Horários</Text>
          <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
          
          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.inputField} placeholder='Digite seu email'
            style={styles.inputField}
            placeholder='Digite seu email'
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapilize='none'
            keyboardType='email-adress'
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput 
              style={styles.inputField} 
              placeholder='**********' 
              placeholderTextColor='#d1d1d1'
              value={passwordField}
              onChangeText={t => setPasswordField(t)}
              autoCapitalize='none'
              secureTextEntry
            />
          </View> 

          <View style={styles.aditionals}>
            <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
              <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
            <Text style={styles.buttonText}>login</Text>
          </TouchableOpacity>

          <View style={styles.signUpArea}>
            <Text style={styles.signUpText}>Não tem conta?</Text>
            <TouchableOpacity onPress={handleSignUpButton}>
              <Text style={styles.signUpBtnText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerArea}>
            <Text style={styles.footerText}>Criado por Clara Félix</Text>
          </View>
        </View>
        </>
    }
    {resetPage == 'true' &&
      <>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./assets/estetica.jpg')}/>
          <Text style={styles.h1}>Recuperação da senha</Text>
          <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
          
          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.inputField} placeholder='Digite seu email'
            style={styles.inputField}
            placeholder='Digite seu email'
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapilize='none'
            keyboardType='email-adress'
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput 
              style={styles.inputField} 
              placeholder='Digite sua nova senha' 
              placeholderTextColor='#d1d1d1'
              value={passwordField}
              onChangeText={t => setPasswordField(t)}
              autoCapitalize='none'
              secureTextEntry
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Redefinir senha</Text>
        </TouchableOpacity>
      </>
    }
    {signUpPage == 'true' &&
      <>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('./assets/estetica.jpg')}/>
          <Text style={styles.h1}>Cadastro de novos usuários</Text>
          <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
          
          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.inputField} placeholder='Digite seu email que deseja se cadastrar'
            style={styles.inputField}
            placeholder='Digite seu email'
            placeholderTextColor='#d1d1d1'
            value={emailField}
            onChangeText={t => setEmailField(t)}
            autoCapilize='none'
            keyboardType='email-adress'
            />
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput 
              style={styles.inputField} 
              placeholder='Digite sua senha que deseja se cadastrar' 
              placeholderTextColor='#d1d1d1'
              value={passwordField}
              onChangeText={t => setPasswordField(t)}
              autoCapitalize='none'
              secureTextEntry
            />
            
          </View>
        </View>
          <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
      </>
    }
      </ScrollView>

  )
}