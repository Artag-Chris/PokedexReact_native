import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonFull, Specie } from '../interfaces/pokemonInterfaces';

interface props {
    url3: string|undefined
}


export const useChargeImage3=({url3}:props)=>{
const[chargeContent3,setChargeContent3]=useState<PokemonFull >()

const charge=async()=>{
    if(url3!==undefined){
    const resp = await pokemonApi.get<Specie >(url3)
   const url1= await pokemonApi.get<PokemonFull>(resp.data.varieties[0].pokemon.url)
   setChargeContent3(url1.data)
}
else{
    return null
}
}

   useEffect(()=>{
    charge()
   },[])



    return {chargeContent3}
}