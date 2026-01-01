"use client"

import { Button } from "@/components/shared/button"
import {
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Loader2,
  MessageSquare,
  Paperclip,
  Send,
  Upload,
  User,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface TicketDetail {
  id: number
  ticketNumber: string
  title: string
  description: string
  status: string
  priority: string
  companyName: string
  contactName: string
  createDate: string
  lastActivityDate: string
  dueDateTime?: string
  slaStatus?: string
  assignedResourceName?: string
  estimatedHours?: number
  hoursToBeScheduled?: number
}

interface Note {
  id: number
  title: string
  description: string
  createDateTime: string
  createdByResourceID?: number
  createdByName?: string
  noteType: string
}

interface Attachment {
  id: number
  title: string
  fileSize: number
  contentType: string
  createDate: string
}

export default function TicketDetailPage() {
  const params = useParams()
  const ticketId = params.id as string

  const [ticket, setTicket] = useState<TicketDetail | null>(null)
  const [notes, setNotes] = useState<Note[]>([])
  const [attachments, setAttachments] = useState<Attachment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isAddingNote, setIsAddingNote] = useState(false)
  const [isUploadingFile, setIsUploadingFile] = useState(false)
  const [newNote, setNewNote] = useState({ title: "", description: "" })

  useEffect(() => {
    fetchTicketDetails()
  }, [ticketId])

  const fetchTicketDetails = async () => {
    setIsLoading(true)

    // Simulate API calls - Replace with actual API calls
    setTimeout(() => {
      setTicket({
        id: parseInt(ticketId),
        ticketNumber: "TKT-00001",
        title: "Email not syncing on mobile device",
        description:
          "I am unable to receive emails on my iPhone. The account is configured correctly but emails are not downloading. I have tried removing and re-adding the account but the issue persists. This is affecting my ability to respond to client emails while out of the office.",
        status: "In Progress",
        priority: "High",
        companyName: "Acme Corporation",
        contactName: "John Doe",
        createDate: "2025-01-10T09:00:00Z",
        lastActivityDate: "2025-01-15T14:30:00Z",
        dueDateTime: "2025-01-16T17:00:00Z",
        slaStatus: "On Track",
        assignedResourceName: "John Smith",
        estimatedHours: 2,
        hoursToBeScheduled: 0.5,
      })

      setNotes([
        {
          id: 1,
          title: "Initial Assessment",
          description:
            "Ticket received and assigned to technician. Will investigate email sync issues on iPhone. Request for device model and iOS version has been sent to customer.",
          createDateTime: "2025-01-10T09:15:00Z",
          createdByName: "Support Team",
          noteType: "Internal",
        },
        {
          id: 2,
          title: "Device Information Received",
          description:
            "Customer has iPhone 14 Pro running iOS 17.2. Email account is Exchange-based. Will check server-side settings and verify ActiveSync policies.",
          createDateTime: "2025-01-10T11:30:00Z",
          createdByName: "John Smith",
          noteType: "Internal",
        },
        {
          id: 3,
          title: "Update on Investigation",
          description:
            "We have identified an issue with the Exchange ActiveSync policy. We are working on updating the policy settings and will test the solution shortly.",
          createDateTime: "2025-01-15T14:30:00Z",
          createdByName: "John Smith",
          noteType: "Customer Visible",
        },
      ])

      setAttachments([
        {
          id: 1,
          title: "screenshot_iphone_error.png",
          fileSize: 245678,
          contentType: "image/png",
          createDate: "2025-01-10T09:05:00Z",
        },
        {
          id: 2,
          title: "email_server_logs.txt",
          fileSize: 12456,
          contentType: "text/plain",
          createDate: "2025-01-10T11:35:00Z",
        },
      ])

      setIsLoading(false)
    }, 1000)
  }

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsAddingNote(true)

    // Simulate API call
    setTimeout(() => {
      const newNoteObj: Note = {
        id: notes.length + 1,
        title: newNote.title,
        description: newNote.description,
        createDateTime: new Date().toISOString(),
        createdByName: "John Doe",
        noteType: "Customer Visible",
      }

      setNotes([...notes, newNoteObj])
      setNewNote({ title: "", description: "" })
      setIsAddingNote(false)
    }, 1000)
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploadingFile(true)

    // Simulate file upload
    setTimeout(() => {
      const newAttachment: Attachment = {
        id: attachments.length + 1,
        title: file.name,
        fileSize: file.size,
        contentType: file.type,
        createDate: new Date().toISOString(),
      }

      setAttachments([...attachments, newAttachment])
      setIsUploadingFile(false)
    }, 2000)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i]
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "text-red-400 bg-red-500/10 border-red-500/20"
      case "High":
        return "text-orange-400 bg-orange-500/10 border-orange-500/20"
      case "Medium":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
      case "Low":
        return "text-green-400 bg-green-500/10 border-green-500/20"
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20"
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <AlertCircle className="w-4 h-4" />
      case "High":
        return <AlertTriangle className="w-4 h-4" />
      case "Medium":
        return <Clock className="w-4 h-4" />
      case "Low":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "text-blue-400 bg-blue-500/10 border-blue-500/20"
      case "In Progress":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
      case "Waiting Customer":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
      case "Complete":
        return "text-green-400 bg-green-500/10 border-green-500/20"
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20"
    }
  }

  const getSLAColor = (slaStatus: string) => {
    switch (slaStatus) {
      case "At Risk":
        return "text-red-400 bg-red-500/10 border-red-500/20"
      case "On Hold":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
      case "On Track":
        return "text-green-400 bg-green-500/10 border-green-500/20"
      case "Met":
        return "text-blue-400 bg-blue-500/10 border-blue-500/20"
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20"
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-slate-950 pt-20 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </main>
    )
  }

  if (!ticket) {
    return (
      <main className="min-h-screen bg-slate-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ticket not found</h2>
          <Link href="/portal/tickets">
            <Button variant="outline">Back to Tickets</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 py-6 px-4 sm:px-8 lg:px-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/portal/tickets"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tickets
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-mono text-gray-500">
                  {ticket.ticketNumber}
                </span>
                <span
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs ${getStatusColor(ticket.status)}`}
                >
                  {ticket.status}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs ${getPriorityColor(ticket.priority)}`}
                >
                  {getPriorityIcon(ticket.priority)}
                  {ticket.priority}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 font-dm-sans">
                {ticket.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {ticket.contactName}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  Created {new Date(ticket.createDate).toLocaleString()}
                </div>
                {ticket.assignedResourceName && (
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    Assigned to {ticket.assignedResourceName}
                  </div>
                )}
              </div>
            </div>

            {/* SLA Card */}
            {ticket.slaStatus && (
              <div className="lg:w-64 bg-slate-900 border border-slate-800 rounded-lg p-4">
                <div className="text-xs text-gray-400 mb-2">SLA Status</div>
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-semibold mb-3 ${getSLAColor(ticket.slaStatus)}`}
                >
                  <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  {ticket.slaStatus}
                </div>
                {ticket.dueDateTime && (
                  <div className="text-sm">
                    <div className="text-gray-400 mb-1">Due Date</div>
                    <div className="text-white font-semibold">
                      {new Date(ticket.dueDateTime).toLocaleDateString()}
                    </div>
                    <div className="text-gray-400">
                      {new Date(ticket.dueDateTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 font-dm-sans flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Description
              </h2>
              <p className="text-gray-300 whitespace-pre-wrap">
                {ticket.description}
              </p>
            </div>

            {/* Notes / Activity */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-6 font-dm-sans flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Activity & Notes
              </h2>

              {/* Notes List */}
              <div className="space-y-4 mb-6">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className="bg-slate-950 border border-slate-700 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-white">
                            {note.title}
                          </h3>
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${
                              note.noteType === "Customer Visible"
                                ? "bg-green-500/10 text-green-400"
                                : "bg-gray-500/10 text-gray-400"
                            }`}
                          >
                            {note.noteType}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400 mb-2">
                          {note.createdByName} •{" "}
                          {new Date(note.createDateTime).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{note.description}</p>
                  </div>
                ))}
              </div>

              {/* Add Note Form */}
              <form onSubmit={handleAddNote} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Add a Comment
                  </label>
                  <input
                    type="text"
                    value={newNote.title}
                    onChange={(e) =>
                      setNewNote({ ...newNote, title: e.target.value })
                    }
                    placeholder="Comment title"
                    required
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors mb-2"
                  />
                  <textarea
                    value={newNote.description}
                    onChange={(e) =>
                      setNewNote({ ...newNote, description: e.target.value })
                    }
                    placeholder="Type your comment here..."
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button type="submit" disabled={isAddingNote}>
                  {isAddingNote ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Adding...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Add Comment
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ticket Details */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 font-dm-sans">
                Ticket Details
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-400 mb-1">Company</div>
                  <div className="text-white">{ticket.companyName}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Contact</div>
                  <div className="text-white">{ticket.contactName}</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-1">Last Updated</div>
                  <div className="text-white">
                    {new Date(ticket.lastActivityDate).toLocaleString()}
                  </div>
                </div>
                {ticket.estimatedHours && (
                  <div>
                    <div className="text-gray-400 mb-1">Estimated Hours</div>
                    <div className="text-white">{ticket.estimatedHours}h</div>
                  </div>
                )}
              </div>
            </div>

            {/* Attachments */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 font-dm-sans flex items-center gap-2">
                <Paperclip className="w-5 h-5 text-orange-400" />
                Attachments ({attachments.length})
              </h3>

              <div className="space-y-2 mb-4">
                {attachments.map((attachment) => (
                  <div
                    key={attachment.id}
                    className="flex items-center justify-between p-3 bg-slate-950 border border-slate-700 rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <FileText className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-white truncate">
                          {attachment.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {formatFileSize(attachment.fileSize)}
                        </div>
                      </div>
                    </div>
                    <button className="p-1.5 hover:bg-slate-800 rounded transition-colors">
                      <Download className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Upload Button */}
              <label className="block">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  disabled={isUploadingFile}
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  disabled={isUploadingFile}
                  onClick={(e) => {
                    e.preventDefault()
                    ;(e.currentTarget.previousElementSibling as HTMLInputElement)?.click()
                  }}
                >
                  {isUploadingFile ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4 mr-2" />
                      Upload File
                    </>
                  )}
                </Button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
