
import { Link } from 'react-router-dom'

import React, { useState } from 'react'
import { useContext } from 'react'
import { MemoryGameContext } from '../context/MemoryGameContext'

import styles from '../styles/components/game.module.css'

export default function Game() {
  const {shuffledItems} = useContext(MemoryGameContext)
  const [isReveled, setIsReveled] = useState(new Array(shuffledItems.length).fill(false))

  const [oneCard, setOneCard] = useState([''])
  const [oneId, setOneId] = useState(0)
  const [twoCard, setTwoCard] = useState([''])

  const [finishGame, setFinishGame] = useState(false)

  const turnCard = (e) => {
    const cardIndex = [...isReveled]
    cardIndex[e] = true
    setIsReveled(cardIndex)

      if(oneCard[0] == [''] && twoCard[0] == ['']) {
        setOneCard(shuffledItems[e])
        setOneId(e)
      } else if (oneCard[0] != [''] && twoCard[0] == ['']) {
        setTwoCard(shuffledItems[e])

        if(oneCard.name != shuffledItems[e].name) {
          
        setTimeout(function() {
          const cardIndex = [...isReveled]
          cardIndex[e] = false
          cardIndex[oneId] = false
          setIsReveled(cardIndex)
          setFinishGame(true)
        }, 1000)
      
        setOneCard([''])
        setTwoCard([''])

        } else {
          setOneCard([''])
          setTwoCard([''])
        }
      }

      

      


  }


  return (
    <div className={styles.game}>

      <div className={styles.items}>
        {shuffledItems.map((item, index) => (
          <div>
            {isReveled[index] ?

              <div
                onClick={(e) => turnCard(e.target.id)}
                id={index}
                className={styles.front}>
                <img
                  src={`https://github.com/AndersonPaivaS/MemoryGame/raw/main/public/icons/${item.name}.png`}
                  onClick={(e) => turnCard(e.target.id)}
                  id={index}
                  alt={`${item.name}`} />

                <h2
                  onClick={(e) => turnCard(e.target.id)}
                  id={index}
                  > {item.name}
                </h2>
              </div>

              :

              <div onClick={(e) => turnCard(e.target.id)} id={index} className={styles.back}>
                  <img src={`https://github.com/AndersonPaivaS/MemoryGame/raw/main/public/icons/javascript.png`} onClick={(e) => turnCard(e.target.id)} id={index} alt="JavaScript" />
              </div>}
          </div>
        ))}
          
      </div>

      <Link className={styles.button} to="/" > Voltar </Link>
      
    </div>
  )
}

