import styles from "@/components/hero/page.module.css";


const Hero = () => {
      return(
            <div className={styles.hero}>
                  <h1 className={styles.h1}>Find the right <span className={styles.home}>Home</span>  <br/> at the right price</h1>
            </div>
            
      )
}

export default Hero;