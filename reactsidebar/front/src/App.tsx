import React,{useState} from 'react';
import Sidebar from './route/sidebar';
import styled from "styled-components";
import Navbar from './route/navbar';


function App() {
  const [menu, setMenu] = useState<number>(0);
  const [style,setStyle]=useState({
    marginLeft:'0',
    transition: 'margin .25s ease-out'
  })

  const changesetMenu = (value:number) => {
    setMenu(value)
    if(menu==0){
      setStyle({
      marginLeft:'-15rem',
      transition: 'margin .25s ease-out'
    })
  }
  else{
    setStyle({
      marginLeft:'0',
      transition: 'margin .25s ease-out'
    })

  }
  }
  return (
    <StyledDiv>
      <div style={style}>
        <Sidebar/>
      </div>
      <div style={{minWidth:0,width:'100%'}}>
        <Navbar change={changesetMenu} menu={menu}/>
        <ContentDiv >
          <p>{menu}</p>
        </ContentDiv>
      </div>
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
display: flex!important;
overflow-x: hidden;
box-sizing: border-box;
`;
const ContentDiv = styled.div`
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
`;