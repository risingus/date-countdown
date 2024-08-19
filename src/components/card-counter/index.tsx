'use client'
import { useEffect, useMemo, useRef, useState } from 'react';
import './styles.scss'
import { useCountContext } from '@/context/count-countext-provider';



export const CardCounter = () => {
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


  const { count, changeCount } = useCountContext()

  const before = useMemo(() => {
    return count === 0 ? 9 : count - 1;
  }, [count])

  const refCount = useRef(0)


  useEffect(() => {
    setInterval(() => {
      // if (refCount.current === count) return
      changeCount()
    }, 1000);
  }, [changeCount])


  useEffect(() => {
    refCount.current = count

  }, [count])

  return (
    <div className='card-counter-container'>
      {
        Array.from({ length: 10 }, (_, index) => index)
          .map((number) => (
            <div
              // className='card-counter'
              className={'card-counter'
                + (before === number ? ' before' : '')
                // + (after === number ? ' after' : '')
                + (count === number ? ' active' : '')
              }
              key={number}
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
          ))
      }
    </div>
  )
}