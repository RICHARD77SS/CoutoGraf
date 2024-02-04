import { Container, Content, Wrapper, Box, Box2, Box3, Flex, Image, Desc } from './styles';

const Description = () => {
  return (
    <Container>
      <Content>
        <h2>A CoutoGraf</h2>
        <p>Somo uma empresa de comunicação visual que esta a mais de 20 anos no mercado, visando sempre a satisfação do cliente atravez de um trabalho impecavel e detalhado.</p>
      </Content>
      <Wrapper>


        <Box>
          <Flex>
            <Image>
            </Image>
            <Desc>
              <h2>Como trabalhamos...</h2>
              <br />
              <p>Ao entrar em contato com nossa equipe, um de nossos projetistas ira desenvolver um layout para seu estabelecimento de acordo com seu negocio visando atrair a atenção de seus clientes, com um aspecto inovador e exuberante afim de expandir seu negocio.</p>
              <br />

            </Desc>
          </Flex>
        </Box>
        <Box2>
          <Flex>
            <Desc>
              <p>
                Apos a aprovação do layout pelo cliente é marcada uma visita tecnica para planejar a insatalação e em seguida comecamos a produção da fachada em nosso galpão, a pós a produção a fachada é levada ao local, e entao instalada.
              </p>
            </Desc>
          </Flex>
        </Box2>
        <Box3>
          <Flex>
            <Desc>
              <p>Nosso trabalho vai desde fachadas convencionais com lona impressa ate trabalho em ACM com letras3D em acrilicos com leds embutidos, que trazem uma aparencia unica para seu estabelecimento.</p>
            </Desc>
            <Image>
            </Image>
          </Flex>
        </Box3>
      </Wrapper>
    </Container>
  )
}

export default Description