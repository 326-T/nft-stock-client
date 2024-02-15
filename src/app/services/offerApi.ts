import { Offer, OfferRequest } from '@/types/offer'
import axios, { AxiosPromise } from 'axios'
import { UUID } from 'crypto'

export const findOffersByResumeUuid = (resumeUuid: UUID): AxiosPromise<Offer[]> =>
  axios.get(`/api/v1/offers/resume/${resumeUuid}`)

export const postOffer = (body: OfferRequest): AxiosPromise<Offer> =>
  axios.post('/api/v1/offers', body)

export const expectPayment = (offerUuid: UUID): AxiosPromise<Offer> =>
  axios.patch(`/api/v1/offers/${offerUuid}/payment`)

export const acceptOffer = (offerUuid: UUID): AxiosPromise<Offer> =>
  axios.patch(`/api/v1/offers/${offerUuid}/accept`)

export const rejectOffer = (offerUuid: UUID): AxiosPromise<Offer> =>
  axios.patch(`/api/v1/offers/${offerUuid}/reject`)
