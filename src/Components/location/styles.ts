import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 800px;
  background: #FFD600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  h2 {
    margin: 2rem;
  }
`

export const Content = styled.div`
  width: 90%;
  height: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:center;
  text-align: center;
  @media (max-width: 768px){
    flex-direction: column-reverse;
  }

`
export const Border = styled.div`
  width: 100%;
  height: 20px;
  background: #FFD600;
  margin-bottom: 2rem;
`