import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${() => css``}
`

export const Title = styled.h1`
  ${() => css`
    font-size: 2.4rem;
  `}
`

export const Text = styled.p`
  ${() => css`
    font-size: 1.6rem;
  `}
`

export const Cards = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    gap: 2rem;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    min-width: 24rem;
    height: 12rem;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      border: 1px solid ${theme.colors.pink};

      ${LabelText}, ${LabelData} {
        color: ${theme.colors.pink};
      }
    }
  `}
`
export const LabelText = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    transition: all 0.3s ease;
    color: ${theme.colors.gray};
  `}
`

export const LabelData = styled.p`
  ${({ theme }) => css`
    font-size: 3.6rem;
    font-weight: bold;
    transition: all 0.3s ease;
    color: ${theme.colors.black};
  `}
`

export const WrapperTrends = styled.div`
  ${({ theme }) => css`
    display: flex;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: 0.8rem;
    margin-top: 2rem;
  `}
`
export const WrapperChart = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 2rem;

    ${Title} {
      font-size: 2rem;
      margin: 0rem 0rem 1rem 0rem;
    }

    ${Text} {
      color: ${theme.colors.gray};
      font-weight: bold;
    }

    ${Span} {
      font-size: 1.6rem;
      color: ${theme.colors.gray};
      display: flex;
      align-items: center;
      gap: 1rem;

      &:nth-child(1) {
        margin-right: 2rem;
      }

      &:nth-child(1)::before {
        content: '';
        display: block;
        width: 3rem;
        height: 0.4rem;
        border-radius: 0.8rem;
        background: ${theme.colors.blue};
      }

      &:nth-child(2)::before {
        content: '';
        display: block;
        width: 3rem;
        height: 0.4rem;
        border-radius: 0.8rem;
        background: ${theme.colors.gray};
      }
    }
  `}
`

export const AdditionalInfos = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;

    ${LabelText} {
      font-size: 1.8rem;
      margin-bottom: 0.8rem;
    }

    ${LabelData} {
      font-size: 3.2rem;
    }
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.6rem 0.8rem;
    width: 32rem;
    height: 100%;
    border-left: 1px solid ${theme.colors.lightGray};
    border-bottom: 1px solid ${theme.colors.lightGray};
    &:last-child {
      border-bottom: 0;
    }
  `}
`

export const WrapperTables = styled.div`
  ${() => css`
    display: flex;
    margin-top: 2rem;
    gap: 2rem;
  `}
`

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.lightGray};
    border-spacing: 0;
    border-radius: 0.8rem;
  `}
`

export const TableHead = styled.thead`
  ${() => css`
    table-layout: fixed;
    display: table;
    width: calc(100% - 1em);
    margin: 2rem 0rem;
  `}
`

export const TableBody = styled.tbody`
  ${() => css`
    display: block;
    max-height: 26rem;
    overflow: auto;

    ${TableRow} {
      table-layout: fixed;
      display: table;
      width: 100%;
    }

    &-::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 5px solid #fff;
    }
  `}
`

export const TableRow = styled.tr`
  ${({ theme }) => css`
    text-align: center;
    border-bottom: 1px solid ${theme.colors.lightGray};

    &:last-child {
      border-bottom: 0;
    }
  `}
`

export const TableHeadData = styled.th`
  ${() => css`
    font-size: 2.4rem;
  `}
`

export const TableData = styled.td`
  ${({ theme }) => css`
    padding: 2rem 1rem;
    font-size: 1.6rem;
    color: ${theme.colors.gray};
  `}
`
export const Span = styled.span<{
  color?: string
  background?: string
  weight?: string
}>`
  ${({ theme, color, background, weight }) => css`
    background: ${background ? theme.colors[background] : 'none'};
    color: ${background ? theme.colors.white : theme.colors[color ?? 'black']};
    font-weight: ${weight ?? 'normal'};
    padding: 0.8rem;
    border-radius: 0.8rem;
  `}
`

export const TextTotal = styled(Text)`
  ${() => css`
    font-size: 2.2rem;
    font-weight: bold;
    margin: 0rem 2rem;
  `}
`

export const TextValue = styled(Text)`
  ${({ theme }) => css`
    font-weight: bold;
    color: ${theme.colors.blue};
    margin: 1rem 2rem;
  `}
`
