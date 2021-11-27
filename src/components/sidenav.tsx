import * as S from './sidenav.styled'
import { Logo } from '../ui/logo'
import {
  ChartPieIcon,
  TicketIcon,
  LightBulbIcon,
  UsersIcon,
  UserTieIcon,
  BookIcon,
  SettingsIcon,
  MedalIcon
} from '../ui/icons'

export function Sidenav() {
  return (
    <S.Wrapper>
      <S.Nav>
        <S.Name>
          <Logo />
        </S.Name>
        <S.NavList>
          <S.NavItem className="active">
            <S.NavLink>
              <ChartPieIcon />
              <S.Text>Visão Geral</S.Text>
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink>
              <TicketIcon />
              <S.Text>Lojas</S.Text>
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink>
              <LightBulbIcon />
              <S.Text>Vendas</S.Text>
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink>
              <UsersIcon />
              <S.Text>Clientes</S.Text>
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink>
              <UserTieIcon />
              <S.Text>Produtos</S.Text>
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink>
              <BookIcon />
              <S.Text>Planos e Metas</S.Text>
            </S.NavLink>
          </S.NavItem>
          <S.Divider />
          <S.NavItem>
            <S.NavLink>
              <SettingsIcon />
              <S.Text>Configurações</S.Text>
            </S.NavLink>
          </S.NavItem>
          <S.NavItem>
            <S.NavLink>
              <MedalIcon />
              <S.Text>Sair</S.Text>
            </S.NavLink>
          </S.NavItem>
        </S.NavList>
      </S.Nav>
    </S.Wrapper>
  )
}
