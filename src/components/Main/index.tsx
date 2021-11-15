import * as Styled from './styles'

const Main = ({
  title = 'React avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <Styled.Wrapper>
    <Styled.Logo src="../../../img/logo.svg" alt="Advanced React" />
    <Styled.Title>{title}</Styled.Title>
    <Styled.Description>{description}</Styled.Description>
    <Styled.Illustration
      src="../../../img/hero-illustration.svg"
      alt="Developer in front of the screen"
    />
  </Styled.Wrapper>
)

export default Main
