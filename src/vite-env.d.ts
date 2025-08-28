/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_EMAIL_TO: string
  // add more env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
