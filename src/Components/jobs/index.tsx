import ReactPlayer from 'react-player';
import { Container, Content, Galery, Image } from './styles';

const Jobs = () => {
  return (
    <Container>
      <Content>
        <h2>Alguns de nossos trabalhos</h2>
        <Galery>
          <Image>
            <img src='https://fv5-3.failiem.lv/thumb_show.php?i=jdu8vgrvpz&view&v=1' alt='' />
          </Image>
          <Image>
            <img src='https://fv5-3.failiem.lv/thumb_show.php?i=wz9fyk8tjz&view&v=1' alt='' />
          </Image>
          <Image>
            <img src='https://fv5-3.failiem.lv/thumb_show.php?i=t7hhh3f6ap&view&v=1' alt='' />
          </Image>
          <Image>
            <img src='https://fv5-3.failiem.lv/thumb_show.php?i=gz7x2jssrw&view&v=1' alt='' />
          </Image>
          <Image>
            <img src='https://fv5-3.failiem.lv/thumb_show.php?i=xu95xjwuau&view&v=1' alt='' />
          </Image>
          <Image>
            <img src='https://fv5-3.failiem.lv/thumb_show.php?i=t7arq2r8ts&view&v=1' alt='' />
          </Image>
        </Galery>
        <button title='button' ><a target='_blank' rel='noopener' href='https://www.instagram.com/coutograf/'>Ver mais</a></button>
      </Content>
    </Container>
  )
}

export default Jobs