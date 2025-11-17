import { NextResponse } from 'next/server';

// In-memory storage for global prank state
// This persists across all requests on the server
let globalPrankState = {
  isActive: false,
  activatedAt: null as number | null,
  lastUpdated: Date.now()
};

// GET - Fetch prank state
export async function GET() {
  try {
    return NextResponse.json({
      isActive: globalPrankState.isActive,
      activatedAt: globalPrankState.activatedAt,
      lastUpdated: globalPrankState.lastUpdated
    });
  } catch (error) {
    console.error('Error fetching prank state:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prank state', isActive: false },
      { status: 500 }
    );
  }
}

// POST - Update prank state
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { isActive } = body;

    globalPrankState = {
      isActive: Boolean(isActive),
      activatedAt: isActive ? Date.now() : null,
      lastUpdated: Date.now()
    };

    console.log('🎭 Global prank state updated:', globalPrankState);

    return NextResponse.json({
      success: true,
      ...globalPrankState
    });
  } catch (error) {
    console.error('Error updating prank state:', error);
    return NextResponse.json(
      { error: 'Failed to update prank state', success: false },
      { status: 500 }
    );
  }
}
