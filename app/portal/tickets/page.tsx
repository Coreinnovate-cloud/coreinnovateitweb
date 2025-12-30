"use client"

import { Button } from "@/components/shared/button"
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Filter,
  LogOut,
  Paperclip,
  Plus,
  RefreshCw,
  Search,
  Ticket,
  TrendingUp,
  User,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface PortalUser {
  email: string
  companyID: number
  contactID: number
  name: string
  companyName: string
}

interface TicketItem {
  id: number
  ticketNumber: string
  title: string
  description: string
  status: string
  priority: string
  createDate: string
  lastActivityDate: string
  dueDateTime?: string
  slaStatus?: string
  assignedResourceName?: string
  hasAttachments?: boolean
}

export default function PortalTicketsPage() {
  const router = useRouter()
  const [user, setUser] = useState<PortalUser | null>(null)
  const [tickets, setTickets] = useState<TicketItem[]>([])
  const [filteredTickets, setFilteredTickets] = useState<TicketItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("portal_user")
    if (!storedUser) {
      router.push("/portal/login")
      return
    }

    const userData = JSON.parse(storedUser)
    setUser(userData)

    // Fetch tickets
    fetchTickets(userData.contactID)
  }, [router])

  useEffect(() => {
    filterTickets()
  }, [tickets, searchTerm, statusFilter, priorityFilter])

  const fetchTickets = async (contactID: number) => {
    setIsLoading(true)
    try {
      // Simulate API call - Replace with actual API call
      setTimeout(() => {
        const mockTickets: TicketItem[] = [
          {
            id: 12345,
            ticketNumber: "TKT-00001",
            title: "Email not syncing on mobile device",
            description: "Unable to receive emails on iPhone",
            status: "In Progress",
            priority: "High",
            createDate: "2025-01-10T09:00:00Z",
            lastActivityDate: "2025-01-15T14:30:00Z",
            dueDateTime: "2025-01-16T17:00:00Z",
            slaStatus: "On Track",
            assignedResourceName: "John Smith",
            hasAttachments: true,
          },
          {
            id: 12346,
            ticketNumber: "TKT-00002",
            title: "VPN connection keeps dropping",
            description: "VPN disconnects every 30 minutes",
            status: "New",
            priority: "Critical",
            createDate: "2025-01-15T11:20:00Z",
            lastActivityDate: "2025-01-15T11:20:00Z",
            dueDateTime: "2025-01-15T15:00:00Z",
            slaStatus: "At Risk",
            assignedResourceName: "Sarah Johnson",
            hasAttachments: false,
          },
          {
            id: 12347,
            ticketNumber: "TKT-00003",
            title: "Request for additional software license",
            description: "Need Adobe Creative Cloud license for new designer",
            status: "Complete",
            priority: "Medium",
            createDate: "2025-01-05T10:00:00Z",
            lastActivityDate: "2025-01-08T16:45:00Z",
            slaStatus: "Met",
            assignedResourceName: "Mike Wilson",
            hasAttachments: false,
          },
          {
            id: 12348,
            ticketNumber: "TKT-00004",
            title: "Printer not connecting to network",
            description: "Office printer shows offline status",
            status: "In Progress",
            priority: "Low",
            createDate: "2025-01-12T13:15:00Z",
            lastActivityDate: "2025-01-14T10:20:00Z",
            dueDateTime: "2025-01-18T17:00:00Z",
            slaStatus: "On Track",
            assignedResourceName: "John Smith",
            hasAttachments: true,
          },
          {
            id: 12349,
            ticketNumber: "TKT-00005",
            title: "Website slow loading times",
            description: "Website takes 10+ seconds to load",
            status: "Waiting Customer",
            priority: "High",
            createDate: "2025-01-13T08:30:00Z",
            lastActivityDate: "2025-01-14T15:10:00Z",
            dueDateTime: "2025-01-17T17:00:00Z",
            slaStatus: "On Hold",
            assignedResourceName: "Sarah Johnson",
            hasAttachments: false,
          },
        ]

        setTickets(mockTickets)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error("Error fetching tickets:", error)
      setIsLoading(false)
    }
  }

  const filterTickets = () => {
    let filtered = [...tickets]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (ticket) =>
          ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ticket.ticketNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((ticket) => ticket.status === statusFilter)
    }

    // Priority filter
    if (priorityFilter !== "all") {
      filtered = filtered.filter((ticket) => ticket.priority === priorityFilter)
    }

    setFilteredTickets(filtered)
  }

  const handleLogout = () => {
    localStorage.removeItem("portal_user")
    router.push("/portal/login")
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
        return "text-red-400"
      case "On Hold":
        return "text-yellow-400"
      case "On Track":
        return "text-green-400"
      case "Met":
        return "text-blue-400"
      default:
        return "text-gray-400"
    }
  }

  const getTicketStats = () => {
    return {
      total: tickets.length,
      open: tickets.filter((t) => t.status !== "Complete").length,
      critical: tickets.filter((t) => t.priority === "Critical").length,
      atRisk: tickets.filter((t) => t.slaStatus === "At Risk").length,
    }
  }

  const stats = getTicketStats()

  if (!user) {
    return null
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 py-8 px-4 sm:px-8 lg:px-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 font-dm-sans">
                My Support Tickets
              </h1>
              <p className="text-gray-400">
                Welcome back, {user.name} - {user.companyName}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/autotask-integration">
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  New Ticket
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="border-red-500/50 text-red-400 hover:bg-red-500/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Ticket className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.total}</div>
                  <div className="text-xs text-gray-400">Total Tickets</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.open}</div>
                  <div className="text-xs text-gray-400">Open Tickets</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.critical}</div>
                  <div className="text-xs text-gray-400">Critical</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.atRisk}</div>
                  <div className="text-xs text-gray-400">SLA At Risk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 px-4 sm:px-8 lg:px-12 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="In Progress">In Progress</option>
                <option value="Waiting Customer">Waiting Customer</option>
                <option value="Complete">Complete</option>
              </select>
            </div>

            {/* Priority Filter */}
            <div className="md:w-48">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
              >
                <option value="all">All Priorities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            {/* Refresh */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => user && fetchTickets(user.contactID)}
              disabled={isLoading}
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            </Button>
          </div>
        </div>
      </section>

      {/* Tickets List */}
      <section className="py-8 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            </div>
          ) : filteredTickets.length === 0 ? (
            <div className="text-center py-20">
              <Ticket className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No tickets found</h3>
              <p className="text-gray-400 mb-6">
                {searchTerm || statusFilter !== "all" || priorityFilter !== "all"
                  ? "Try adjusting your filters"
                  : "Create your first support ticket to get started"}
              </p>
              <Link href="/autotask-integration">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Ticket
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTickets.map((ticket) => (
                <Link
                  key={ticket.id}
                  href={`/portal/tickets/${ticket.id}`}
                  className="block bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
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
                        {ticket.hasAttachments && (
                          <span className="inline-flex items-center gap-1.5 text-gray-400 text-xs">
                            <Paperclip className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {ticket.title}
                      </h3>
                      <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                        {ticket.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        {ticket.assignedResourceName && (
                          <div className="flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" />
                            {ticket.assignedResourceName}
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          Created {new Date(ticket.createDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <RefreshCw className="w-3.5 h-3.5" />
                          Updated{" "}
                          {new Date(ticket.lastActivityDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    {/* SLA Status */}
                    {ticket.slaStatus && (
                      <div className="text-right">
                        <div
                          className={`text-sm font-semibold mb-1 ${getSLAColor(ticket.slaStatus)}`}
                        >
                          SLA: {ticket.slaStatus}
                        </div>
                        {ticket.dueDateTime && (
                          <div className="text-xs text-gray-500">
                            Due:{" "}
                            {new Date(ticket.dueDateTime).toLocaleDateString()}{" "}
                            {new Date(ticket.dueDateTime).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
