import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest) {
  return NextResponse.json([
    { month: '1', price: 2000000 },
    { month: '8', price: 2500000 },
    { month: '10', price: 2600000 },
    { month: '11', price: 2700000 },
    { month: '12', price: 3000000 },
  ])
}
