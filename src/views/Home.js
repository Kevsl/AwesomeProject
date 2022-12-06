import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import { Card } from '../components/Card'
import { HomeStyle } from '../assets/style/Home'

const Home = () => {
    return (
        <View style={HomeStyle.container}>
            <Text>Home</Text>
            <Card />
        </View>
    )
}
export default Home
