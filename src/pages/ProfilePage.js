import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { irParaProduto } from "../Routes/Coordinator";
function ProfilePage() {
  const navigate = useNavigate()
  const [path,setPath] = useState('')
  return (
    <section>
    <Header/>
      <h1>Página de perfil</h1>
      <input  value={path} onChange={(e)=> setPath(e.target.value)}/>
    <button onClick={()=>irParaProduto(navigate,path)} > ir Para Produto</button>

    </section>
  );
}

export default ProfilePage;
