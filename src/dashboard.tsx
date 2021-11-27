import styled from 'styled-components'
import { Content } from './components/content'
import { Sidenav } from './components/sidenav'

const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
`

export function Dashboard() {
  return (
    <Container>
      <Sidenav />
      <Content />
    </Container>
  )
}
