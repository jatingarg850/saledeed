import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory storage (in production, you'd use a database)
let globalPrankState = {
  isActive: false,
  activatedAt: null as number | null,
  activatedBy: null as string | null
}

export async function GET() {
  return NextResponse.json(globalPrankState)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, userAgent } = body

    if (action === 'activate') {
      globalPrankState = {
        isActive: true,
        activatedAt: Date.now(),
        activatedBy: userAgent || 'unknown'
      }
      
      console.log('🎪 GLOBAL PRANK ACTIVATED BY:', userAgent)
      
      return NextResponse.json({ 
        success: true, 
        message: 'Global prank activated for all users!',
        state: globalPrankState 
      })
    } else if (action === 'deactivate') {
      globalPrankState = {
        isActive: false,
        activatedAt: null,
        activatedBy: null
      }
      
      console.log('😇 Global prank deactivated by:', userAgent)
      
      return NextResponse.json({ 
        success: true, 
        message: 'Global prank deactivated!',
        state: globalPrankState 
      })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}