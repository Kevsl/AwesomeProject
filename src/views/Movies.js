import {
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TextInput,
} from 'react-native'
import { HomeStyle } from '../assets/style/Home'
import React, { useState } from 'react'
import { getMovies } from '../service/movies'
import { MovieCard } from '../components/MovieCard'
import { ActivityIndicator } from 'react-native-web'

const Movies = ({ navigation }) => {
    const [movies, setMovies] = useState()
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function fetchMovies() {
        setIsLoading(true)
        getMovies(input).then((res) => {
            setMovies(res)
            setIsLoading(false)
        })
    }

    return (
        <SafeAreaView style={HomeStyle.container}>
            <Text style={HomeStyle.title}>Home</Text>
            <View style={HomeStyle.inputContainer}>
                <TextInput
                    style={HomeStyle.inputSearch}
                    onChangeText={setInput}
                    value={input}
                    placeholder="Looking for a movie ?"
                />
                <TouchableOpacity
                    onPress={fetchMovies}
                    style={HomeStyle.searchButton}
                >
                    <Text>Fetch Movies</Text>
                </TouchableOpacity>
            </View>
            {isLoading && (
                <ActivityIndicator
                    size="large"
                    color="#14213D"
                    style={HomeStyle.loader}
                />
            )}
            <ScrollView>
                <View style={HomeStyle.scrollView}>
                    {movies &&
                        movies.length > 0 &&
                        movies.map((movie) => {
                            return (
                                <MovieCard
                                    title={movie.Title}
                                    image={movie.Poster}
                                    key={movie.imdbID}
                                />
                            )
                        })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Movies
