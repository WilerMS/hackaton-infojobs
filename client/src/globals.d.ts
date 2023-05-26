interface Filter {
  province?: string
  city?: string
  contractType?: string[]
  category?: string[]
  salaryMin?: number
  salaryMax?: number
  experienceMin?: string
  page?: number
  maxResults?: number
  workDay?: string
}

interface Offer {
  id: Key | null | undefined
  province: { value: string }
  city: string
  author: { name: string, logoUrl: string | undefined }
  contractType: { value: string }
  workDay: { value: string }
  published: string | undefined
  salaryDescription: string
  title: string | undefined
  requirementMin: string | undefined
}
