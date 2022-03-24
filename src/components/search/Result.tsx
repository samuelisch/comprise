import { useContext } from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { useAppDispatch } from '../../reducers/hooks'
import { addViewedWorks } from '../../reducers/viewedWorkSlice'
import { ThemeContext } from '../../ThemeContextWrapper'
import { ResultType } from './ResultList'

const StyledElement = styled.li`
  width: 100%;
  padding: 5px 8px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  transition: background .1s;
  background: ${props => props.theme.background};
  transition: background .1s;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: ${props => props.theme.hoverColor};
    cursor: pointer;
  }
`

const StyledTitle = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.color}
`

const StyledDescription = styled.div`
  font-size: 1.1rem;
  color: ${props => props.theme.color};
`

type PropsType = {
  result: ResultType
}

const Result = ({ result }: PropsType) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const resultClickHandler = () => {
    console.log(result.work)
    dispatch(addViewedWorks({workComposer: result.composer, viewedWork: result.work}));
    navigate(`/composer/${result.composer.id}/${result.work.id}`)
  }

  return (
    <StyledElement onClick={resultClickHandler} theme={theme}>
      <StyledTitle theme={theme}>{result.work.title}</StyledTitle>
      <StyledDescription theme={theme}>
        <span>{result.composer.complete_name},</span>
        &nbsp;
        <span><i>{result.work.genre}</i></span>
      </StyledDescription>
    </StyledElement>
  )
}

export default Result