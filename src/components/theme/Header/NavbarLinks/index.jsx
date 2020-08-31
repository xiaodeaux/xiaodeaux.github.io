import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { ThemeContext } from 'providers/ThemeProvider'

import { Wrapper } from './styles';
import ThemedText from '../../../common/ThemedText'

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <ThemedText theme={theme}>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#projects">Projects</AnchorLink>
        <AnchorLink href="#contact">Contact</AnchorLink>
        <ToggleTheme />
      </ThemedText>
    </Wrapper>
  )
}

export default NavbarLinks;
