interface Certification {
  id: string
  title: string
  issuer: string
  issuedDate: string // ISO format
  credentialId?: string
  credentialUrl?: string
  tags?: string[] // e.g. ["frontend", "backend"]
}
export type { Certification }
