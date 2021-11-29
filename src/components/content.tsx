import * as S from './content.styled'
import { SearchIcon, NotificationIcon, DividerIcon } from '../ui/icons'
import AvatarExample from '../assets/images/avatar-example.png'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
)

const data = {
  labels: Array.from({ length: 22 }, (_, i) => `${i + 1}`),
  datasets: [
    {
      // label: 'Este mês',
      data: Array.from({ length: 22 }, (_, i) => i * Math.random() * 5),
      fill: false,
      backgroundColor: '#FC3C8D',
      borderColor: '#FC3C8D'
    },
    {
      // label: 'Mês passado',
      data: Array.from({ length: 22 }, (_, i) => i * Math.random() * 5),
      fill: false,
      borderColor: '#A4A6B3'
    }
  ]
}

export const options = {
  responsive: true,
  plugins: {
    legend: {}
  }
}

export function Content() {
  const currency = (n: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(n)
  }
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
      <S.WrapperTrends>
        <S.WrapperChart>
          <S.Title>Total de faturamento mensal</S.Title>
          <S.Text>JULHO 2020</S.Text>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <S.Span>Este mês</S.Span>
            <S.Span>Mês passado</S.Span>
          </div>
          <Line data={data} options={options} />
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
            <S.LabelData>{currency(450000)}</S.LabelData>
          </S.Info>
          <S.Info>
            <S.LabelText>Análise Comparativa</S.LabelText>
            <S.LabelData>Positivo</S.LabelData>
          </S.Info>
        </S.AdditionalInfos>
      </S.WrapperTrends>
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
