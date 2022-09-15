import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonFull, Specie } from '../interfaces/pokemonInterfaces';

interface props {
    url: string
}


export const useChargeImage=({url}:props)=>{
const[chargeContent,setChargeContent]=useState<PokemonFull >()

const charge=async()=>{
    const resp = await pokemonApi.get<Specie >(url)
   const url1= await pokemonApi.get<PokemonFull>(resp.data.varieties[0].pokemon.url)
   setChargeContent(url1.data)

}

   useEffect(()=>{
    charge()
   },[])



    return {chargeContent}
}