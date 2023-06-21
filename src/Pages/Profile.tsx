import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIdPokemon } from "../ExportFunctions/ExportFunctions"
import '../Css/Profile.css'

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
      <div>{pokemonData.name} #{getIdPokemon(pokemonData)}</div>
      <img src={!pokemonData.sprites ? "" : pokemonData['sprites']['front_default']} />
    </div>
  )
}
