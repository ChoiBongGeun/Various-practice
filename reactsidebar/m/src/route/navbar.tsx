import React,{useState} from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

function Navbar({change, menu}:any){
    const sidebar =() =>{
        if(menu ==1){
            change(0)
        }
        else{
            change(1)
        }
    }
    const view = window.innerWidth

    
    return(
        <nav style={{backgroundColor:'#f8f9fa',borderBottom:'1px solid #dee2e6',flexFlow:'row nowrap',justifyContent:'space-between',
        position:'relative',display:'flex',padding:'.5rem 1rem'}}>
            <Button onClick={sidebar}>Menue</Button>
            <Button2>
                <span>aa</span>
            </Button2>
            <StyledDiv>
                <ul style={{flexDirection:'row',marginTop:'0',marginLeft:'auto',display:'flex',paddingLeft:'0',marginBottom:'0',listStyle:'none'}}>
                    <li style={{display:'list-item', textAlign:'match-parent'}}>
                        <a style={{paddingRight:'.5rem',paddingLeft:'.5rem',display:'block',padding:'.5rem'}}>안농</a>
                    </li>
                    <li style={{display:'list-item', textAlign:'match-parent'}}>
                        <a style={{paddingRight:'.2rem',paddingLeft:'.5rem',display:'block',padding:'.5rem'}}>안농2</a>
                    </li>
                    <li style={{display:'list-item', textAlign:'match-parent'}}>
                        <a style={{paddingRight:'.5rem',paddingLeft:'.5rem',display:'block',padding:'.5rem'}}>{view}</a>
                    </li>
                </ul>
            </StyledDiv>
        </nav>
    );
}
export default Navbar;

const Button = styled.button`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:hover{
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
    }
    &:focus{
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
`;
const Button2 = styled.button`
    @media(min-width:992px){
        display: none;
    }
    color: rgba(0,0,0,.5);
    border-color: rgba(0,0,0,.1);
    [type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
        cursor: pointer;
    }
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    text-transform: none;
    margin: 0;
    button, select {
        text-transform: none;
    }
    button, input {
        overflow: visible;
    }
    button, input, optgroup, select, textarea {
        margin: 0;
        font-family: inherit;
    }
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
    font: 400 13.3333px Arial;

`;
const StyledDiv = styled.div`
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    @media (min-width: 992px){
        flex-basis: auto;
        display: flex!important;
        flex-grow: 1;
        align-items: center;
    }
`;