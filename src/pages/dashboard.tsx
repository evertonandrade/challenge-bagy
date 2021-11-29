import styled from 'styled-components'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Customers } from '../components/customers'
import { Overview } from '../components/overview'
import { Plans } from '../components/plans'
import { Products } from '../components/products'
import { Sales } from '../components/sales'
import { Settings } from '../components/settings'
import { Shops } from '../components/shops'
import { Sidenav } from '../components/sidenav'

export function Dashboard() {
  return (
    <Container>
      <BrowserRouter>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Navigate replace to="/overview" />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/plans-goals" element={<Plans />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/exit" element={<Navigate replace to="/overview" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
`
