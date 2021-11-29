import * as S from './sidenav.styled'
import { Logo } from '../../ui/logo'
import { SidebarData } from './sidebar-data'

export function Sidenav() {
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
          {SidebarData.map((item, index) => (
            <>
              <S.NavItem key={index} to={item.path}>
                <S.NavLink>
                  {item.icon}
                  <S.Text>{item.title}</S.Text>
                </S.NavLink>
              </S.NavItem>
              {divider(item.path)}
            </>
          ))}
        </S.NavList>
      </S.Nav>
    </S.Wrapper>
  )
}
