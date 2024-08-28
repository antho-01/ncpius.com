import React from 'react'
import styles from "@/app/homelisting/page.module.css"
import { IoBedOutline } from "react-icons/io5";
import { LiaToiletSolid } from "react-icons/lia";
import { PiBathtubLight } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import Link from "next/link"
import Image from "next/image"



const Listing = () => {

      const list = [
            {
                  id: "list1",
                  location: "Orchid Lekki, lagos ",
                  price: "120,000,000",
                  bedrooms: 5,
                  image: '/npnaimages/m3.webp',
                  description: 'Contemporary 5 Bedrooms Fully Detached Duplex with Swimming Pool and a BQ in a Secured Estate.',
                  propertyType: 'Contemporary 5 Bedrooms Fully Detached Duplex',
                  subTitle: " 5 bedroom deplex for sale",
                  
           
            },

            {
                  id: "list2",
                  location: "Orchid Lekki, lagos ",
                  price: "120,000,000",
                  bedrooms: 5,
                  image: '/npnaimages/m3.webp',
                  description: 'Contemporary 5 Bedrooms Fully DetachedDuplex Duplex with Swimming Pool and a BQ in a Secured Estate.',
                  propertyType: 'Contemporary 5 Bedrooms Fully Detached ',
                  subTitle: "4 bedroom derace for sale",
                  
            },

            {
                  id: "list3",
                  location: "Orchid Lekki, lagos ",
                  price: "120,000,000",
                  bedrooms: 5,
                  image: '/npnaimages/m3.webp',
                  description: 'Contemporary 5 Bedrooms Fully DetachedDuplex Duplex with Swimming Pool and a BQ in a Secured Estate.',
                  propertyType: 'Contemporary 5 Bedrooms Fully Detached ',
                  subTitle: "4 bedroom derace for sale",
                  
            },

            {
                  id: "list4",
                  location: "Orchid Lekki, lagos ",
                  price: "120,000,000",
                  bedrooms: 5,
                  image: '/npnaimages/m5.jpeg',
                  description: 'Contemporary 5 Bedrooms Fully DetachedDuplex Duplex with Swimming Pool and a BQ in a Secured Estate.',
                  propertyType: 'Contemporary 5 Bedrooms Fully Detached ',
                  subTitle: "4 bedroom derace for sale",
                  
            },
      ]
      

  return (
    <div className={styles.box}>
                   {
                        list.map((list)=>{
                              return(
                                    <div key={list.key} className={styles.container}>
                                    <div className={styles.subContainer}>
                                          <h2 className={styles.propertyType}>{list.propertyType}</h2>
                                          <div className={styles.imageDes}>
                                                
                                                <div className={styles.imgContainer}>
                                    <Link href={`/homelisting/${list.id}`}> <Image src={list.image} layout="fill" alt="House"/></Link>
                                                </div>
                                                
                                                <div>  
                                                      <h3 className={styles.subTitle}>{list.subTitle}</h3>
                                                      <p className={styles.description}>{list.description}</p>
                                                      <p className={styles.price}><TbCurrencyNaira/>{list.price}</p>
                                                </div>
                                          </div>
                                    </div>
            
                                    <div className={styles.items}> 
                                          <div className={styles.des}> <span className={styles.icon}><IoBedOutline/></span> &nbsp; <span>Bedrooms: {list.bedrooms}</span></div>
                                          <div className={styles.des}> <span className={styles.icon}><PiBathtubLight/></span> &nbsp; <span>Bathrooms: {list.bathrooms}</span></div>
                                          <div className={styles.des}> <span className={styles.icon}><LiaToiletSolid/></span> &nbsp; <span>Toilet: {list.toilets}</span></div>
                                          <div className={styles.des}> <span className={styles.icon}><IoCarSportOutline/></span> &nbsp; <span>Parking space{list.parkingSpace}</span></div>
                                    </div>
                              </div>
            
                              )
                        })
                   }
                
            </div>)
}

export default Listing;
