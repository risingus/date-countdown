'use client'
import { useEffect } from 'react';
import styles from './styles.module.scss';

function animateBlob(event?: PointerEvent) {
  const blob = document.getElementById('mouse-blob')
  if (!blob) return
  const { clientX, clientY } = event ? event : { clientX: '50%', clientY: '50%' };
  blob.animate({
    left: `${clientX}${event ? 'px' : ''}`,
    top: `${clientY}${event ? 'px' : ''}`
  }, { duration: 3000, fill: 'forwards', easing: 'ease-in-out' })
}

export const MouseBlob = () => {
  useEffect(() => {
    window.addEventListener('pointermove', animateBlob)
    document.addEventListener('pointerleave', () => animateBlob())
    window.addEventListener('blur', () => animateBlob());

    return () => {
      window.removeEventListener('pointermove', animateBlob)
      document.removeEventListener('pointerleave', () => animateBlob())
      window.removeEventListener('blur', () => animateBlob());
    }
  }, [])

  return (
    <div className={styles.blobContainer}>
      <div className={styles.blob} id='mouse-blob' />
      <div className={styles.blur} />
    </div>
  )
}