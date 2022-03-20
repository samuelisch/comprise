import styled from 'styled-components'

import NavPeriod from './NavPeriod'

const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  background: rgb(240, 240, 240);
`

const StyledList = styled.ul`
  display: flex;
  overflow-x: scroll;
`

type PropTypes = {
  periods: string[]
}

const PeriodNavbar = ({periods}: PropTypes) => {
  const elements = periods.map((period, i) => (
    <NavPeriod 
      key={i}
      text={period}
    />
  ))

  return (
    <StyledContainer>
      <StyledList>
        {elements}
      </StyledList>
    </StyledContainer>
  )
}

export default PeriodNavbar