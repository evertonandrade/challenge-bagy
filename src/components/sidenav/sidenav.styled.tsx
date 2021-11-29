import { NavLink as N } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.lightBlack};
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
  `}
`

export const Name = styled.div`
  ${() => css`
    margin-top: 1.4rem;
    padding: 2rem 4rem;
    font-size: 1.8rem;
  `}
`

export const Nav = styled.nav`
  ${() => css`
    font-size: 1.8em;
  `}
`

export const NavList = styled.ul`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `}
`

export const NavItem = styled(N)`
  ${({ theme }) => css`
    cursor: pointer;
    text-decoration: none;
    &.active > ${NavLink} {
      color: ${theme.colors.white};
      background: linear-gradient(to right, #463746, transparent);
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        background: ${theme.colors.pink};
        width: 0.25rem;
        border-top-right-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
      }
    }
  `}
`

export const NavLink = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: 1.8rem 2.4rem;
    position: relative;
    transition: all 0.3s ease;

    &:nth-child(n) {
      color: ${theme.colors.gray};
    }

    &:hover,
    &:focus {
      color: ${theme.colors.pink};
    }
  `}
`

export const Divider = styled.hr`
  ${() => css`
    margin: 4rem 0rem;
    border: none;
  `}
`

export const Text = styled.p`
  margin-left: 2rem;
`
