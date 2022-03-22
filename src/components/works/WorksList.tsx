import { useEffect, useState } from "react";
import { ComposerWorkType } from "../../reducers/dumpSlice";
import { useAppSelector } from "../../reducers/hooks";
import Work, { WorkType } from "./Work";
import styled from "styled-components";

type PropsType = {
  composerName: string
}

const StyledList = styled.ul`
  background: rgb(220, 220, 220);
  border-top: 1px solid rgb(150, 150, 150);
  border-bottom: 1px solid rgb(150, 150, 150);
`

const WorksList = ({ composerName }: PropsType) => {
  const { dumpList } = useAppSelector((state) => state.dump);
  const [composerWorks, setComposerWorks] = useState<ComposerWorkType[] | []>([]);

  useEffect(() => {
    if (composerName) {
      const selectedComposer = dumpList.find(composer => composer.complete_name === composerName)
      if (selectedComposer) {
        setComposerWorks(selectedComposer.works)
      }
    }
  }, [composerName, dumpList])

  const listOfWorks = composerWorks.map((work: WorkType, i) => (
    <Work 
      key={i}
      genre={work.genre}
      subtitle={work.subtitle}
      title={work.title}
    />
  ))

  if (!composerWorks) {
    return <h1>Loading ...</h1>
  }

  return (
    <StyledList>
      {listOfWorks}
    </StyledList>
  )
}

export default WorksList