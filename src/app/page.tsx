'use client'
import { Button, DatePicker, Input } from 'antd';
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import dateFnsGenerateConfig from 'rc-picker/lib/generate/dateFns';
import { isBefore, isValid, format } from 'date-fns';
import styles from './home.style.module.scss'
import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

interface FormProps {
  message: string
  date: Date | null
}

const formSchema = z.object({
  message: z.string({ invalid_type_error: 'Invalid message' }).trim().optional(),
  date: z.date({ invalid_type_error: 'Invalid date', required_error: 'Date is required' })
    .nullable()
    .refine((value) => {
      return !!value
    }, { message: 'Date is required' })
    .refine((value) => {
      if (!value) return true;
      return isValid(new Date(value)) === true
    }, { message: 'Invalid date' })
    .refine((value) => {
      if (!value) return true
      return !isBefore(new Date(value), new Date())
    }, { message: 'Must be in future' })
})

const DatePickerDateFns = DatePicker.generatePicker<Date>(dateFnsGenerateConfig);

export default function Home() {
  const { replace } = useRouter();
  const { handleSubmit, control, formState } = useForm<FormProps>({ resolver: zodResolver(formSchema), defaultValues: { message: '', date: null } })
  const { errors } = formState

  function submit({ message, date }: FormProps) {
    if (!date) return;
    const params = new URLSearchParams();
    params.set('date', format(new Date(date), 'dd/MM/yyyy HH:mm:ss'))
    params.set('message', message)
    replace(`/count?${params.toString()}`)
  }


  return (
    <div className={styles['home-container']}>

      <h1>date countdown</h1>

      <form noValidate onSubmit={handleSubmit(submit)} className={styles['form']}>

        <Controller
          control={control}
          name='message'
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div className={styles['input-container']}>
              <Input
                placeholder='Message'
                size='large'
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                ref={ref}
                variant='filled'
                status={
                  !!errors?.message?.message ? 'error' : ''
                }
              />
              <span>
                {
                  typeof errors?.message?.message === 'string'
                    && errors.message.message.length > 0
                    ? errors.message.message
                    : ''
                }
              </span>
            </div>
          )}
        />



        <Controller
          control={control}
          name='date'
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div className={styles['input-container']}>
              <DatePickerDateFns
                showTime
                onBlur={onBlur}
                ref={ref}
                size='large'
                variant='filled'
                format='dd/MM/yyyy - HH:mm:ss'
                value={value}
                placeholder='Select date and time'
                autoFocus
                onChange={(value) => onChange(value)}
                onOk={(value) => onChange(value)}
                status={
                  !!errors?.date?.message ? 'error' : ''
                }
              />
              <span>
                {
                  typeof errors?.date?.message === 'string'
                    && errors.date.message.length > 0
                    ? errors.date.message
                    : ''
                }
              </span>
            </div>
          )}
        />





        <div className={styles['form-footer']}>
          <Button type='text'>Cancel</Button>
          <Button type='primary' htmlType='submit'>Confirm</Button>
        </div>
      </form>



      <footer className={styles['footer']}>
        <span>Coded with ❣️ by risin-gus</span>
      </footer>
    </div>
  )
}
