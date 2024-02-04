import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`

export const Box = styled.div`
  width: 80%;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:start;
  text-align: center;
  img {
    width: 100px;
    height:100px;
  }
  a {
    color:#fff;
    font-size: 1.5rem;
    
  }
  a:hover {
      color:  #FFD600;
    }
`
export const Border = styled.div`
  width: 100%;
  height: 40px;
  background: #FFF;
  margin-bottom: 2rem;
`