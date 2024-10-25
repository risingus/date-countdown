'use client'
import { Suspense, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import { isBefore, isValid, format, parse } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@mui/material';
import styles from './home.style.module.scss'
import { Input } from '@/components/input/input';

const formSchema = z.object({
  message: z.string({ invalid_type_error: 'Invalid message' }).trim().optional(),
  date: z.string({ invalid_type_error: 'Invalid date', required_error: 'Date is required' })
    // .datetime()
    .refine((value) => {
      if (!value) return true;
      return isValid(parse(value, 'yyyy-MM-dd\'T\'HH:mm', new Date())) === true
    }, { message: 'Invalid date' })
    .refine((value) => {
      if (!value) return true
      return !isBefore(parse(value, 'yyyy-MM-dd\'T\'HH:mm', new Date()), new Date())
    }, { message: 'Must be in future' }),
})

type FormProps = z.infer<typeof formSchema>

function HomePage() {
  const searchParams = useSearchParams()
  const isEdit = typeof searchParams.get('edit') === 'string'
  const { replace, back } = useRouter();
  const { handleSubmit, control, formState, setFocus } = useForm<FormProps>({ resolver: zodResolver(formSchema), defaultValues: { message: '', date: '', } })
  const { errors } = formState

  function submit({ message, date }: FormProps) {
    if (!date) return;
    const params = new URLSearchParams();
    params.set('date', format(parse(date, 'yyyy-MM-dd\'T\'HH:mm', new Date()), 'dd/MM/yyyy HH:mm:ss'))
    params.set('message', message ?? '')
    replace(`/count?${params.toString()}`)
  }


  useEffect(() => {
    setTimeout(() => {
      setFocus('message')
    }, 120);
  }, [setFocus])

  return (
    <div className={styles['home-container']}>

      <h1>date countdown</h1>

      <form noValidate onSubmit={handleSubmit(submit)} className={styles['form']}>
        <p>Select the date and inform the message to show on countdown </p>
        <Controller
          control={control}
          name='message'
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div className={styles['input-container']}>
              <Input
                value={value}
                onChange={onChange} 
                placeholder='Message'
                onBlur={onBlur}
                ref={ref}
                hasError={!!errors?.message?.message}
                helperText={errors?.message?.message}
              />
            </div>
          )}
        />

        <Controller
          control={control}
          name='date'
          render={({ field: { onChange, value, ref, onBlur } }) => (
            <div className={styles['input-container']}>
              <Input
                value={value}
                onChange={onChange}
                placeholder='Data'
                onBlur={onBlur}
                type='datetime-local'
                ref={ref}
                hasError={!!errors?.date?.message}
                helperText={errors?.date?.message}
              />
            </div>
          )}
        />

        <div className={styles['form-footer']}>
          {
            isEdit
              ? <Button variant='text' size='small' sx={{ color: 'white' }} onClick={back}>Cancel</Button>
              : null
          }
          <Button variant='contained' size='small' type='submit'>Confirm</Button>
        </div>
      </form>
    </div>
  )
}

const Home = () => {
  return (
    <Suspense>
      <HomePage />
    </Suspense>
  )
}

export default Home
