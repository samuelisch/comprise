import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../ThemeContextWrapper";
import { listColor } from "../assets/utils";
import { StyledColorProps } from "../assets/types";
import { useAppSelector } from "../../reducers/hooks";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1720px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledElement = styled.li<StyledColorProps>`
  flex: 1;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 250px;
  max-width: 500px;
  height: 70px;
  background: ${(props) => listColor(props.period)};
  position: relative;
  box-shadow: 0px 0px 2px rgb(150, 150, 150);
  animation-duration: 0.5s;
  animation-name: slidein;
  transition: transform 0.2s;

  .workName {
    font-size: 1.5rem;
    color: rgb(240, 240, 240);
  }

  .workComposer {
    font-size: 1.3rem;
    color: rgb(240, 240, 240);
  }

  &:hover {
    cursor: pointer;
    opacity: 95%;
    transform: translateY(-5px) scale(103%);
  }

  @keyframes slidein {
    from {
      bottom: 100px;
      opacity: 0%;
    }

    to {
      bottom: 0px;
      opacity: 95%;
    }
  }
`;

const RandomWorks = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { recommendedWorks } = useAppSelector(
    (state) => state.recommendedWorks
  );

  const allRandomWorks = recommendedWorks.map((obj) => (
    <StyledElement
      theme={theme}
      key={obj.id}
      period={obj.composer.epoch}
      onClick={() => navigate(`/composer/${obj.composer.id}/${obj.id}/`)}
    >
      <h2 className="workName">{obj.title}</h2>
      <p className="workComposer">{obj.composer.complete_name}</p>
    </StyledElement>
  ));

  if (!recommendedWorks.length) {
    return null;
  }

  return (
    <>
      <h1>Reccomended Tracks</h1>
      <StyledList>{allRandomWorks}</StyledList>
    </>
  );
};

export default RandomWorks;
