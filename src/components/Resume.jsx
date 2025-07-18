// import Experience from "./Experience/Experience.jsx";
import ResumeHeader from "./ResumeHeader/ResumeHeader.jsx";
import { styled } from "styled-components";

export default function Resume() {
  return (
    <ResumePage >
      <ResumeHeader />
      <Experience />
    </ResumePage>
  );
}


const ResumePage = styled.div`
  border: .2rem solid #000;
  height: 11in;
  margin: 0 auto;
  width: 8.5in;

  & h1 {
    margin: 0;
  }
`;
