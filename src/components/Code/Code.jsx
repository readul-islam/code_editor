import React, { useContext } from "react";
import Editor from "../Editor";
import { Box, styled } from "@mui/material";
import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;

const Code = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  console.log(html);
  return (
    <Container>
      <Editor bg="#FF3C41" icon="/" heading="HTML" value={html}  onChange={setHtml}/>
      <Editor bg="#0EBEFF" icon="*" heading="CSS"  value={css}  onChange={setCss} />
      <Editor bg="#FCD000" icon="()" heading="JS"  value={js}  onChange={setJs} />
    </Container>
  );
};

export default Code;
