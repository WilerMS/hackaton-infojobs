export interface Author {
  id: string
  name: string
  uri: string
  logoUrl: string
  corporateResponsive: boolean
  showCorporativeHeader: boolean
}

export interface Offer {
  id?: string
  title?: string
  province?: string
  city?: string
  link?: string
  category?: string
  contractType?: string
  subcategory?: string
  salaryMin?: string
  salaryMax?: string
  salaryPeriod?: string
  experienceMin?: string
  workDay?: string
  study?: string
  published?: string
  updated?: string
  author?: Author
  requirementMin?: string
  bold?: boolean
  applications?: string
  subSegment?: number
  executive?: boolean
  salaryDescription?: string
  urgent?: boolean
  color?: boolean
}

export interface OffersResponse {
  currentPage: number
  pageSize: number
  totalResults: number
  totalPages: number
  offers: Offer[]
}