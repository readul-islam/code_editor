import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Container = styled(Box)`
flex-grow: 1;
flex-basis: 0,
display: flex;
flex-direction: column;
padding: 0 8px 8px;



`;

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Header = styled(Box)`
  display: flex;
  background: #060606;
  //   color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ heading, icon, bg, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container sx={!open ? null : { flexGrow: 0 }}>
      {/* editor Header */}
      <Header>
        <Heading>
          <Box
            component={"span"}
            style={{
              background: bg,
              width: 20,
              height: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              paddingBottom: 1,
              marginRight: 5,
            }}
          >
            {icon}
          </Box>
          <Box
            style={{ color: "gray", fontWeight: "semibold" }}
            component={"span"}
          >
            {" "}
            {heading}
          </Box>
        </Heading>
        <CloseFullscreenIcon
          onClick={() => setOpen((preState) => !preState)}
          sx={{ color: "gray", fontSize: 16, alignSelf: "center" }}
        />
      </Header>
      {/* editor input */}
      <ControlledEditor
        value={value}
        onBeforeChange={handleChange}
        options={{
          mode: heading.toLowerCase(),
          theme: "material",
          lineNumbers: true,
        }}
        className="controlled-editor"
      />
    </Container>
  );
};

export default Editor;
