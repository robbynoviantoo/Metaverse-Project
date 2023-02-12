'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Insight"
        textStyles="text-center"
      />
    </motion.div>
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.75] flex justify-center flex-col"
    >
      <TitleText title={<>Insight about metaverse</>} textStyles="text-center" />
    </motion.div>
  </section>
);

export default Insights;
