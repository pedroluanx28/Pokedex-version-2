import { ProgressBar } from "react-bootstrap"
import { getNameStatspokemon, getStatsPokemon } from "../ExportFunctions/ExportFunctions"
import '../Css/PokemonStats.css'

interface PropsStats {
    Hp: number,
    Name: string,
    Key?: any
}

export default function PokemonStats({ Hp, Name, Key }: PropsStats) {
    return (
        <div key={Key} className="pokemonStats">
            <p className="statPokemonName">{getStatsPokemon(Hp)}</p>
            <ProgressBar max={255} now={Hp} className="progressBar" />
            <p className="statPokemonName">{getNameStatspokemon(Name)}</p>
        </div>
    )
}