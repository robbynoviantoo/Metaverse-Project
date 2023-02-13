'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet"
      className="md:w-[270px] w-full h-[250px] rounded-[20px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 flex flex-col max-w-[645px] md:ml-[62px]">
        <h4 className=" font-normal text-white lg:text-[42px] text-[24px]">{title}</h4>
        <p className="font-normal mt-[16px] text-[#B0B0B0] lg:text-[20px] text-[14px]">{subtitle}</p>
      </div>
      <div className="lg:flex hidden justify-center w-[100px] h-[100px] rounded-full border-[1px] border-white items-center">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>

  </motion.div>
  // <div className="flex md:flex-row flex-col justify-around items-center mt-[32px]">
  //   <div className={`${styles.flexCenter} w-[250px] h-[250px] rounded-[20px] bg-white`}>
  //     <img
  //       src={imgUrl}
  //       alt="icon"
  //       className="w-full h-[250px] object-cover rounded-[20px]"
  //     />
  //   </div>
  //   <div className="flex flex-col max-w-[645px] md:ml-[62px]">
  //     <h1 className=" text-white text-[42px]">{title}</h1>
  //     <p className="font-normal mt-[16px] text-[#B0B0B0] text-[20px]">{subtitle}</p>
  //   </div>
  //   <div className="lg:flex hidden justify-center w-[100px] h-[100px] rounded-[50%] border-[1px] border-white items-center">
  //     <img
  //       src="/arrow.svg"
  //       alt="arrow"
  //       className="w-[40%] h-[40%] object-contain"
  //     />
  //   </div>
  // </div>
);

export default InsightCard;
