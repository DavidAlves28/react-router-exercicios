import React from "react";
import { useNavigate } from "react-router-dom";
import { irParaHome,irParaPerfil} from "../../Routes/Coordinator";

export default function Header() {

  const navigate = useNavigate()  
    return (
        <>
    <button onClick={()=>irParaHome(navigate)}> ir Para home </button>
    <button onClick={()=>irParaPerfil(navigate,3)} > ir Para Perfil</button>

        </>
    )
}