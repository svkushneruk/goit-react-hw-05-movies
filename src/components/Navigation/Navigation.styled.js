import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNavigation = styled.nav`
  display: flex;
  align-items: center;
  box-shadow: 0 5px 5px teal;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  padding: 15px;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
