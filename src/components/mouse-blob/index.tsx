import styles from './styles.module.scss';

function moveBlob(event: any) {
  const { clientX, clientY } = event;
  const blob = document.getElementById('mouse-blob')
  if (!blob) return
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: 'forwards' })
}

function resetBlob() {
  const blob = document.getElementById('mouse-blob')
  if (!blob) return
  blob.animate({
    left: '50%',
    top: '50%'
  }, { duration: 3000, fill: 'forwards' })
}

export const MouseBlob = () => {
  return (
    <div className={styles.blobContainer} onPointerMove={moveBlob} onPointerLeave={resetBlob}>
      <div className={styles.blob} id='mouse-blob' />
      <div className={styles.blur} />
    </div>
  )
}