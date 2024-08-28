"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"

import './styles.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import styles from "@/app/homelisting/[id]/page.module.css"
import Link from "next/link"
import Hero from '@/components/hero/page';
import Hero2 from '@/components/hero2/page';



const Page = ({params}) => {
      const [thumbsSwiper, setThumbsSwiper] = useState(null);

      const homeListing = {
            list1:[{
                  id: 1,
                  title: "Contemporary 5 Bedrooms Fully Detached Duplex",
                  subTitle: "Contemporary 5 Bedrooms Fully Detached Duplex for Sale",
                  location: "Orchid Lekki, lagos ",
                  price: "24,000,000",
                  bedroom: 4,
                  bathroom: 3,
                  packingspace: 3,
                  toilet: 5,
            }],
            list2:[{
                  id:2,
                  name:'list2',
                  description: "lorem this is a question you ask all the time of your life, how come2"
            }],
            list3:[{
                  id:2,
                  name:'list3',
                  description: "lorem this is a question you ask all the time of your life, how come 3"
            }],
            list4:[{
                  id:2,
                  name:'list4',
                  description: "lorem this is a question you ask all the time of your life, how come 4"
            }],
      }

      const listdata = homeListing[params.id];


      return (
      
      
      <>  
     
                  <Hero2/>
                  
                  <div>
                        {
                        listdata.map((list)=>{
                              return(
                  <>

                                          <div className={styles.title}><h3>{list.title}</h3></div>
                              <div className={styles.container}>
                                                
                                                <div className={styles.backPage}><Link href="/">back to property page</Link></div>
                                                <div className={styles.propertyInfo}>
                                                      <div className={styles.pIC1}>
                                                            <p>{list.subTitle}</p>
                                                            <p>{list.location}</p>
                                                      </div>
                                                      <div className={styles.pIC2}>
                                                            <p>{list.price}</p>
                                                      </div>
                                                </div>
                                                
                                          {/*  ================SWIPPER GOES HERE =======================*/}

                                    <Swiper
                                          style={{
                                          '--swiper-navigation-color': '#fff',
                                          '--swiper-pagination-color': '#fff',
                                          }}
                                          spaceBetween={10}
                                          navigation={true}
                                          thumbs={{ swiper: thumbsSwiper }}
                                          modules={[FreeMode, Navigation, Thumbs]}
                                          className="mySwiper2"
                                          >
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-2.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-4.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-5.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-6.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-7.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-8.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-9.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-10.jpg" alt="video"  />
                                          </SwiperSlide>
                                          </Swiper>
                                          <Swiper
                                          onSwiper={setThumbsSwiper}
                                          spaceBetween={10}
                                          slidesPerView={4}
                                          freeMode={true}
                                          watchSlidesProgress={true}
                                          modules={[FreeMode, Navigation, Thumbs]}
                                          className="mySwiper"
                                          >
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-2.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-4.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-5.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-6.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-7.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-8.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-9.jpg" alt="video"  />
                                          </SwiperSlide>
                                          <SwiperSlide>
                                          <Image src="https://swiperjs.com/demos/images/nature-10.jpg" alt="video"  />
                                          </SwiperSlide>
                                    </Swiper>
                                                


                              </div>
                              
                  </>
                              )
                        })
                                    
                        }
                  </div>
                        
            
      </>

      )
}

export default Page;