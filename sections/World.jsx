'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

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
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="flex-[0.75] flex justify-center flex-col relative"
    >
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="relative w-full mt-[68px] flex"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover "
          />
          <div className="absolute w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] bottom-[10%] right-[10%]">
            <img
              src="/people-01.png"
              alt="people"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] top-[20%] left-[10%]">
            <img
              src="/people-02.png"
              alt="people"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680] top-1/2 left-[45%]">
            <img
              src="/people-01.png"
              alt="people"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default World;
