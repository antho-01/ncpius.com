import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Navigation/page.module.css"

const Navigation = () => {
      return (
           <>
            <nav className={styles.navigation}>
                  <div className={styles.logo}>
                        <Image 
                          src="/npnaimages/logo2-nbg.png"
                          alt="Logo"
                          fill="true"
                        />
                  </div>

                  <ul className={styles.list}>
                        <Link href="/"><li className={styles.items}>home</li></Link>
                        <Link href="/for-rent"><li className={styles.items}>For rent</li></Link>
                        <Link href="/for-sale"><li className={styles.items}>For sale</li></Link>
                        <Link href="/recent"><li className={styles.items}>Trending</li></Link>
                        <Link href="/recent"><li className={styles.items}>feedback</li></Link>
                  </ul>

                  <div className={styles.hamburger}>
                        <div className={styles.burger}></div>
                        <div className={styles.burger}></div>
                        <div className={styles.burger}></div>
                  </div>
                        
           </nav>

           
           </>

           

            

      )
}
export default Navigation;