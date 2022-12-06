import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import { LoginStyle } from '../assets/style/LoginStyle'
import React, { useState } from 'react'
import { checkEmail, checkPassword } from '../utils/regex'

const Register = ({ navigation }) => {
    const [email, setEmail] = useState('@gmail.com')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleRegister() {
        if (
            checkEmail(email) === true &&
            checkPassword(password) === true &&
            confirmPassword === confirmPassword
        ) {
            alert('you are registered')
        } else {
            alert(password, confirmPassword)
        }

        alert(confirmPassword)
    }
    function goLogin() {
        navigation.navigate('Login')
    }

    return (
        <View style={LoginStyle.container}>
            <Text style={LoginStyle.text}>Register Page</Text>
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
                />
                <TextInput
                    style={LoginStyle.inputPassword}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    placeholder="Confirm your password"
                />
                <TouchableOpacity
                    style={LoginStyle.loginButton}
                    onPress={handleRegister}
                >
                    <Text style={LoginStyle.loginButtonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={LoginStyle.loginButton}
                    onPress={goLogin}
                >
                    <Text style={LoginStyle.loginButtonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Register
