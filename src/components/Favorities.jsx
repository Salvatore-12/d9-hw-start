import { useSelector } from "react-redux"
import { Col, Container, ListGroup, Row } from "react-bootstrap"

const Favorities=()=>{
    const FavoritList=useSelector((state)=>state.list.content)
return(<Container>
    <Row>
    <Col>
    <ListGroup>
     {
          FavoritList.map((fav,i) =>(
        <ListGroup.Item key={i} >{fav}</ListGroup.Item>
        ))
     }   
    </ListGroup>
    </Col>
    </Row>
 </Container>)
}

export default Favorities