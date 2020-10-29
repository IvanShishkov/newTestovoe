import React from 'react'
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableWithoutFeedback,
    Text,
    ActivityIndicator,
} from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { setPersonProfile, getPersonProfile } from '../store/person/actions'

const MainScreen = ({ setPerson }) => {
    const navigation = useNavigation()

    const onPress = () => {
        navigation.navigate('Second')
    }

    const allPeople = useSelector((state) => state.people.allPeople)
    const loading = useSelector((state) => state.people.loading)

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>
                    {allPeople.map((ppl, index) => (
                        <TouchableWithoutFeedback
                            onPressOut={setPerson(index + 1)}
                            onPress={onPress}
                            key={ppl.name}
                        >
                            <Text style={styles.text}>{ppl.name}</Text>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = ({ people }) => ({
    people,
})

const mapDispatchToProps = (dispatch) => ({
    setPerson(id) {
        return () => {
            dispatch(setPersonProfile(id))
            dispatch(getPersonProfile(id))
        }
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginVertical: 10,
        fontSize: 20,
    },
})
