'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, slideIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="|  People on the World"
        textStyles="text-center"
      />
    </motion.div>
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.75] flex justify-center flex-col"
    >
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full mt-[50px]"
        >
          <img
            src="/map.png"
            alt="map"
            className=" m-auto sm:h-[400px] lg:h-[500px] h-[250px] z-10 relative"
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default World;
