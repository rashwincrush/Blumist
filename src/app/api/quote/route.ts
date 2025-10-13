import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Log the quote request to console
    console.log('=== QUOTE REQUEST ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Data:', JSON.stringify(data, null, 2))
    console.log('====================')
    
    // In production, you would:
    // 1. Send email notification
    // 2. Store in database
    // 3. Integrate with CRM (e.g., Formspree, Supabase, etc.)
    
    return NextResponse.json({ 
      ok: true, 
      message: 'Quote request received successfully' 
    })
  } catch (error) {
    console.error('Quote submission error:', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to process quote request' },
      { status: 500 }
    )
  }
}
