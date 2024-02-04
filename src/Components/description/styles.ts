import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding-bottom: 16rem;
  background-image: url('https://fv5-3.failiem.lv/thumb_show.php?i=pgah448h4c&view&v=1');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 0 60%;
`

export const Content = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    color: #FFD600;
    margin-top: 4rem
  }
  p{
    font-size: 1rem;
    color: #fff;
    margin: 4rem
  }
`
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap:4rem;
  
`
export const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content:start;
  
  @media (max-width: 768px){
    align-items: center;
    justify-content:center;
    :nth-child(1){
    border-radius: 10rem;
    justify-content: center;
  }
  }

`
export const Box2 = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  :nth-child(1){
    border-radius: 10rem;
    justify-content: center;
  }
  @media (max-width:768px){
    width: 100%;
  }
`
export const Box3 = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content:end;
  :nth-child(1){
    border-radius: 10rem 0rem 0rem 10rem;
    justify-content: end;
  }
  :nth-child(2){
     border-radius:  150px 0 0 150px ;
  }
  @media (max-width: 768px){
    align-items: center;
    justify-content:center;
    :nth-child(1){
    border-radius: 10rem;
    justify-content: center;
  }
  :nth-child(2){
     border-radius:  150px 150px 150px 150px ;
  }
  }
`
export const Flex = styled.div`
  width: 70%;
  height: auto;
  background: #FFD600;
  display: flex;
  flex-wrap:wrap;
  flex-direction: row;
  align-items: center;
  justify-content:start;
  gap: 1rem;
  padding: 3rem 0 3rem 0rem;
  border-radius: 0 10rem 10rem 0;
  box-shadow: 5px 5px 15px 10px rgba(0,0,0,0.5);
`
export const Image = styled.div`
  width: 300px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-image: url('https://fv5-3.failiem.lv/thumb_show.php?i=8f8kd2jm3v&view&v=1');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0 150px 150px 0;
`
export const Desc = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  text-align: center;
  h2{
    color:#000;
  }
  p{
    color: #000;
    font-size: 1.25rem;
  }

`