'use client'
import { DatePicker } from 'antd';
import styles from './home.style.module.scss'
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import { addDays } from 'date-fns';

const DatePickerDateFns = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);
const defaultDate = addDays(new Date(), 1)
export default function Home() {
  return (
    <div className={styles['home-container']}>

      <h1>date countdown</h1>

      <DatePickerDateFns
        showTime
        size='large'
        variant='filled'
        format='dd/MM/yyyy - HH:mm:ss'
        defaultValue={defaultDate}
        placeholder='Select date and time'
        autoFocus
        onChange={(value, dateString) => {
          console.log('Selected Time: ', value);
          console.log('Formatted Selected Time: ', dateString);
        }}
      // onOk={onOk}
      />

      <footer className={styles['footer']}>
        <span>Coded with ❣️ by risin-gus</span>
      </footer>
    </div>
  )
}
