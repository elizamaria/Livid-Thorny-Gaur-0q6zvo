import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Livid Thorny Gaur</title>
        <meta property="og:title" content="Livid Thorny Gaur" />
      </Helmet>
    </div>
  )
}

export default Home
