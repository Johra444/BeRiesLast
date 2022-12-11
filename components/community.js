import React from "react";
import styles from "../styles/Community.module.css";

const Community = () => {
  return (
    <>
      <section id="community" className={styles.communitySection}>
        <div className={styles.imageWrapperOuter}>
          <div class={styles.imageWrapperInner}>
            <div className={styles.ImageRowWrapper1}>
              <div id={styles.i1} className={styles.image}></div>
              <div id={styles.i2} className={styles.image}></div>
              <div id={styles.i3} className={styles.image}></div>
              <div id={styles.i4} className={styles.image}></div>
              <div id={styles.i5} className={styles.image}></div>
              <div id={styles.i6} className={styles.image}></div>
            </div>
            <div className={styles.ImageRowWrapper2}>
              <div id={styles.i7} className={styles.image}></div>
              <div id={styles.i8} className={styles.image}></div>
              <div id={styles.i9} className={styles.image}></div>
              <div id={styles.i10} className={styles.image}></div>
              <div id={styles.i11} className={styles.image}></div>
              <div id={styles.i12} className={styles.image}></div>
            </div>
            <div className={styles.ImageRowWrapper3}>
              <div id={styles.i13} className={styles.image}></div>
              <div id={styles.i14} className={styles.image}></div>
              <div id={styles.i15} className={styles.image}></div>
              <div id={styles.i16} className={styles.image}></div>
              <div id={styles.i17} className={styles.image}></div>
              <div id={styles.i18} className={styles.image}></div>
            </div>
            <div className={styles.ImageRowWrapper4}>
              <div id={styles.i19} className={styles.image}></div>
              <div id={styles.i20} className={styles.image}></div>
              <div id={styles.i21} className={styles.image}></div>
              <div id={styles.i22} className={styles.image}></div>
              <div id={styles.i23} className={styles.image}></div>
              <div id={styles.i24} className={styles.image}></div>
            </div>
          </div>
        </div>
        <div className={styles.divBlock14}>
          <div id="white-center"className="h2">
            Join the
            <br/>
            BeRies ✨<br/>
            community
          </div>
          <a href="https://www.instagram.com/beries.eth/" target="_blank" >
            <div className={styles.divBlock15}>
              <img
                src="/assets/6366475ccb0f68c0ec5b514e_insta.png"
                height="21"
              ></img>
              <div className={styles.paragrah2}>@beries.eth</div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Community;
