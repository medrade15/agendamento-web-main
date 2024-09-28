import React, { useState } from 'react'
import styled from 'styled-components'
import { AccountCircle } from '@material-ui/icons'
import {
  AppBar,
  IconButton,
  Toolbar as MaterialToobar,
  Menu,
  MenuItem,
  Typography
} from '@material-ui/core'
// import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'
import { useAuth } from 'hooks'
import { Link } from 'react-router-dom'

const Header = () => {
  const { userInfo, logout } = useAuth()
  const [anchorElement, setAnchorElement] = useState(null)

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }

  const handleClose = () => {
    setAnchorElement(null)
  }
  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          {/* <LinkLogo to={HOME}>
            <Logo />
          </LinkLogo> */}
        </LogoContainer>

        <Typography color='inherit'>
          Usuario {/* Olá {userInfo.user.firstName} */}
        </Typography>
        <IconButton color='inherit' onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>

        <Menu
          open={Boolean(anchorElement)}
          onClose={handleClose}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

const Toolbar = styled(MaterialToobar)`
  &&{
  margin: 0 auto;
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  width: 100%;
  }
`

// flex-grow crescer o maximo que puder
const LogoContainer = styled.div`
  flex-grow: 1;
`

const LinkLogo = styled(Link)`
  display: inline-block
`

/* const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }
` */

export default Header
