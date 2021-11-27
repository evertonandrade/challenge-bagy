import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${() => css`
    flex: 4;
    margin: 0.8rem 2rem;
  `}
`

export const Header = styled.header`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

export const Title = styled.h1`
  ${() => css`
    font-size: 2.4rem;
  `}
`
export const Panel = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    cursor: pointer;
  `}
`

export const Tray = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    display: flex;
    align-items: center;
    gap: 2.4rem;
  `}
`

export const Profile = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 2rem;
  `}
`

export const Text = styled.p`
  ${() => css`
    font-size: 1.6rem;
  `}
`

export const Avatar = styled.img`
  ${({ theme }) => css`
    border-radius: 50%;
    border: 0.25rem solid ${theme.colors.lightGray};
    object-fit: cover;
    width: 4rem;
    height: 4rem;
  `}
`

export const Cards = styled.div`
  ${() => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
  `}
`

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    width: 24rem;
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

export const AdditionalInfos = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`

export const FullGraph = styled.div`
  ${() => css`
    display: flex;
  `}
`
