import Section from '../components/ui/Section';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
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

export default function Testimonials() {
  return (
    <Section id="testimonials">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold">
          Trusted by Clients Worldwide
        </h2>
        <p className="mt-2 text-hhDark/70">
          Hear from the businesses and innovators who rely on us.
        </p>
      </div>

      {/* Testimonial Grid */}
      <motion.div
        className="grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {testimonials.map((t) => (
          <motion.div key={t.author} variants={item}>
            <TestimonialCard {...t} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
