import * as S from './header.styled'
import { SearchIcon, NotificationIcon, DividerIcon } from '../../ui/icons'
import AvatarExample from '../../assets/images/avatar-example.png'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      <S.Panel>
        <S.Tray>
          <SearchIcon />
          <NotificationIcon />
          <DividerIcon />
        </S.Tray>
        <S.Profile>
          <S.Text>Matheus Borges</S.Text>
          <S.Avatar src={AvatarExample} />
        </S.Profile>
      </S.Panel>
    </S.Header>
  )
}
