import { motion } from 'framer-motion';
import React from 'react';
import Tilt from 'react-tilt';
import { SectionsWrapper } from '../HOC';
import { services } from '../constants';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Profile</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
        I'm a Fullstack developer with more than 7
        years of experience in building highly performant
        and scalable web applications and mobile apps.
        My expertise lies in developing modern web
        applications using technologies like HTML, CSS,
        JavaScript, ReactJS, Vue.js, and CMS platforms. I also
        have experience working with various backend
        languages such as Python and PHP.
        With my strong problem-solving skills and
        attention to detail, I always strive to develop
        clean, maintainable, and reusable code.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services?.map((service, index) => (
          <ServiceCard key={service?.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionsWrapper(About, 'about');
