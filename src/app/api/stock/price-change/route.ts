import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest) {
  return NextResponse.json([
    { month: '1', price: 30000 },
    { month: '2', price: 31000 },
    { month: '3', price: 32000 },
    { month: '4', price: 33000 },
    { month: '5', price: 34000 },
    { month: '6', price: 29000 },
    { month: '7', price: 28000 },
    { month: '8', price: 29000 },
    { month: '9', price: 30000 },
    { month: '10', price: 31000 },
    { month: '11', price: 32000 },
    { month: '12', price: 33000 },
  ])
}
