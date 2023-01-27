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
              <div> <img src="https://github.com/AndersonPaivaS/MemoryGame/raw/main/public/icons/react.png" alt="Logo React" /> </div>
              <button onClick={(e) => addItems(e)} name="react" > Adicionar </button>
            </div>


            <div>
              <img src="https://github.com/AndersonPaivaS/MemoryGame/raw/main/public/icons/svelte.png" alt="Logo Svelte" />
              <button  onClick={(e) => addItems(e)} name="svelte" > Adicionar </button>
            </div>

            <div>
              <img src="https://github.com/AndersonPaivaS/MemoryGame/raw/main/public/icons/angular.png" alt="Logo Angular" />
              <button  onClick={(e) => addItems(e)} name="angular" > Adicionar </button>
            </div>

            <div>
              <img src="https://github.com/AndersonPaivaS/MemoryGame/raw/main/public/icons/vue.png" alt="Logo Vue" />
              <button  onClick={(e) => addItems(e)} name="vue" > Adicionar </button>
            </div>
        
      </main>

      <footer>
        <h2> ITENS SELECIONADOS </h2>
        <div className={styles.selectedItems}>
          {items.map((item) => (
            <img src={`https://github.com/AndersonPaivaS/MemoryGame/raw/main/public/icons/${item.name}.png`} alt="" />
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
