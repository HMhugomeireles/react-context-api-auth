import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  position: relative;
  left: 50%;
  top: 35vh;
  margin-left: -40%;
  margin-top: -50px;
  width: 80%;
  min-height: 100px;
  background: #f5f5f5;
  padding: 10px;

  font-family: sans-serif;

  p {
    margin-top: 5px;
    line-height: 20px;
  }
`

const About = () => (
  <Div>
    <h1>About Page</h1>
    <p>This is the About page.</p>
    <p>
      O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
      O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, 
      quando uma misturou os caracteres de um texto para criar um espécime de livro.
      Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, 
      mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset,
      que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação 
      como o Aldus PageMaker que incluem versões do Lorem Ipsum.
    </p>
  </Div>
)

export default About;