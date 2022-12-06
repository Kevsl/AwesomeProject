import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { LoginStyle } from '../assets/style/LoginStyle'
import React, { useState } from 'react'
import { checkEmail, checkPassword } from '../utils/regex'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('@gmail.com')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if (checkEmail(email) === true && checkPassword(password) === true) {
            alert('login OK')
        } else {
            alert('login rejected')
        }
    }
    function goRegister() {
        navigation.navigate('Register')
    }

    return (
        <View style={LoginStyle.container}>
            <Text style={LoginStyle.text}>Login Page</Text>
            <View style={LoginStyle.inputContainer}>
                <TextInput
                    style={LoginStyle.inputEmail}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="email"
                />
                <TextInput
                    style={LoginStyle.inputPassword}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry
                />
                <TouchableOpacity
                    style={LoginStyle.loginButton}
                    onPress={handleLogin}
                >
                    <Text style={LoginStyle.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={LoginStyle.registerButton}
                    onPress={goRegister}
                >
                    <Text style={LoginStyle.registerButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login
