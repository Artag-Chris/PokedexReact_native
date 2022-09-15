import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonFull, Specie } from '../interfaces/pokemonInterfaces';

interface props {
    url2: string|undefined
}


export const useChargeImage2=({url2}:props)=>{
const[chargeContent2,setChargeContent2]=useState<PokemonFull >()

const charge=async()=>{
    if(url2!==undefined){
    const resp = await pokemonApi.get<Specie >(url2)
   const url1= await pokemonApi.get<PokemonFull>(resp.data.varieties[0].pokemon.url)
   setChargeContent2(url1.data)
}
else{
    return null
}
}

   useEffect(()=>{
    charge()
   },[])



    return {chargeContent2}
}