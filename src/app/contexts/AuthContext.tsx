'use client'

import { fetchCurrentApplicant } from '@/services/applicantApi'
import { fetchCurrentCompany } from '@/services/companyApi'
import { Applicant } from '@/types/applicant'
import { Company } from '@/types/company'
import { usePathname, useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext<{
  company: Company | undefined
  applicant: Applicant | undefined
}>({
  company: undefined,
  applicant: undefined,
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [company, setCompany] = useState<Company | undefined>(undefined)
  const [applicant, setApplicant] = useState<Applicant | undefined>(undefined)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname.includes('/sign-in')) return
    if (pathname.includes('/sign-up')) return

    if (pathname.startsWith('/applicant')) {
      fetchCurrentApplicant()
        .then((res) => setApplicant(res.data))
        .catch(() => router.push('/applicant/sign-in'))
    } else if (pathname.startsWith('/company')) {
      fetchCurrentCompany()
        .then((res) => setCompany(res.data))
        .catch(() => router.push('/company/sign-in'))
    }
  }, [pathname])

  return (
    <AuthContext.Provider
      value={{
        company,
        applicant,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
