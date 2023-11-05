import { getWeightAndHeight } from "../ExportFunctions/ExportFunctions"

export default function InfosPokemonCard({ Data, Color }: any) {
    return (
        <>
            <div className='statContainer' style={{
                backgroundColor: 'transparent',
                border: `2px solid ${Color}`,
            }}>
                <p className='nameStat' style={{ color: `${Color}` }}>Altura</p>
                <p className='baseStat'>{getWeightAndHeight(Data.height) + 'm'}</p>
            </div>

            <div className='statContainer' style={{ backgroundColor: 'transparent', border: `2px solid ${Color}` }}>
                <p className='nameStat' style={{ color: `${Color}` }}>Peso</p>
                <p className='baseStat'>{getWeightAndHeight(Data.weight) + 'kg'}</p>
            </div>
        </>
    )
}
