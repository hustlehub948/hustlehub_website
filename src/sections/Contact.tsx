import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { sendContactEmail } from '../lib/email';
import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [phone, setPhone] = useState(''); // state for phone number
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);

    const success = await sendContactEmail({
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone, // formatted phone number
      company: String(data.get('company') || ''),
      message: String(data.get('message') || ''),
    });

    setLoading(false);

    if (success) {
      setSent(true);
      e.currentTarget.reset();
      setPhone('');
    }
  };

  return (
    <Section id="contact">
      <h2 className="text-2xl md:text-3xl font-bold">Let’s Build Something Amazing</h2>
      <p className="max-w-prose">
        Tell us about your project and we’ll show you how HustleHub can help.
      </p>

      {sent && (
        <p className="text-green-600 font-medium mt-2">
          ✅ Thanks! We’ll reach out shortly.
        </p>
      )}

      <motion.form
        onSubmit={onSubmit}
        className="grid gap-4 mt-6"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Name"
            required
            className="rounded-xl backdrop-blur-md bg-white/30 border border-white/20 px-4 py-3 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-hhPurple/60 transition"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="rounded-xl backdrop-blur-md bg-white/30 border border-white/20 px-4 py-3 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-hhPurple/60 transition"
          />
        </div>

        {/* Phone Input with Country Selector */}
        <PhoneInput
          country={'in'} // default country (India)
          value={phone}
          onChange={setPhone}
          inputProps={{
            name: 'phone',
            required: true,
          }}
          containerClass="!w-full"
          inputClass="!w-full !rounded-xl !backdrop-blur-md !bg-white/30 !border !border-white/20 !px-4 !py-3 !text-sm !shadow-lg focus:!outline-none focus:!ring-2 focus:!ring-hhPurple/60 !transition"
          buttonClass="!bg-white/30 !border !border-white/20 !rounded-l-xl"
        />

        <input
          name="company"
          placeholder="Company / Website"
          className="rounded-xl backdrop-blur-md bg-white/30 border border-white/20 px-4 py-3 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-hhPurple/60 transition"
        />

        <textarea
          name="message"
          placeholder="Tell us about your project..."
          className="rounded-xl backdrop-blur-md bg-white/30 border border-white/20 px-4 py-3 text-sm min-h-[120px] shadow-lg focus:outline-none focus:ring-2 focus:ring-hhPurple/60 transition"
        />

        <Button type="submit" className="mt-2" disabled={loading}>
          {loading ? 'Sending…' : 'Submit Inquiry'}
        </Button>
      </motion.form>
    </Section>
  );
}
