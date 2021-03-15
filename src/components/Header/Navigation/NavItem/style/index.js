import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const NavSubItemWrap = styled.div`
  overflow: hidden;
  position: absolute;
  display: none;
  left: 0;
  height: 0;
  width: 300px;
  margin-left: -90px;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
`;

const NavSubItemLink = styled(Link)`
  transition: 0.12s;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  }
  &:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.accentColor};
  }
`;

const NavItemLink = styled(Link)`
  transition: 0.12s;
  font-size: 20px;
  height: 35px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
`;

const NavItemWrap = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 50px;
  height: 35px;
  width: 120px;

  &:hover {
    ${NavSubItemWrap} {
      display: block;
      ${props =>
        props.subItemCount &&
        css`
          animation: ${`slideTopToBottom${props.subItemCount}`};
          animation-duration: 1s;
          animation-fill-mode: forwards;
        `}
    }
    ${NavItemLink} {
      border-bottom: 3px solid
        ${({ theme }) => theme.colors.accentColor || '#000'};
    }
  }
  ${props =>
    props.subItemCount &&
    css`
      @keyframes slideTopToBottom${props.subItemCount} {
        from {
          height: 0px;
        }

        to {
          height: ${`${props.subItemCount * 52 + 4}px` || 'auto'};
        }
      }
    `}
`;

export { NavSubItemWrap };
export { NavSubItemLink };
export { NavItemLink };
export { NavItemWrap };
export default { NavSubItemWrap, NavSubItemLink, NavItemLink, NavItemWrap };
