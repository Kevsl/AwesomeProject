import { Text, View, Image } from 'react-native'
import { CardStyle } from '../assets/style/Card'
import picture1 from '../assets/images/user1.jpg'

export const Card = () => {
    return (
        <View style={CardStyle.card}>
            <Image source={picture1} style={CardStyle.cardImage} />
            <Text style={CardStyle.cardText}>Card</Text>
        </View>
    )
}
