import { styled } from "styled-components";

export default function Experience() {
  return (
    <ExperienceContainer>
      <h2>Experience</h2>
      <hr />
      <h3>Projects</h3>
    </ExperienceContainer>
  );
}

const ExperienceContainer = styled.section`
  margin: 0 auto;
  width: 90%;

  & hr {
    background-color: #000;
    border: 0;
    height: 1px;
  }
`;
