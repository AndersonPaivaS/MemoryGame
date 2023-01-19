import React, { useContext } from "react";
import { MemoryGameContext } from "../context/MemoryGameContext";
import styles from "../styles/components/login.module.css";

import { Link } from 'react-router-dom'

export default function Login() {
  const { addItems, items, removeItems } = useContext(MemoryGameContext)
  return (
    <div className={styles.loginContainer}>
      <header>
        <h1> ESCOLHA OS ITENS DO JOGO DA MEMÓRIA </h1>
      </header>

      <main>

            <div>
              <img src="/icons/react.svg" alt="Logo React" />
              <button onClick={(e) => addItems(e)} name="react" > Adicionar </button>
            </div>


            <div>
              <img src="/icons/svelte.svg" alt="Logo Svelte" />
              <button  onClick={(e) => addItems(e)} name="svelte" > Adicionar </button>
            </div>

            <div>
              <img src="/icons/angular.svg" alt="Logo Angular" />
              <button  onClick={(e) => addItems(e)} name="angular" > Adicionar </button>
            </div>

            <div>
              <img src="/icons/vue.svg" alt="Logo Vue" />
              <button  onClick={(e) => addItems(e)} name="vue" > Adicionar </button>
            </div>
        
      </main>

      <footer>
        <h2> ITENS SELECIONADOS </h2>
        <div className={styles.selectedItems}>
          {items.map((item) => (
            <img src={`/icons/${item.name}.svg`} alt="" />
          ))}
        </div>
        <div className={styles.divButtons}>
          <button onClick={removeItems} className={styles.removeButton} > Remover tudo </button>
          <Link className={styles.startButton} to="/home" > Começar </Link>
        </div>
      </footer>
    </div>
  );
}
