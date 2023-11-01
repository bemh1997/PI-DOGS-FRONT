import {ReactComponent as MagnifyingGlass} from "../../assets/lupa.svg"
import styled from "styled-components";

export const SearchContainer = styled.div`
   height: 30px;
   width: 90%;
   display: flex;
   justify-content: center;
   align-content: center;
   text-align: center; 
   font-size: 15px;
   margin-left: 30px;
`
export const SearchInput = styled.input`
   width: 90%;
   height: 24px;
   border-radius: 7px 0px 0px 7px;
   outline: none;
   font-size: 13px;
   font-family: 'proxima-nova';
   font-weight: bold;
   transition: all 0.2s ease;
   cursor: text;
   color: #8a8a8a;
   align-items: center;
   text-align: center;
   justify-items: center;
   background-color: #FFFFFF;
   background-position: 0;
   
   transition: all 0.2s ease;
   &:hover{
      background-color: #333533;
      color: #F5CB5C;
      transform: scaleY(1.1);
   }
`

export const SearchIcon = styled(MagnifyingGlass)`
   width: 20px;
   height: 15px;
   cursor: pointer;
   fill: #39ff14; 
   transition: all 0.2s ease; 
`

export const SearchIconContainer = styled.div`
   display: flex;
   height: 26px;
   border: solid 2px #F5CB5C;
   outline: none;
   border-radius: 0px 7px 7px 0px;
   font-size: 13px;
   font-family: 'proxima-nova';
   font-weight: bold;
   transition: all 0.2s ease;
   cursor: pointer;
   align-items: center;
   text-align: center;
   justify-items: center;
   background-color: transparent;
   background-position: 0;
   transition: all 0.2s ease;
   &:hover {
      background-color: #F5CB5C;
      color: #c51d34;
      scale: 1.2;
   }
`