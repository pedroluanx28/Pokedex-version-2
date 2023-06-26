import { Container, Row, Col } from 'react-bootstrap'
import '../Css/PokemonStats.css'
import { getNameStatspokemon, getPokemonColorByType } from '../ExportFunctions/ExportFunctions'

interface PropsStats {
    Hp: number,
    Name: string,
    Key?: any,
    Color: string
}

export default function PokemonStats({ Hp, Name, Key, Color }: PropsStats) {
    return (
        <>
            <div key={Key} className='statContainer' style={{backgroundColor: `${getPokemonColorByType(Color)}`}}>
                <p className='nameStat'>{getNameStatspokemon(Name)}</p>
                <p className='baseStat'>{Hp}</p>
            </div>
        </>
    )
}