import { NextRequest, NextResponse } from 'next/server'

export async function GET(_req: NextRequest) {
  return NextResponse.json([
    {
      name: 'S. Sato',
      quantity: 27,
    },
    {
      name: 'T. Tanaka',
      quantity: 25,
    },
    {
      name: 'S. Suzuki',
      quantity: 18,
    },
    // 他のデータ...
  ])
}
