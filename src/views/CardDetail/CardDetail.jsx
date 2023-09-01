import React from 'react'
import styles from './cardDetail.module.css'
import Detail from '../../components/Detail/Detail'

const CardDetail = () => {
    
  return (
    <section className={styles.detailCard}>
        <article>
            <Detail/>
        </article>
    </section>
  )
}

export default CardDetail