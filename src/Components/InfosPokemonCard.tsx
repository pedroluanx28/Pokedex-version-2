import { getAbilitiesPokemon, getWeightAndHeight } from "../ExportFunctions/ExportFunctions"
import { Container, Row, Col } from 'react-bootstrap'
import height from '../Images/height.png'
import weight from '../Images/weight.png'

export default function InfosPokemonCard({ Data }: any) {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="4" md='4' sm='4' xs='4'>
                        <div>
                            <p className='heightAndWeightTitle'>Altura</p>
                            <p className="heightAndWeight">{getWeightAndHeight(Data.height) + "m"}</p>
                        </div>
                    </Col>
                    <Col lg="4" md='4' sm='4' xs='4'>
                        <div>
                            <p className="heightAndWeightTitle">Peso</p>
                            <p className="heightAndWeight">{getWeightAndHeight(Data.weight) + "kg"}</p>
                        </div>
                    </Col>
                    <Col lg="4" md='4' sm='4' xs='4'>
                        <div>
                            <p className="heightAndWeightTitle">Habilidades</p>
                            <p className="heightAndWeight">{getAbilitiesPokemon(Data)}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
