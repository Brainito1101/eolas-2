import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, useCase } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    console.log('New lead captured:', { name, email, company, useCase })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your interest! We\'ll be in touch soon.',
        data: { name, email, company, useCase }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}