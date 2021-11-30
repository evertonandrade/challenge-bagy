import { MouseEvent } from 'react'
import * as S from './sidenav.styled'
import { Logo } from '../../ui/logo'
import { sidenavData } from './sidenav-data'
import { Fragment } from 'react'

type SidenavProps = {
  onClickedItem: (title: string) => (event: MouseEvent) => void
}

export function Sidenav({ onClickedItem }: SidenavProps) {
  const divider = (path: string) => {
    return path === '/plans-goals' ? <S.Divider /> : null
  }

  return (
    <S.Wrapper>
      <S.Nav>
        <S.Name>
          <Logo />
        </S.Name>
        <S.NavList>
          {sidenavData.map((item, index) => (
            <Fragment key={index}>
              <S.NavItem to={item.path} onClick={onClickedItem(item.title)}>
                <S.NavLink>
                  {item.icon}
                  <S.Text>{item.title}</S.Text>
                </S.NavLink>
              </S.NavItem>
              {divider(item.path)}
            </Fragment>
          ))}
        </S.NavList>
      </S.Nav>
    </S.Wrapper>
  )
}
