import { getAutotaskAPI } from "@/lib/autotask"
import { NextRequest, NextResponse } from "next/server"

// GET - List tickets for a company or contact
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const companyID = searchParams.get("companyID")
    const contactID = searchParams.get("contactID")

    if (!companyID && !contactID) {
      return NextResponse.json(
        { error: "Either companyID or contactID is required" },
        { status: 400 }
      )
    }

    const api = getAutotaskAPI()
    let tickets

    if (contactID) {
      tickets = await api.getTicketsByContact(parseInt(contactID))
    } else if (companyID) {
      tickets = await api.getTicketsByCompany(parseInt(companyID))
    }

    return NextResponse.json({ tickets }, { status: 200 })
  } catch (error) {
    console.error("Error fetching tickets:", error)
    return NextResponse.json(
      { error: "Failed to fetch tickets" },
      { status: 500 }
    )
  }
}

// POST - Create a new ticket
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      title,
      description,
      companyID,
      contactID,
      priority,
      status,
      queueID,
      issueType,
      subIssueType,
    } = body

    if (!title || !description || !companyID || !contactID) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: title, description, companyID, contactID",
        },
        { status: 400 }
      )
    }

    const api = getAutotaskAPI()

    const ticketData = {
      title,
      description,
      companyID: parseInt(companyID),
      contactID: parseInt(contactID),
      priority: priority || 3, // Default to Medium
      status: status || 1, // Default to New
      queueID: queueID ? parseInt(queueID) : undefined,
      issueType: issueType || undefined,
      subIssueType: subIssueType || undefined,
    }

    const ticket = await api.createTicket(ticketData)

    return NextResponse.json({ ticket }, { status: 201 })
  } catch (error) {
    console.error("Error creating ticket:", error)
    return NextResponse.json(
      { error: "Failed to create ticket" },
      { status: 500 }
    )
  }
}
