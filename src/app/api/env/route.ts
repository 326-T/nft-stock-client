export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest) {
  return NextResponse.json({
    baseUrl: process.env.API_BASE_URL,
    apiKey: process.env.API_KEY,
    contractAddress: process.env.CONTRACT_ADDRESS,
  })
}
