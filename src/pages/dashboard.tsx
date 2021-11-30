import { useEffect, useState, MouseEvent } from 'react'
import { Container, Content } from './dashboard.styled'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { Header } from '../components/header'
import { Customers } from '../components/customers'
import { Overview } from '../components/overview'
import { Plans } from '../components/plans'
import { Products } from '../components/products'
import { Sales } from '../components/sales'
import { Settings } from '../components/settings'
import { Stores } from '../components/stores'
import { Sidenav } from '../components/sidenav'
import client from '../graphql/client'
import { tokens } from '../graphql/tokens'
import GET_CONSOLIDATED_ORDERS from '../graphql/queries/getConsolidatedOrders'
import { sidenavData } from '../components/sidenav/sidenav-data'

export function Dashboard() {
  const location = useLocation()
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(sidenavData.find((s) => s.path === location.pathname)?.title ?? '')
    getConsolidatedOrders()
  }, [location])

  const getConsolidatedOrders = async () => {
    client.setHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': tokens.store_1
    })
    const data = await client.request(GET_CONSOLIDATED_ORDERS)
    console.log(data)
  }

  const handleClick = (title: string) => (event: MouseEvent) => {
    console.log(event)
    setTitle(title)
  }

  return (
    <Container>
      <Sidenav onClickedItem={handleClick} />
      <Content>
        <Header title={title} />
        <Routes>
          <Route path="/" element={<Navigate replace to="/overview" />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/plans-goals" element={<Plans />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/exit" element={<Navigate replace to="/overview" />} />
        </Routes>
      </Content>
    </Container>
  )
}
