import { getAutotaskAPI } from "@/lib/autotask"
import { NextRequest, NextResponse } from "next/server"

// GET - Get a specific ticket
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const ticketID = parseInt(id)

    if (isNaN(ticketID)) {
      return NextResponse.json({ error: "Invalid ticket ID" }, { status: 400 })
    }

    const api = getAutotaskAPI()
    const ticket = await api.getTicket(ticketID)

    return NextResponse.json({ ticket }, { status: 200 })
  } catch (error) {
    console.error("Error fetching ticket:", error)
    return NextResponse.json(
      { error: "Failed to fetch ticket" },
      { status: 500 }
    )
  }
}

// PATCH - Update a ticket
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const ticketID = parseInt(id)

    if (isNaN(ticketID)) {
      return NextResponse.json({ error: "Invalid ticket ID" }, { status: 400 })
    }

    const body = await request.json()
    const api = getAutotaskAPI()

    const ticket = await api.updateTicket(ticketID, body)

    return NextResponse.json({ ticket }, { status: 200 })
  } catch (error) {
    console.error("Error updating ticket:", error)
    return NextResponse.json(
      { error: "Failed to update ticket" },
      { status: 500 }
    )
  }
}
