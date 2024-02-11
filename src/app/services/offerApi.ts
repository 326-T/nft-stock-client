import { Offer } from '@/types/offer'
import axios, { AxiosPromise } from 'axios'
import { UUID } from 'crypto'

export const findOffersByResumeUuid = (resumeUuid: UUID): AxiosPromise<Offer[]> =>
  axios.get(`/api/v1/offers/resume/${resumeUuid}`)
