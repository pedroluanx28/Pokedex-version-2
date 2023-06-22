import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIdPokemon, getNamePokemon } from "../ExportFunctions/ExportFunctions"
import PokemonStats from "../Components/PokemonStats"
import '../Css/Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Profile() {
  const [pokemonData, setPokemonData] = useState<any>([])
  const { id } = useParams()

  async function getSinglePokemon() {
    try {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => setPokemonData(res.data))
    } catch (err: any) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    getSinglePokemon()
  }, [])

  return (
    <div className="bodyProfile">
      <div>{getNamePokemon(pokemonData)} #{getIdPokemon(pokemonData)}</div>
      <img src={!pokemonData.sprites ? "" : pokemonData['sprites']['front_default']} />
      <img src={!pokemonData.sprites ? "" : pokemonData['sprites']['back_default']} />
        <PokemonStats Stats={pokemonData.stats} />
    </div>
  )
}
