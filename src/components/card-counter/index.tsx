'use client'
import { useEffect, useMemo, useRef, useState } from 'react';
import './styles.scss'
import { useCountContext } from '@/context/count-countext-provider';


const Test = ({ count = 0, number = 0, before = 9 }) => {
  return (
    <div
      // className='card-counter'
      className={'card-counter'
        + (before === number ? ' before' : '')
        // + (after === number ? ' after' : '')
        + (count === number ? ' active' : '')
      }
    >
      <div >
        <div className='card-counter-up'>
          <div className='card-counter-shadow'></div>
          <div className='card-counter-inn'>{number}</div>
        </div>
        <div className='card-counter-down'>
          <div className='card-counter-shadow'></div>
          <div className='card-counter-inn'>{number}</div>
        </div>
      </div>
    </div>
  )
}


export const CardCounter = () => {
  const { count, handleChangeCount } = useCountContext()
  // function secondPlay() {
  //   const activeCard = document.querySelector(".card-counter.active");
  //   const elements = document.querySelectorAll(".card-counter")
  //   const elementsList = Array.from(elements)

  //   if (!activeCard) {
  //     const firstCardFromList = document.querySelector(".card-counter") || elementsList[0];
  //     firstCardFromList.classList.remove("active");
  //     firstCardFromList.classList.add("before");
  //     const newActiveCard = firstCardFromList.nextElementSibling || elementsList[1]
  //     newActiveCard.classList.add("active");
  //     return
  //   }

  //   if (activeCard === activeCard.parentElement?.lastElementChild) {
  //     elementsList.forEach(element => element.classList.remove("before"));
  //     activeCard.classList.add("before");
  //     activeCard.classList.remove("active");
  //     const newActiveCard = elementsList[0];
  //     newActiveCard.classList.add("active");
  //     return
  //   }

  //   const activeCardIndex = elementsList.indexOf(activeCard)
  //   elementsList.forEach((element) => element.classList.remove('before'))
  //   activeCard.classList.add("before");
  //   activeCard.classList.remove("active");
  //   const newActiveCard = elementsList[activeCardIndex + 1];
  //   if (!newActiveCard) return;
  //   newActiveCard.classList.add("active");
  // }

  const before = count === 0 ? 9 : count - 1;
  // const before = useMemo(() => {
  //   return count === 0 ? 9 : count - 1;
  // }, [count])


  useEffect(() => {
    setInterval(() => {
      // if (refCount.current === count) return
      handleChangeCount()
    }, 1000);
  }, [])

  return (
    <div className='card-counter-container'>
      {
        Array.from({ length: 10 }, (_, index) => index)
          .map((number) => (
            <Test before={before} count={count} number={number} key={number} />
          ))
      }
    </div>
  )
}