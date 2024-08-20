import { PointerEvent } from 'react';
import styles from './styles.module.scss';

function animateBlob(event?: PointerEvent<HTMLDivElement>) {
  try {
    const blob = document.getElementById('mouse-blob')
    if (!blob) return
    const { clientX, clientY } = event ? event : { clientX: '50%', clientY: '50%' };
    blob.animate({
      left: `${clientX}${event ? 'px' : ''}`,
      top: `${clientY}${event ? 'px' : ''}`
    }, { duration: 3000, fill: 'forwards', easing: 'ease-in-out' })

  } catch (error) {
    console.log(error)
  }
}

export const MouseBlob = () => {
  return (
    <div
      className={styles.blobContainer}
      onPointerMove={animateBlob}
      onPointerLeave={() => animateBlob()}
    >
      <div className={styles.blob} id='mouse-blob' />
      <div className={styles.blur} />
    </div>
  )
}