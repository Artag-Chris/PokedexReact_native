import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import {Specie, ChainEvolutionDetails } from '../interfaces/pokemonInterfaces';



interface props {
    url: string
}

export const useEvolutionChain = ({ url }: props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [specieData, setSpecieData] = useState<Specie>()
    const [evolutionChain, setEvolutionChain] = useState<ChainEvolutionDetails>()

    const getSpecie = async () => {
        const resp = await pokemonApi.get<Specie>(url)
        setSpecieData(resp.data)
        getEvolutionChain(resp.data.evolution_chain.url)
    }
    const getEvolutionChain=async(url:string)=>{
    const resp =await pokemonApi.get<ChainEvolutionDetails>(url)
    setEvolutionChain(resp.data)
    }
    

    useEffect(() => {
        getSpecie()
    }, [])
    
  
    return { specieData ,evolutionChain}

} 