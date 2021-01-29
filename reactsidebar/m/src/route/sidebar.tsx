import React from 'react';
import styled from "styled-components";

function Sidebar(){


    return(
        <div style={{backgroundColor:'#f8f9fa',minHeight:'100vh',width:'15rem',
        transition:'margin .25s ease-out',borderRight:'1px solid rgba(0,0,0,.125)'}}>
            <div style={{padding:'0.875rem 1.25rem', fontSize:'1.2rem'}}>연습중</div>
            <div style={{flexDirection:'column',paddingLeft:'0',marginBottom:0,display:'flex',borderRadius:0}}>
                <StyledA >test</StyledA>
                <StyledA>test</StyledA>
            </div>
        </div>
    );
}
export default Sidebar;

const StyledA = styled.a`
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    position: relative;
    display: block;
    padding: .75rem 1.25rem;
    border: 1px solid rgba(0,0,0,.125);
    text-decoration: none;
    cursor: pointer;
    &:hover{
        background-color:#dae0e5!important;
        border-width: 1px 0 1px;
    }

`;