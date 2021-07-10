import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import NavLink from '../NavLink/NavLink';
import { navLinks } from './navigationData';

/**
 *Presentational Navbar Navigation Component
 *@function NavbarNavigation
 *@returns {JSX.Element} - Rendered list navigation links
 */
const NavbarNavigation = (): JSX.Element => {
  return (
    <StyledNavigation>
      <Container>
        <ul>
          {navLinks.map((link, id) => (
            <li key={id}>
              <NavLink href={'/hi'} linkText={link.section} />
            </li>
          ))}
        </ul>
      </Container>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  background: ${({ theme }) => theme.secondaryBg};
  padding: 1rem 0;
  ul {
    display: flex;
    justify-content: center;
  }
`;

export default NavbarNavigation;