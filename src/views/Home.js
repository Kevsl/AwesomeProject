import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native'
import { Card } from '../components/Card'
import { HomeStyle } from '../assets/style/Home'
import picture1 from '../assets/images/user1.jpg'
import picture2 from '../assets/images/user2.jpg'
import React, { useEffect, useState } from 'react'
import { getUsers } from '../service/users'

const Home = ({ navigation }) => {
    const [users, setUsers] = useState()

    useEffect(() => {
        getUsers().then((response) => {
            console.log(response)
            setUsers(response)
        })
    }, [])

    return (
        <SafeAreaView style={HomeStyle.container}>
            <Text>Home</Text>
            <ScrollView style={HomeStyle.scrollView}>
                <Card title="Michael" image={picture1} />
                <Card title="Julie" image={picture2} />
            </ScrollView>

            {users &&
                users.length > 0 &&
                users.map((user) => {
                    return (
                        <Card
                            title={user.name}
                            image={picture1}
                            key={user.id}
                        />
                    )
                })}
        </SafeAreaView>
    )
}
export default Home
