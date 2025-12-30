import { getAutotaskAPI } from "@/lib/autotask"
import { NextRequest, NextResponse } from "next/server"

// GET - Get attachments for a ticket
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
    const attachments = await api.getTicketAttachments(ticketID)

    return NextResponse.json({ attachments }, { status: 200 })
  } catch (error) {
    console.error("Error fetching attachments:", error)
    return NextResponse.json(
      { error: "Failed to fetch attachments" },
      { status: 500 }
    )
  }
}

// POST - Upload an attachment to a ticket
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
    const { title, data, contentType } = body

    if (!title || !data || !contentType) {
      return NextResponse.json(
        { error: "Missing required fields: title, data, contentType" },
        { status: 400 }
      )
    }

    const api = getAutotaskAPI()

    const attachment = await api.uploadAttachment(ticketID, {
      title,
      data,
      contentType,
    })

    return NextResponse.json({ attachment }, { status: 201 })
  } catch (error) {
    console.error("Error uploading attachment:", error)
    return NextResponse.json(
      { error: "Failed to upload attachment" },
      { status: 500 }
    )
  }
}
