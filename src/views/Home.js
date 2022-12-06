import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import { Card } from '../components/Card'
import { HomeStyle } from '../assets/style/Home'
import picture1 from '../assets/images/user1.jpg'
import picture2 from '../assets/images/user2.jpg'

const users = [
    {
        userId: 1,
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'ullam et saepe reiciendis voluptatem adipisci',
    },
    {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'ullam et saepe reiciendis voluptatem adipisci',
    },
    {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'ullam et saepe reiciendis voluptatem adipisci',
    },
    {
        userId: 1,
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci',
    },
    {
        userId: 1,
        id: 5,
        title: 'nesciunt quas odio',
        body: 'ullam et saepe reiciendis voluptatem adipisci',
    },
]

const Home = ({ navigation }) => {
    return (
        <View style={HomeStyle.container}>
            <Text>Home</Text>
            <Card title="Michael" image={picture1} />
            <Card title="Julie" image={picture2} />

            {users.map((user) => {
                return <Card title={user.title} image={picture1} />
            })}
        </View>
    )
}
export default Home
