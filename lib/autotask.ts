// Autotask REST API Configuration and Helper Functions

export interface AutotaskConfig {
  apiUrl: string
  username: string
  secret: string
  integrationCode: string
}

export interface AutotaskTicket {
  id: number
  ticketNumber: string
  title: string
  description: string
  status: string
  priority: string
  companyID: number
  companyName?: string
  contactID: number
  contactName?: string
  createDate: string
  lastActivityDate: string
  dueDateTime?: string
  estimatedHours?: number
  hoursToBeScheduled?: number
  issueType?: string
  subIssueType?: string
  queueID?: number
  assignedResourceID?: number
  assignedResourceName?: string
  serviceLevelAgreementID?: string
  slaStatus?: string
}

export interface AutotaskAttachment {
  id: number
  title: string
  data: string
  fullPath: string
  attachmentType: number
  contentType: string
  fileSize: number
  createDate: string
  createdByContactID: number
}

export interface TicketNote {
  id: number
  ticketID: number
  title: string
  description: string
  noteType: string
  publish: number
  createDateTime: string
  createdByResourceID?: number
  lastActivityDate: string
}

export class AutotaskAPI {
  private config: AutotaskConfig
  private baseUrl: string

  constructor(config: AutotaskConfig) {
    this.config = config
    this.baseUrl = `${config.apiUrl}/v1.0`
  }

  private getHeaders(): HeadersInit {
    const credentials = Buffer.from(
      `${this.config.username}:${this.config.secret}`
    ).toString("base64")

    return {
      "Content-Type": "application/json",
      Authorization: `Basic ${credentials}`,
      "ApiIntegrationCode": this.config.integrationCode,
    }
  }

  // Get all tickets for a company
  async getTicketsByCompany(companyID: number): Promise<AutotaskTicket[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/Tickets/query?search={"filter":[{"op":"eq","field":"companyID","value":"${companyID}"}]}`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      )

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error("Error fetching tickets:", error)
      throw error
    }
  }

  // Get tickets for a specific contact
  async getTicketsByContact(contactID: number): Promise<AutotaskTicket[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/Tickets/query?search={"filter":[{"op":"eq","field":"contactID","value":"${contactID}"}]}`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      )

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error("Error fetching tickets:", error)
      throw error
    }
  }

  // Get a specific ticket by ID
  async getTicket(ticketID: number): Promise<AutotaskTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/Tickets/${ticketID}`, {
        method: "GET",
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.item
    } catch (error) {
      console.error("Error fetching ticket:", error)
      throw error
    }
  }

  // Create a new ticket
  async createTicket(ticketData: Partial<AutotaskTicket>): Promise<AutotaskTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/Tickets`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(ticketData),
      })

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.itemId
    } catch (error) {
      console.error("Error creating ticket:", error)
      throw error
    }
  }

  // Update an existing ticket
  async updateTicket(
    ticketID: number,
    updates: Partial<AutotaskTicket>
  ): Promise<AutotaskTicket> {
    try {
      const response = await fetch(`${this.baseUrl}/Tickets/${ticketID}`, {
        method: "PATCH",
        headers: this.getHeaders(),
        body: JSON.stringify(updates),
      })

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.item
    } catch (error) {
      console.error("Error updating ticket:", error)
      throw error
    }
  }

  // Get ticket notes
  async getTicketNotes(ticketID: number): Promise<TicketNote[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/TicketNotes/query?search={"filter":[{"op":"eq","field":"ticketID","value":"${ticketID}"}]}`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      )

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error("Error fetching ticket notes:", error)
      throw error
    }
  }

  // Add a note to a ticket
  async addTicketNote(noteData: Partial<TicketNote>): Promise<TicketNote> {
    try {
      const response = await fetch(`${this.baseUrl}/TicketNotes`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify(noteData),
      })

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.itemId
    } catch (error) {
      console.error("Error adding ticket note:", error)
      throw error
    }
  }

  // Get attachments for a ticket
  async getTicketAttachments(ticketID: number): Promise<AutotaskAttachment[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/Tickets/${ticketID}/Attachments`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      )

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error("Error fetching attachments:", error)
      throw error
    }
  }

  // Upload an attachment to a ticket
  async uploadAttachment(
    ticketID: number,
    attachmentData: {
      title: string
      data: string // Base64 encoded
      contentType: string
    }
  ): Promise<AutotaskAttachment> {
    try {
      const response = await fetch(
        `${this.baseUrl}/Tickets/${ticketID}/Attachments`,
        {
          method: "POST",
          headers: this.getHeaders(),
          body: JSON.stringify(attachmentData),
        }
      )

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.itemId
    } catch (error) {
      console.error("Error uploading attachment:", error)
      throw error
    }
  }

  // Get companies
  async getCompanies(): Promise<any[]> {
    try {
      const response = await fetch(`${this.baseUrl}/Companies/query`, {
        method: "GET",
        headers: this.getHeaders(),
      })

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error("Error fetching companies:", error)
      throw error
    }
  }

  // Get contacts for a company
  async getContactsByCompany(companyID: number): Promise<any[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/Contacts/query?search={"filter":[{"op":"eq","field":"companyID","value":"${companyID}"}]}`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      )

      if (!response.ok) {
        throw new Error(`Autotask API error: ${response.statusText}`)
      }

      const data = await response.json()
      return data.items || []
    } catch (error) {
      console.error("Error fetching contacts:", error)
      throw error
    }
  }
}

// Helper function to get Autotask API instance
export function getAutotaskAPI(): AutotaskAPI {
  const config: AutotaskConfig = {
    apiUrl: process.env.AUTOTASK_API_URL || "",
    username: process.env.AUTOTASK_USERNAME || "",
    secret: process.env.AUTOTASK_SECRET || "",
    integrationCode: process.env.AUTOTASK_INTEGRATION_CODE || "",
  }

  return new AutotaskAPI(config)
}
