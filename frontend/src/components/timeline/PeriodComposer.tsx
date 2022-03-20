import { ComposerType } from '../../reducers/composersSlice';
import styled from 'styled-components';
import { showYear } from '../assets/utils';
import { useNavigate } from 'react-router-dom';

const StyledLi = styled.li`
  border-bottom: 1px solid rgb(100, 100, 100);
  padding: 5px 10px;
  flex: 1;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(240, 240, 240);

  &:first-of-type {
    border-top-left-radius: 10px;
  }

  &:last-of-type {
    border-bottom-left-radius: 10px;
    border-bottom: none;
  }
`

const StyledDetails = styled.div`
  display: flex;
  align-items: center;
`

const StyledImageContainer = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
  }
`

const StyledDates = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`

const Composer = ({ id, birth, name, portrait }:ComposerType) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/composer/${id}`)
  }

  return (
    <StyledLi onClick={handleClick}>
      <StyledDetails>
        <StyledImageContainer>
          <img src={portrait} alt="" />
        </StyledImageContainer>
        <span>
          {name}
        </span>
      </StyledDetails>
      <StyledDates>
        <span>b: {showYear(birth)}</span>
      </StyledDates>
    </StyledLi>
  )
}

export default Composer