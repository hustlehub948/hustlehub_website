// lib/email.ts

type Payload = { 
  name: string; 
  email: string; 
  phone?: string;   // ✅ added phone field
  company?: string; 
  message: string; 
};

export async function sendContactEmail(payload: Payload) {
  const res = await fetch("https://formspree.io/f/xpwjllya", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    console.error("Formspree submission failed", await res.text());
    return false;
  }

  return true;
}
