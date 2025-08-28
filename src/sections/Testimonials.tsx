import Section from '../components/ui/Section';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <h2 className="text-2xl md:text-3xl font-bold">Trusted by Clients Worldwide</h2>
      <motion.div className="grid mt-4 gap-4 grid-cols-1 md:grid-cols-3"
        initial="hidden" whileInView="show" viewport={{once:true}}
        variants={{hidden:{opacity:0}, show:{opacity:1, transition:{staggerChildren:.08}}}}>
        {testimonials.map(t => (
          <motion.div key={t.author} variants={{hidden:{opacity:0,y:18}, show:{opacity:1,y:0, transition:{duration:.4}}}}>
            <TestimonialCard {...t} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
