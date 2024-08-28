'use client'
import { CardCounter } from '@/components/card-counter'
import { useCountdown } from '@/hooks/useCountdown'
import { useSearchParams } from 'next/navigation'
import styles from './styles.module.scss'
import { useRouter } from 'next/navigation'

const Count = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const message = searchParams.get('message')
  const {
    days,
    hours,
    minutes,
    seconds,
    beforeHours0,
    beforeHours1,
    beforeMinutes0,
    beforeMinutes1,
    beforeSeconds0,
    beforeSeconds1
  } = useCountdown()

  return (
    <div className={styles['container']}>

      <strong>{typeof message === 'string' && message.length > 0 ? message : ''}</strong>

      <div className={styles['countdown-container']} onClick={() => push('/?edit')}>
        <div className={styles['period-container']}>
          <div className={styles['card-time-container']}>
            {
              days.split('').map((item, index) => {
                const beforeDay = Number(item) === 0 ? 1 : (Number(item) + 1 === 10 ? 0 : Number(item) + 1);
                return <CardCounter count={Number(item)} key={`${item}-${index}`} before={beforeDay} />
              })
            }
          </div>
          <strong>
            days
          </strong>
        </div>

        <div className={styles['period-container']}>
          <div className={styles['card-time-container']}>
            <CardCounter count={Number(hours[0])} before={beforeHours0} maxCount={3} />
            <CardCounter count={Number(hours[1])} before={beforeHours1} />
          </div>
          <strong>
            hours
          </strong>
        </div>


        <div className={styles['period-container']}>
          <div className={styles['card-time-container']}>
            <CardCounter count={Number(minutes[0])} before={beforeMinutes0} maxCount={7} />
            <CardCounter count={Number(minutes[1])} before={beforeMinutes1} />
          </div>
          <strong>
            minutes
          </strong>
        </div>

        <div className={styles['period-container']}>
          <div className={styles['card-time-container']}>
            <CardCounter count={Number(seconds[0])} before={beforeSeconds0} maxCount={7} />
            <CardCounter count={Number(seconds[1])} before={beforeSeconds1} />
          </div>
          <strong>
            seconds
          </strong>
        </div>
      </div>
    </div>
  )
}

export default Count