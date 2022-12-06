import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'
import { CardStyle } from '../assets/style/Card'

export const Card = () => {
    return (
        <View style={CardStyle.card}>
            <Text style={CardStyle.cardText}>Card</Text>
        </View>
    )
}
