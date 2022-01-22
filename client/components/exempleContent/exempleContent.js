import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ContentContainer = styled.div`
  height: max-content;
  width: 900px;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentTitle = styled.h2`
  font-size: 1.6rem;
  text-decoration: underline;
  text-align: center;
`;

const ContentCode = styled.div`
  width: 100%;
`;

const ContentResultList = styled.div`
  width: 800px;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultMainTitle = styled.p`
  text-align: center;
`;

const ContentResultData = styled.div`
  width: max-content;
  height: max-content;
  margin: 2rem 0;
`;

export function ExempleContainer({ children }) {
  return <ContentContainer>{children}</ContentContainer>;
}

export function Title({ children }) {
  return <ContentTitle>{children}</ContentTitle>;
}

export function Code({ children }) {
  return (
    <ContentCode>
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: "break-word", whiteSpace: "break-spaces" },
        }}
        language="php"
        style={atomOneDarkReasonable}
        showLineNumbers={true}
        wrapLines={true}
      >
        {children}
      </SyntaxHighlighter>
    </ContentCode>
  );
}

export function ResultList({ children }) {
  return <ContentResultList>{children}</ContentResultList>;
}

export function ResultContent({ children }) {
  return <ContentResultData>{children}</ContentResultData>;
}

export function ResultTitle({ children }) {
  return <ResultMainTitle>{children}</ResultMainTitle>;
}
