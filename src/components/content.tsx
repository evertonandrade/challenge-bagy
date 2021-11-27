import * as S from './content.styled'
import { SearchIcon, NotificationIcon, DividerIcon } from '../ui/icons'
import AvatarExample from '../assets/images/avatar-example.png'

export function Content() {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>Visão Geral</S.Title>
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
      <S.Cards>
        <S.Card>
          <S.LabelText>Total de Lojas</S.LabelText>
          <S.LabelData>7213</S.LabelData>
        </S.Card>
        <S.Card>
          <S.LabelText>Faturamento Total</S.LabelText>
          <S.LabelData>100.000,00</S.LabelData>
        </S.Card>
        <S.Card>
          <S.LabelText>Loja destaque</S.LabelText>
          <S.LabelData>Estilo Pri</S.LabelData>
        </S.Card>
        <S.Card>
          <S.LabelText>Meta Mensal</S.LabelText>
          <S.LabelData>110.000,00</S.LabelData>
        </S.Card>
      </S.Cards>
    </S.Wrapper>
  )
}
