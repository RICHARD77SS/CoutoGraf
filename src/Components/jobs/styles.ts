import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:start;
  margin-top: 4rem;
  padding-bottom: 4rem;
`

export const Content = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:start;
  text-align: center;
  h2 {
    font-size: 2rem;
    color: #000;
    margin:  0rem 0 8rem 0;
  }
  button {
    width: 150px;
    height: 50px;
    border-radius: 50px;
    background: #FFD600;
    border: none;
    margin: 1rem;
    font-weight: 800;
    font-size: 1rem;
     
  }
  button:hover {
      background:#000;
    }
  a{
    padding: 1rem 2.5rem;
    color:#000;
    text-decoration: none;
   
  }
  a:hover {
      color:#fff;
    }
`
export const Galery = styled.div`
  width: 100%;
  height: auto;
  background: #000;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: start;
  justify-content:center;
`
export const Image = styled.div`
  width: 31.4%;
  height: 300px;
  background: #fff;
  display: flex;
  flex-direction: block;
  align-items: center;
  justify-content:center;
  @media(max-width: 768px){
    width: 48%;
  }
  img {
    width: 100%;
    height: 100%;
  }
`