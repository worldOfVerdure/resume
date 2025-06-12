import { styled } from "styled-components";

export default function ProjectGlance({ title, tech, github }) {
  const techString = tech.join(", ");
  return (
    <ProjectGlanceContainer>
      <h3>{title}</h3>
      |
      <p>{techString}</p>
      |
      <a href={github} target="_blank" >GitHub</a>
    </ProjectGlanceContainer>
  );
}

const ProjectGlanceContainer = styled.div`
  align-items: center;
  display: flex;
  gap: .5rem;
`;
