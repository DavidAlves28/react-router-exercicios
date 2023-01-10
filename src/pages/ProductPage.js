import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function ProductPage (){
const {id} = useParams()
return (
    <div className="divProduto">
        <Header/>
       <h1>Produto Page </h1>
       <p>parâmetro passado pelo Input : <h3>{id}</h3></p>
    </div>
)
}