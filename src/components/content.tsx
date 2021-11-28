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
      <S.WrapperTables>
        <S.Table>
          <S.TableHead>
            <S.TextTotal>Total de compras</S.TextTotal>
            <S.TextValue>Valor geral: 13.250,00</S.TextValue>
          </S.TableHead>
          <S.TableBody>
            <S.TableRow>
              <S.TableData>
                <S.Span weight="bold">Estilo Pri</S.Span>
              </S.TableData>
              <S.TableData>250 compras</S.TableData>
              <S.TableData>R$ 29,90</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>
                <S.Span weight="bold">Estilo Pri</S.Span>
              </S.TableData>
              <S.TableData>250 compras</S.TableData>
              <S.TableData>R$ 29,90</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>
                <S.Span weight="bold">Estilo Pri</S.Span>
              </S.TableData>
              <S.TableData>250 compras</S.TableData>
              <S.TableData>R$ 29,90</S.TableData>
            </S.TableRow>
          </S.TableBody>
        </S.Table>
        <S.Table>
          <S.TableHead>
            <S.TableRow>
              <S.TableHeadData>Produto</S.TableHeadData>
              <S.TableHeadData>Loja</S.TableHeadData>
              <S.TableHeadData>Preço</S.TableHeadData>
              <S.TableHeadData>Data</S.TableHeadData>
            </S.TableRow>
          </S.TableHead>
          <S.TableBody>
            <S.TableRow>
              <S.TableData>Brincos #23</S.TableData>
              <S.TableData>Estilo Pri</S.TableData>
              <S.TableData>
                <S.Span background="blue">R$ 29,90</S.Span>
              </S.TableData>
              <S.TableData>
                <S.Span background="yellow">17/07/20</S.Span>
              </S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>Brincos #23</S.TableData>
              <S.TableData>Estilo Pri</S.TableData>
              <S.TableData>
                <S.Span background="blue">R$ 29,90</S.Span>
              </S.TableData>
              <S.TableData>
                <S.Span background="yellow">17/07/20</S.Span>
              </S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>Brincos #23</S.TableData>
              <S.TableData>Estilo Pri</S.TableData>
              <S.TableData>
                <S.Span background="blue">R$ 29,90</S.Span>
              </S.TableData>
              <S.TableData>
                <S.Span background="yellow">17/07/20</S.Span>
              </S.TableData>
            </S.TableRow>
          </S.TableBody>
        </S.Table>
      </S.WrapperTables>
    </S.Wrapper>
  )
}
