"use client"
import Image from "next/image";
import styles from "@/app/list/page.module.css"

const List = () => {

      const list = [
            {
                  id: 1,
                  image: "/npnaimages/m1.jpeg",
                  title: "first design"
            },

            {
                  id: 1,
                  image: "/npnaimages/m2.jpeg",
                  title: "second design"
            }
      ]

      return(

            <div className={styles.box}>
                  {
                        list.map((listid)=>{
                              <div className={styles.container}>
                                    <div className={styles.imgCon}>
                                          <Image src={listid.image} alt="house" fill="true"/>
                                    </div>
                                    <h2>{listid.title}</h2>
                              </div>
                        })
                  }
            </div>
      )
}

export default List;