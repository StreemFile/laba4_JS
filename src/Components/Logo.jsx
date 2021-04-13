import React from 'react';
import styled from "styled-components";

const LogoDiv = styled.div`
  color: ${props => props.logoColor};
  font-size: 70px;
  text-align: center;
  vertical-align: middle;
  line-height: 70px;
  grid-column-start: 14;
  grid-column-end: 16;
  user-select: none;
`

const Logo = (props) => {
    return (
       <LogoDiv logoColor={props.logoColor}>
           MV
       </LogoDiv>
    );
}

export default Logo;