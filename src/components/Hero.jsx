import React from 'react';
import css from '/home/janewmwaura/ecommerce/amazon-starterpack/src/components/Hero.module.css';
import HeroImg from '/home/janewmwaura/ecommerce/amazon-starterpack/src/assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import { motion } from 'framer-motion';
const Hero = () => {

    const transition = {duration: 3,type: "spring"}
  return (
    <div className={css.container}>

        {/*left side*/}
        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>
            <div className={css.text2}>
                <span>Trendy collection</span>
                <span> Seedily say has suitable disposal and boy. 
                    Exercise joy man children rejoiced.</span>

            </div>

        </div>
        {/*middle hero image section*/}
        <div className={css.wrapper}>

            {/*bluecircle*/}
            <motion.div 
            initial={{bottom: "2rem"}}
            whileInView={{bottom: "0rem"}}
            className={css.blueCircle}
            transition={transition}>  
            </motion.div>

            {/*Image*/}
             <motion.img
             transition={transition}
             initial={{bottom: "-2rem"}}
             whileInView={{bottom: "0rem"}}
             src={HeroImg} alt="" width={600}/>

             {/*Cart Animation*/}
             <motion.div 
             transition={transition}
             initial={{right : "4%"}}
             whileInView={{right : "2%"}}
             
             className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span>Best Sign up Offers</span>
                    <div>
                        <BsArrowRight />
                    </div>

                </div>
              </motion.div>
        </div>
        {/*Right section*/}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly traffic</span>

            </div>
        <div className={css.customers}>
            <span>100k</span>
            <span>Happy Customers</span>
            </div>    

        </div>
    </div>
  )

}

export default Hero;