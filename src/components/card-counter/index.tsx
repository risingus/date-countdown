import './styles.scss'

interface CardCounterTypes {
  count: number
  before?: number
  maxCount?: number
}

export const CardCounter = ({ count = 0, before = 0, maxCount = 10 }: CardCounterTypes) => {
  return (
    <div className='card-counter-container'>
      {
        Array.from({ length: maxCount }, (_, index) => index)
          .map((number) => (
            <div
              className={'card-counter'
                + (before === number ? ' before' : '')
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