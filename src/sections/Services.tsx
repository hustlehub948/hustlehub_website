import Section from '../components/ui/Section';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { motion } from 'framer-motion';

const container = { 
  hidden: { opacity: 0 }, 
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
  } 
};

const item = { 
  hidden: { opacity: 0, y: 18 }, 
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } } 
};

export default function Services() {
  return (
    <Section id="services">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-hhDark/70">
          Pick what you need now, scale later. Fast delivery, clear communication, measurable results.
        </p>
      </div>

      {/* Service Cards */}
      <motion.div
  className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto"
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  {services.map((s) => (
    <motion.div
      key={s.title}
      variants={item}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <ServiceCard {...s} />
    </motion.div>
  ))}
</motion.div>

    </Section>
  );
}
