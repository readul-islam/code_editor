import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";

const Result = () => {
  const [output, setOutput] = useState("");
  const { html, js, css } = useContext(DataContext);

  const result = ` <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>

    `;

  useEffect(() => {
    setTimeout(() => {
      setOutput(result);
    }, 1000);
  }, [html, js, css]);
  console.log(css);
  return (
    <Box
      sx={{
        height: "40vh",
      }}
    >
      <iframe
        srcDoc={output}
        title="output"
        sandbox="allow-scripts"
        width={"100%"}
        height={"100%"}
        frameBorder={0}
      />
    </Box>
  );
};

export default Result;
