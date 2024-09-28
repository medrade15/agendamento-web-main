import React from "react"
import styled from "styled-components"
import { Grid, Card as MaterialCard } from "@material-ui/core"
import { Content, H2 } from "ui"
import { SCHEDULE, RESERVATIONS } from "routes"
import { Link } from "react-router-dom"
import { BricksBackground } from "assets"
const Scheduling = () => {
  return (
    <MainContent>
      <Grid direction="column" container spacing={6}>
        <Grid item xs={12}>
          <MainTitle>Agendamento online</MainTitle>
        </Grid>
        <Grid item xs={12}>
          <Grid direction="row" container justifyContent="center" wrap="nowrap">
            <BigButton to={SCHEDULE}>Agendar</BigButton>
            <BigButton backgroundcolor="#34425a" to={RESERVATIONS}>
              Reservas
            </BigButton>
          </Grid>
        </Grid>
      </Grid>
    </MainContent>
  )
}

const BigButton = styled(Link)`
  align-items: center;
  background-color: ${({ theme, backgroundcolor }) =>
    backgroundcolor || theme.palette.primary.main};
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  height: 110px;
  justify-content: center;
  margin-right: 5px;
  text-decoration: none;
  text-transform: uppercase;
  width: 180px;
`

const MainContent = styled(Content)`
  align-content: space-around;
  padding-top: ${({ theme }) => theme.spacing(15)}px;
  background: url(${BricksBackground});
  background-position: center center;
  background-repeat: repeat;
  background-size: auto;

  @media (max-width: 600px) {
    padding-top: ${({ theme }) => theme.spacing(5)}px;
  }
`

const MainTitle = styled(H2)`

  color: rgb(52 66 90 / 85%);
  font-family: 'Comfortaa';
  font-size: 4.5rem;
  /* text-shadow: rgba(0, 0, 0, 0.4) 0px 1px 1px; */

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`

export default Scheduling
