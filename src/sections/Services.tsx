import Section from '../components/ui/Section';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { motion } from 'framer-motion';

const container = { hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:.08, delayChildren:.1}} };
const item = { hidden:{opacity:0,y:18}, show:{opacity:1,y:0, transition:{duration:.4}} };

export default function Services() {
  return (
    <Section id="services">
      <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
      <p className="max-w-prose">Pick what you need now, scale later. Fast delivery, clear communication, measurable results.</p>
      <motion.div className="grid mt-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        variants={container} initial="hidden" whileInView="show" viewport={{once:true, amount:.3}}>
        {services.map(s => (
          <motion.div key={s.title} variants={item} whileHover={{ y: -4 }}>
            <ServiceCard {...s} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
