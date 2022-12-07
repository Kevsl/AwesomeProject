import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { LoginStyle } from '../assets/style/LoginStyle'
import React, { useEffect, useState } from 'react'
import { checkEmail, checkPassword } from '../utils/regex'
import { getData, storeData } from '../utils/localStorage'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('@gmail.com')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if (checkEmail(email) === true && checkPassword(password) === true) {
            storeData('isConnected', 'true').then((res) => {
                navigation.navigate('Home')
            })
        } else {
            alert('login rejected')
        }
    }

    useEffect(() => {
        const token = getData('isConnected').then((res) => {
            if (res && res === 'true') {
                navigation.navigate('Home')
            }
        })
    })

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
