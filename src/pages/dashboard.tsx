import styled from 'styled-components'
import { Overview } from '../components/overview'
import { Sidenav } from '../components/sidenav'

const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
`

export function Dashboard() {
  return (
    <Container>
      <Sidenav />
      <Overview />
    </Container>
  )
}
