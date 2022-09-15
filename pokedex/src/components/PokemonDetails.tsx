import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull, Type } from '../interfaces/pokemonInterfaces';
import ChainEvolution from './ChainEvolution';
import { FadeInImage } from './FadeInImage';
import { useEvolutionChain } from '../hooks/useEvolutionChain';


interface Props {
    pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {
    const url=pokemon.species.url
    const{specieData,evolutionChain}=useEvolutionChain({url})
    
    
    const color = (nombre: string) => {
        switch (nombre) {
            case "grass":
                return "green"
                break;
            case "poison":
                return "purple"
                break;
            case "fire":
                return "red"
                break
            case "flying":
                return "#389AE1"
                break
            case "water":
                return "blue"
                break
            case "bug":
                return "#84F65C"
                break
            case "electric":
                return "yellow"
                break
            case "ground":
                return "#94AF26"
                break
            case "fairy":
                return "pink"
                break
            case "fighting":
                return "#AC2D44"
                break
            case "psychic":
                return "#B129BD"
                break
            case "rock":
                return "#717452"
                break
            case "steel":
                return "#7E7E78"
                break
            case "ghost":
                return "#977BE5"
                break
            case "dragon":
                return "#5B28ED"
                break
            default:
                return "gray"
        }
    }



    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}>
            <View style={{
                ...styles.container,
                marginTop: 370
            }}>
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }) => (
                            <View style={{
                                borderRadius: 10, width: 100, margin: 10,
                                backgroundColor: `${color(type.name)}`
                            }}>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        color: "white",
                                        alignSelf: "center"
                                    }}
                                    key={type.name}>
                                    {type.name.toLocaleUpperCase()}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        {evolutionChain&&<ChainEvolution evolutionChain={evolutionChain} />}
            {/* Types */}
            <View style={styles.container}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                style={{ alignContent:"center" }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />

                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>


            {/* Habilidades */}
            <View style={styles.container}>
                <Text style={styles.title}>Habilidades base</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={ability.name}
                            >
                                {ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Habilidades */}
            <View style={styles.container}>
                <Text style={styles.title}>Movimientos</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={move.name}
                            >
                                {move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>


            {/* Stats */}
            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>
                <View>
                    {
                        pokemon.stats.map((stat, i) => (
                            <View
                                key={stat.stat.name + i}
                                style={{ flexDirection: 'row' }}
                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150
                                    }}
                                    key={stat.stat.name}
                                >
                                    {stat.stat.name}
                                </Text>

                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {stat.base_stat}
                                </Text>
                            </View>
                        ))
                    }
                </View>


                {/* Sprite final */}
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center'
                }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>


            </View>


        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 100,
        height: 100
    }
});