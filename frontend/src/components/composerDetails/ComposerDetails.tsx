import styled from "styled-components";
import { ComposerType } from "../../reducers/composersSlice";
import { listColor, showYear } from "../assets/utils";

type StyledProps = {
  period: string
}

const StyledContainer = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .portraitContainer {
    width: 100px;
    height: 100px;
    border: 5px solid ${props => listColor(props.period)};
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .dates {
    margin-top: 10px;
    font-size: 1.5rem;
    color: grey;
  }

  .period {
    font-size: 1.7rem;
  }
`

type PropsType = {
  composer: ComposerType
}

const ComposerDetails = ({ composer }: PropsType) => {
  const { birth, death, portrait, epoch } = composer;

  return (
    <StyledContainer period={epoch}>
        <div className="portraitContainer">
          <img src={portrait} alt="composer portrait" />
        </div>
        <div className="dates">
          <span>{showYear(birth)} - {death ? showYear(death) : ""}</span>
        </div>
        <div className="period">
          <span>{epoch} Composer</span>
        </div>
      </StyledContainer>
  )
}

export default ComposerDetails