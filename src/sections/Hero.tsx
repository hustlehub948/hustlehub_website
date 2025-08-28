import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const fadeUp = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:.5}} };
const stagger = { show:{ transition:{ staggerChildren:.12, delayChildren:.1 } } };

export default function Hero() {
  return (
    <header className="hero-bg section pt-20 md:pt-28">
      <div className="container grid gap-5 md:grid-cols-[1.1fr_.9fr] items-center">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once:true, amount:.4}}>
          <motion.span variants={fadeUp} className="inline-block px-3 py-1 rounded-full bg-hhPurple/10 text-indigo-600 font-semibold text-sm">
            Full-stack digital services
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-2 text-3xl md:text-5xl font-bold">
            HustleHub — Your Digital Growth Partner
          </motion.h1>
          <motion.p variants={fadeUp} className="max-w-prose">
            From powerful websites to social media strategies, we connect businesses with world-class digital services designed to grow, secure, and scale your brand.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mt-3">
            <Button onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Start a Project</Button>
            <Button variant="outline" onClick={()=>document.getElementById('services')?.scrollIntoView({behavior:'smooth'})}>Explore Services</Button>
          </motion.div>
          
        </motion.div>

        <motion.div className="card" initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true, amount:.3}} transition={{duration:.5}}>
          <img alt="HustleHub mock" src="/logo.svg" className="w-28 mx-auto mb-4" />
          <div className="rounded-[12px] border border-hhBorder" style={{aspectRatio:'16/9', background:'linear-gradient(135deg, rgba(58,141,255,.25), rgba(108,99,255,.25))'}} />
        </motion.div>
      </div>
    </header>
  );
}
