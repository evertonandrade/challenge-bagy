import * as S from './overview.styled'
import * as format from '../../utils/format'
import { LineChart } from '../line-chart'

export function Overview() {
  return (
    <S.Wrapper>
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
      <S.WrapperTrends>
        <S.WrapperChart>
          <S.Title>Total de faturamento mensal</S.Title>
          <S.Text>JULHO 2020</S.Text>
          <S.Indicators>
            <S.Span>Este mês</S.Span>
            <S.Span>Mês passado</S.Span>
          </S.Indicators>
          <LineChart />
        </S.WrapperChart>
        <S.AdditionalInfos>
          <S.Info>
            <S.LabelText>Loja</S.LabelText>
            <S.LabelData>Estilo</S.LabelData>
          </S.Info>
          <S.Info>
            <S.LabelText>Mês</S.LabelText>
            <S.LabelData>Julho</S.LabelData>
          </S.Info>
          <S.Info>
            <S.LabelText>Ano</S.LabelText>
            <S.LabelData>2020</S.LabelData>
          </S.Info>
          <S.Info>
            <S.LabelText>Total de Faturamento</S.LabelText>
            <S.LabelData>{format.currency(450000)}</S.LabelData>
          </S.Info>
          <S.Info>
            <S.LabelText>Análise Comparativa</S.LabelText>
            <S.LabelData>Positivo</S.LabelData>
          </S.Info>
        </S.AdditionalInfos>
      </S.WrapperTrends>
      <S.WrapperTables>
        <S.Table>
          <S.WrapperTableHead>
            <S.TextTotal>Total de compras</S.TextTotal>
            <S.TextValue>Valor geral: 13.250,00</S.TextValue>
          </S.WrapperTableHead>
          <S.TableBody>
            <S.TableRow>
              <S.TableData>
                <S.Span weight="bold">Estilo Pri</S.Span>
              </S.TableData>
              <S.TableData>250 compras</S.TableData>
              <S.TableData>{format.currency(29.9)}</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>
                <S.Span weight="bold">Vilma Calçados</S.Span>
              </S.TableData>
              <S.TableData>187 compras</S.TableData>
              <S.TableData>{format.currency(1005)}</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>
                <S.Span weight="bold">Mary Langeire</S.Span>
              </S.TableData>
              <S.TableData>124 compras</S.TableData>
              <S.TableData>{format.currency(914)}</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>
                <S.Span weight="bold">Loja Belíssima</S.Span>
              </S.TableData>
              <S.TableData>89 compras</S.TableData>
              <S.TableData>{format.currency(281)}</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>
                <S.Span weight="bold">Estilo Pri</S.Span>
              </S.TableData>
              <S.TableData>250 compras</S.TableData>
              <S.TableData>{format.currency(29.9)}</S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>
                <S.Span weight="bold">Estilo Pri</S.Span>
              </S.TableData>
              <S.TableData>250 compras</S.TableData>
              <S.TableData>{format.currency(29.9)}</S.TableData>
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
                <S.Span background="blue">{format.currency(29.9)}</S.Span>
              </S.TableData>
              <S.TableData>
                <S.Span background="yellow">
                  {format.date(new Date('07-17-2020'))}
                </S.Span>
              </S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>Sandália #54</S.TableData>
              <S.TableData>Vilma Calçados</S.TableData>
              <S.TableData>
                <S.Span background="blue">{format.currency(89.9)}</S.Span>
              </S.TableData>
              <S.TableData>
                <S.Span background="yellow">
                  {format.date(new Date('07-17-2020'))}
                </S.Span>
              </S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>Conjunto #95</S.TableData>
              <S.TableData>Mary Lingerie</S.TableData>
              <S.TableData>
                <S.Span background="blue">{format.currency(49.9)}</S.Span>
              </S.TableData>
              <S.TableData>
                <S.Span background="yellow">
                  {format.date(new Date('07-17-2020'))}
                </S.Span>
              </S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>Conjunto #95</S.TableData>
              <S.TableData>Mary Lingerie</S.TableData>
              <S.TableData>
                <S.Span background="blue">{format.currency(49.9)}</S.Span>
              </S.TableData>
              <S.TableData>
                <S.Span background="yellow">
                  {format.date(new Date('07-17-2020'))}
                </S.Span>
              </S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>Conjunto #95</S.TableData>
              <S.TableData>Mary Lingerie</S.TableData>
              <S.TableData>
                <S.Span background="blue">{format.currency(49.9)}</S.Span>
              </S.TableData>
              <S.TableData>
                <S.Span background="yellow">
                  {format.date(new Date('07-17-2020'))}
                </S.Span>
              </S.TableData>
            </S.TableRow>
            <S.TableRow>
              <S.TableData>Conjunto #95</S.TableData>
              <S.TableData>Mary Lingerie</S.TableData>
              <S.TableData>
                <S.Span background="blue">{format.currency(49.9)}</S.Span>
              </S.TableData>
              <S.TableData>
                <S.Span background="yellow">
                  {format.date(new Date('07-17-2020'))}
                </S.Span>
              </S.TableData>
            </S.TableRow>
          </S.TableBody>
        </S.Table>
      </S.WrapperTables>
    </S.Wrapper>
  )
}
