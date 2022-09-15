import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Chain, ChainEvolutionDetails, } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useChargeImage } from '../hooks/useChargeImage';
import { useChargeImage2 } from '../hooks/useChargeImage2';
import { useChargeImage3 } from '../hooks/useChargeImage3';


interface props {
    evolutionChain: ChainEvolutionDetails
}

const ChainEvolution = ({ evolutionChain }: props) => {
    const PrimeraEtapa :string|undefined=evolutionChain.chain.species.name||undefined
    const url = evolutionChain.chain.species.url
    const { chargeContent } = useChargeImage({ url })
    const lv =evolutionChain.chain.evolves_to[0].evolution_details[0].trigger.name||undefined
    const segundaEtapa: string | undefined = evolutionChain.chain.evolves_to[0]?.species.name || undefined
    const url2 = evolutionChain.chain.evolves_to[0]?.species?.url || undefined
    const { chargeContent2 } = useChargeImage2({ url2 })
    const terceraEtapa: string | undefined = evolutionChain.chain.evolves_to[0]?.evolves_to[0]?.species.name || undefined
    const url3 = evolutionChain.chain.evolves_to[0]?.evolves_to[0]?.species.url !== undefined ? evolutionChain.chain.evolves_to[0]?.evolves_to[0].species.url : undefined
    const { chargeContent3 } = useChargeImage3({ url3 })
    //
    //hay que ver la forma de evaluar pokemones con dos cadenas evolutivas y basado en eso se hara el render
    return (
        <View style={{ backgroundColor: "red" }}>
            <Text style={{ backgroundColor: "blue" }} >EvoLution Chain</Text>
            <View style={{ flexDirection: "row" }}>
                {PrimeraEtapa && chargeContent && <View style={{ backgroundColor: "yellow", flex: 2 }}>
                    <Text>{PrimeraEtapa} </Text>
                   {lv!==undefined&& <Text>{lv} </Text>}
                    <FadeInImage
                        uri={chargeContent.sprites.front_default}
                        style={styles.pokemonImage}
                    />
                </View>}
                {segundaEtapa !== undefined && chargeContent2 !== undefined &&
                    <View style={{ backgroundColor: "orange", flex: 2 }}>
                        <Text>{segundaEtapa} </Text>
                        {chargeContent2 && <FadeInImage
                            uri={chargeContent2.sprites.front_default}
                            style={styles.pokemonImage}
                        />}
                        </View>}

                {terceraEtapa !== undefined && chargeContent3 !== undefined &&
                    <View style={{ backgroundColor: "purple", flex: 2 }}>
                        <Text>{terceraEtapa} </Text>
                        {terceraEtapa && chargeContent3 && <FadeInImage
                            uri={chargeContent3.sprites.front_default}
                            style={styles.pokemonImage}
                        />}
                        </View>}
            </View>

        </View>
    )
}

export default ChainEvolution

const styles = StyleSheet.create({
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'relative',
        right: -8,
        bottom: -5,

    },
})