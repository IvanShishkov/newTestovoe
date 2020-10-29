import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { connect } from 'react-redux'

const SecondScreen = ({ profile, home, ships }) => {
    return (
        <View style={styles.container}>
            {profile.name && <Text style={styles.text}>{profile.name}</Text>}
            <View style={styles.wrapper}>
                {profile.gender && (
                    <Text style={styles.text}>Пол: {profile.gender}</Text>
                )}
                {profile.height && (
                    <Text style={styles.text}>Рост: {profile.height}см</Text>
                )}
                {profile.mass && (
                    <Text style={styles.text}>Вес: {profile.mass}кг</Text>
                )}
                {profile.birth_year && (
                    <Text style={styles.text}>
                        Дата рождения: {profile.birth_year}
                    </Text>
                )}
                {home.name && (
                    <Text style={styles.text}>Дом - планета: {home.name}</Text>
                )}
                {profile.hair_color && (
                    <Text style={styles.text}>
                        Цвет волос: {profile.hair_color}
                    </Text>
                )}
                {profile.skin_color && (
                    <Text style={styles.text}>
                        Цвет кожи: {profile.skin_color}
                    </Text>
                )}
                {profile.eye_color && (
                    <Text style={styles.text}>
                        Цвет глаз: {profile.eye_color}
                    </Text>
                )}
                <Text style={{ ...styles.text, borderBottomWidth: 2 }}>
                    Корабли:{' '}
                </Text>
                {ships.length <= 0 ? (
                    <Text>Кораблей нет</Text>
                ) : (
                    ships.map((ships) => {
                        return (
                            <Text style={styles.text} key={ships.name}>
                                {ships.name}
                            </Text>
                        )
                    })
                )}
            </View>
        </View>
    )
}

const mapStateToProps = ({ person: { profile, home, ships } }) => ({
    profile,
    home,
    ships,
})

export default connect(mapStateToProps)(SecondScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        marginVertical: 5,
    },
    wrapper: { marginTop: 20 },
})
