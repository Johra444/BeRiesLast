import React from 'react'

import styles from "../styles/Team.module.css"

const MeetOurTeam = () => {
  return (
    <div className={styles.container}>
      <h2 id="white" className="h2">Meet our team</h2>
      <div className={styles.row1}>
        <div className={styles.team_member}>
          <img
            src= "./assets/team/Onze.png"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.name}>@0x11nze</span>
            <span className={styles.role}>CEO - Artistic Director</span>
          </div>
        </div>
        
        <div className={styles.team_member}>
          <img
            src= "./assets/team/Onze.png"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.name}>@Johra</span>
            <span className={styles.role}>Solidity Dev</span>
          </div>
        </div>

        <div className={styles.team_member}>
          <img
            src= "./assets/team/tinmar.png"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.name}>@0xTinmar</span>
            <span className={styles.role}>Front End Dev</span>
          </div>
        </div>

        <div className={styles.team_member}>
          <img
            src= "./assets/team/1tbk1.png"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.name}>@1tbk1</span>
            <span className={styles.role}>Chief Editor</span>
          </div>
        </div>

      </div>
      <div className={styles.row2}>
      <div className={styles.team_member}>
          <img
            src= "./assets/team/SpadeFx.png"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.name}>@SpadeFX</span>
            <span className={styles.role}>BeRies Builder</span>
          </div>
        </div>
        
        <div className={styles.team_member}>
          <img
            src= "./assets/team/IdrissMarcus.png"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.name}>@IdrissMarcus</span>
            <span className={styles.role}>Muse</span>
          </div>
        </div>

        <div className={styles.team_member}>
          <img
            src= "./assets/team/Kahili.png"
            className={styles.image}
          />
          <div className={styles.content}>
            <span className={styles.name}>@Kahili_S</span>
            <span className={styles.role}>Muse</span>
          </div>
        </div>

        <div className={styles.team_member}>

        </div>
        
      </div>
    </div>
  )
  
}


export default MeetOurTeam
