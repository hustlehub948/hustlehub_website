import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { sendContactEmail } from '../lib/email';
import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await sendContactEmail({
      name: String(data.get('name')||''),
      email: String(data.get('email')||''),
      company: String(data.get('company')||''),
      message: String(data.get('message')||'')
    });
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <Section id="contact">
      <h2 className="text-2xl md:text-3xl font-bold">Let’s Build Something Amazing</h2>
      <p className="max-w-prose">Tell us about your project and we’ll show you how HustleHub can help.</p>
      {sent && <p className="text-green-600">Thanks! We’ll reach out shortly.</p>}
      <motion.form onSubmit={onSubmit} className="grid gap-3 mt-2"
        initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:.45}}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input name="name" placeholder="Name" required className="card" />
          <input name="email" type="email" placeholder="Email" required className="card" />
        </div>
        <input name="company" placeholder="Company / Website" className="card" />
        <textarea name="message" placeholder="Tell us about your project..." className="card min-h-[120px]" />
        <Button type="submit">Submit Inquiry</Button>
      </motion.form>
    </Section>
  );
}
