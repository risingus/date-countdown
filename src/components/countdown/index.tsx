'use client'
import { useEffect, useState } from 'react'
import './styles.scss'
import { CardCounter } from '../card-counter'
import { CountContextProvider, useCountContext } from '@/context/count-countext-provider'

export const CountDown = () => {


  useEffect(() => {
    setInterval(() => {
      secondPlay();
    }, 1000);


    function secondPlay() {
      document.body.classList.remove("play");
      let aa = document.querySelector("ul.secondPlay li.active");

      if (!aa) {
        aa = document.querySelector("ul.secondPlay li");
        if (!aa) return
        aa.classList.add("before");
        aa.classList.remove("active");
        let nextLi = aa.nextElementSibling || document.querySelector("ul.secondPlay li");
        if (!nextLi) return

        nextLi.classList.add("active");
        document.body.classList.add("play");
        return
      }

      if (aa === aa?.parentElement?.lastElementChild) {
        document.querySelectorAll("ul.secondPlay li").forEach(li => li.classList.remove("before"));
        aa.classList.add("before");
        aa.classList.remove("active");
        aa = document.querySelector("ul.secondPlay li");
        if (!aa) return;
        aa.classList.add("active");
        document.body.classList.add("play");
        return
      }

      document.querySelectorAll("ul.secondPlay li").forEach(li => li.classList.remove("before"));
      aa.classList.add("before");
      aa.classList.remove("active");
      let nextLi = aa.nextElementSibling;
      if (!nextLi) return;
      nextLi.classList.add("active");
      document.body.classList.add("play");
    }

  }, [])



  return (
    <main className="container">
      <ul className="flip secondPlay">
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">0</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">0</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">1</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">1</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">2</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">2</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">3</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">3</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">4</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">4</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">5</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">5</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">6</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">6</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">7</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">7</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">8</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">8</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="up">
              <div className="shadow"></div>
              <div className="inn">9</div>
            </div>
            <div className="down">
              <div className="shadow"></div>
              <div className="inn">9</div>
            </div>
          </a>
        </li>
      </ul>

      <CardCounter />
    </main>

  )
}