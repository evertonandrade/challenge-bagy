import styled, { css } from 'styled-components'

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
