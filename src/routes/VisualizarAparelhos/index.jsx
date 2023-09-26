import React from "react"; // Certifique-se de importar React
import { useParams, useNavigate } from "react-router-dom";
import { listaAparelhos } from "../../components/listaAparelhos";

export default function VisualizarAparelhos() {
    const { marca, modelo } = useParams();
  const aparelho = listaAparelhos.find(
    (aparelho) => aparelho.marca === marca && aparelho.modelo === modelo
  );

  if (!aparelho) {
    return <div>Aparelho não encontrado</div>;
  }
  const imagens = [
    'samsung-s6-lite.jpg',
    'apple-iphone-13.jpg',
    'amazon-fire.jpg',
    'motorola-moto-e22.jpg',
    'apple-ipad-pro.jpg',
    'samsung-m54 (4).jpg'
    
  ]

  return (
    <main>
      <h1>Visualizar Produto</h1>
      {/* <p>Visualizando os dados do produto:</p>
      <p>Marca: {aparelho.marca}</p>
      <p>Modelo: {aparelho.modelo}</p>
      <p>Descrição: {aparelho.descricao}</p>
      <p>Preço: {aparelho.preco}</p>
      <img src={imagens[index]} alt={`Imagem do ${aparelho.modelo}`} /> */}
{/* 
      {listaAparelhos.map((aparelho, index) => (
            <div>
                <img src={imagem[index]} alt={`Imagem do ${aparelho.modelo}`} />
                <p>Visualizando os dados do produto:</p>
                <p>Marca: {aparelho.marca}</p>
                <p>Modelo: {aparelho.modelo}</p>
                <p>Descrição: {aparelho.descricao}</p>
                <p>Preço: {aparelho.preco}</p>
                </div>
          ))} */}
            <img src={`/images/${aparelho.foto}`} alt={aparelho.modelo} />
      <p>Marca: {aparelho.marca}</p>
      <p>Modelo: {aparelho.modelo}</p>
      <p>Descrição: {aparelho.descricao}</p>
      <p>Preço: R$ {aparelho.preco
      }</p>
    </main>
  );
}