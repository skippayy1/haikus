import React from 'react'
import HaikuComponent from './HaikuComponent'
import styles from './HaikuGrid.module.css'

const HaikuGrid = ({haikus, authorDisplayed}) => {
  return (
    <div className={styles.haikus}>
        {haikus.map((haiku) => (
            <HaikuComponent key={haiku.id} authorDisplayed={authorDisplayed} haiku={haiku}/>
            ))}
    </div>
  )
}

export default HaikuGrid