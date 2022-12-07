import { Text, View, Image } from 'react-native'
import { CardStyle } from '../assets/style/Card'

export const MovieCard = (props) => {
    return (
        <View style={CardStyle.card} key={props.id}>
            <Image source={props.image} style={CardStyle.cardImage} />
            <Text style={CardStyle.cardText}>{props.title}</Text>
        </View>
    )
}
