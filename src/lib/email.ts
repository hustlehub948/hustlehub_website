type Payload = { name: string; email: string; company?: string; message: string; };

export async function sendContactEmail(payload: Payload) {
  const to = import.meta.env.VITE_CONTACT_EMAIL_TO || 'hustlehub948@gmail.com';
  console.log('Contact submission →', { to, ...payload });
  // Example server POST:
  // await fetch('/api/contact', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ to, ...payload }) });
  return true;
}
