import Projects from "./Projects.jsx";
import { styled } from "styled-components";

export default function Experience() {
  return (
    <ExperienceContainer>
      <h2>PROJECTS</h2>
      <hr />
      <Projects />
    </ExperienceContainer>
  );
}

const ExperienceContainer = styled.main`
  margin: 0 auto;
  width: 90%;

  & h2 {
    margin: 1.6rem 0 0 0;
  }

  & hr {
    background-color: #000;
    border: 0;
    height: .1rem;
    margin: .4rem 0 0 0;
  }
`;
