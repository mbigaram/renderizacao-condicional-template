import { useState } from "react"
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [tela, setTela] = useState(1)

 



  //Statments

  //if else

//   if(tela===1){
//   return (
//     <MainContainer >
//       <GlobalStyled />
//       <TelaLogin />
//     </MainContainer>
//   );
//   } else{
//     return (
//       <MainContainer >
//         <GlobalStyled />
//         <TelaCadastro />
//       </MainContainer>
//     );

//   }
// }

//switch case

switch (tela) {
    case 1:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin mudarTela={()=>setTela(2)}/>
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaCadastro 
          mudarTelaFinal={()=>setTela(3)} 
          mudarTela={()=>setTela(1)}/>
        </MainContainer>
      );
      case 3:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaUsuarioCadastrado />
        </MainContainer>
      );
    default:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin />
        </MainContainer>

     );
  }


//Expressions

//if ternario

// return (
//   <MainContainer >
// <GlobalStyled />
// {tela===1 ?
// <TelaLogin /> :
// <TelaCadastro /> }
// </MainContainer>

// )

//Curto circuito

// return (
//   <MainContainer >
// <GlobalStyled />
// {(tela && <TelaLogin />) || <TelaCadastro /> } 

// </MainContainer>

// )

}

  export default App;