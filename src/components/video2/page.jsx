import styles from "@/components/video2/page.module.css";
import Image from "next/image"

export default function Video2() {
    return (
        <main className={styles.main}>
            <div className={styles.contents}>
                  <div className={styles.imgCon}>
                        <Image
                          src="/npnaimages/logo2-nbg.png"
                          alt="logo"
                          layout="fill"
                        
                        />
                  </div>
                <h1> We give Best offers in the Market</h1>
                
                
            </div>
            <video
                src="/npnaimages/rsv1.mp4"
                autoPlay
                muted
                loop
                className={styles.video}
            />
        </main>
    );
}
