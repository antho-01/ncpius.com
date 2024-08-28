"use client"
import Video from "@/components/video/page"
import styles from "@/app/page.module.css"
import Listing from "@/app/homelisting/page"
import About from "@/app/about/page"
import List from "@/app/list/page"
import Video2 from "@/components/video2/page"
import Hero from "@/components/hero/page"
import Feeds from "@/components/feed/page"

 const Home = () => {
    
  return (
    <section>
      
      <Hero/>
      <div className={styles.textholder}>
         <h2 className={styles.h2}> Our Property Listing </h2>
         <span class={styles.line}> </span>
      </div>
      <Listing/>
      <About/>
      <Feeds/>
   
      
    </section>
      
    
  )
 }

 export default Home;