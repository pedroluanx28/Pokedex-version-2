import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getIdPokemon, getNamePokemon, getPokemonColorByType } from "../ExportFunctions/ExportFunctions"
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
  if (pokemonData.types == undefined) {
    return ' '
  } else {
    var type1 = pokemonData.types[0].type.name
  }

  return (
    <div className="bodyProfile" style={{ backgroundColor: `${getPokemonColorByType(type1)}` }}>
      <div className="containerProfile">
        <div>{getNamePokemon(pokemonData)} #{getIdPokemon(pokemonData)}</div>
        <img style={{width: '300px'}} src={!pokemonData.sprites ? "" : pokemonData['sprites']['front_default']} />
        {!pokemonData.stats ? ' ' : pokemonData.stats.map((data: any, key: any) => {
          return (
            <PokemonStats
              key={key}
              Hp={data['base_stat']}
              Name={data['stat']['name']}
            />
          )
        })}
      </div>
    </div>
  )
}
