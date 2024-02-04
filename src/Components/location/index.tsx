import MyComponent from '../Mapa';
import { Container, Content, Border} from './styles';

const Location = () => {
  return (
    <Container>
        <h2>Nossa localização</h2>
      <Content >
        <MyComponent></MyComponent>
        <h2>Av. Srg. José Siqueira - Jardim Paraiso, 265</h2>
      </Content>
    </Container>
  )
}

export default Location