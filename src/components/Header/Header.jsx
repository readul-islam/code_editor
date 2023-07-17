import { AppBar, Toolbar, styled } from "@mui/material";
import React from "react";

import Logo from "../../assets/logo.png";

const Container = styled(AppBar)`
  background: #060606;
  height: 8vh;
  position: sticky;
`;

const Header = () => {
  return (
    <Container>
      <Toolbar>
        <img src={Logo} alt="" style={{ width: 50 }} />
      </Toolbar>
    </Container>
  );
};

export default Header;
