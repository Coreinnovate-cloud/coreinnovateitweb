import { getAutotaskAPI } from "@/lib/autotask"
import { NextRequest, NextResponse } from "next/server"

// GET - Get notes for a ticket
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ticketID = parseInt(params.id)

    if (isNaN(ticketID)) {
      return NextResponse.json({ error: "Invalid ticket ID" }, { status: 400 })
    }

    const api = getAutotaskAPI()
    const notes = await api.getTicketNotes(ticketID)

    return NextResponse.json({ notes }, { status: 200 })
  } catch (error) {
    console.error("Error fetching notes:", error)
    return NextResponse.json(
      { error: "Failed to fetch notes" },
      { status: 500 }
    )
  }
}

// POST - Add a note to a ticket
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const ticketID = parseInt(params.id)

    if (isNaN(ticketID)) {
      return NextResponse.json({ error: "Invalid ticket ID" }, { status: 400 })
    }

    const body = await request.json()
    const { title, description, noteType, publish } = body

    if (!title || !description) {
      return NextResponse.json(
        { error: "Missing required fields: title, description" },
        { status: 400 }
      )
    }

    const api = getAutotaskAPI()

    const noteData = {
      ticketID,
      title,
      description,
      noteType: noteType || 1, // Default to General
      publish: publish !== undefined ? publish : 1, // Default to publish
    }

    const note = await api.addTicketNote(noteData)

    return NextResponse.json({ note }, { status: 201 })
  } catch (error) {
    console.error("Error adding note:", error)
    return NextResponse.json({ error: "Failed to add note" }, { status: 500 })
  }
}
