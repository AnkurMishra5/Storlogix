"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowUpDown, Download, Eye, Calendar, Clock } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample calls data
const callsData = [
  {
    id: 1,
    caller: "John Smith",
    company: "Acme Inc",
    type: "Inbound",
    date: "2023-04-15",
    time: "14:30",
    duration: "12:45",
    status: "Completed",
    agent: "Sarah Davis",
  },
  {
    id: 2,
    caller: "Jane Doe",
    company: "XYZ Corp",
    type: "Outbound",
    date: "2023-04-14",
    time: "10:15",
    duration: "08:22",
    status: "Completed",
    agent: "Michael Brown",
  },
  {
    id: 3,
    caller: "Robert Johnson",
    company: "Johnson & Co",
    type: "Inbound",
    date: "2023-04-13",
    time: "09:00",
    duration: "03:15",
    status: "Missed",
    agent: "N/A",
  },
  {
    id: 4,
    caller: "Emily Wilson",
    company: "Wilson Enterprises",
    type: "Outbound",
    date: "2023-04-12",
    time: "16:45",
    duration: "15:30",
    status: "Completed",
    agent: "David Miller",
  },
  {
    id: 5,
    caller: "Michael Brown",
    company: "Brown Industries",
    type: "Inbound",
    date: "2023-04-11",
    time: "11:30",
    duration: "00:00",
    status: "Missed",
    agent: "N/A",
  },
  {
    id: 6,
    caller: "Sarah Davis",
    company: "Davis & Sons",
    type: "Outbound",
    date: "2023-04-10",
    time: "13:20",
    duration: "05:45",
    status: "Completed",
    agent: "Lisa Anderson",
  },
  {
    id: 7,
    caller: "David Miller",
    company: "Miller Group",
    type: "Inbound",
    date: "2023-04-09",
    time: "14:00",
    duration: "10:12",
    status: "Completed",
    agent: "Sarah Davis",
  },
  {
    id: 8,
    caller: "Lisa Anderson",
    company: "Anderson LLC",
    type: "Outbound",
    date: "2023-04-08",
    time: "09:45",
    duration: "07:33",
    status: "Completed",
    agent: "Michael Brown",
  },
]

export default function CallsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter calls data based on search term and filters
  const filteredCalls = callsData.filter((call) => {
    const matchesSearch =
      call.caller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      call.agent.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = typeFilter === "all" || call.type === typeFilter
    const matchesStatus = statusFilter === "all" || call.status === statusFilter

    return matchesSearch && matchesType && matchesStatus
  })

  // Get unique call types and statuses for filters
  const types = ["all", "Inbound", "Outbound"]
  const statuses = ["all", "Completed", "Missed"]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Call Tracking</h1>
          <p className="text-muted-foreground">View and manage call records</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Call Records</CardTitle>
            <CardDescription>View all inbound and outbound calls</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by caller, company or agent..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Call Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type === "all" ? "All Types" : type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status === "all" ? "All Statuses" : status}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[250px]">
                      <div className="flex items-center">
                        Caller
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCalls.map((call) => (
                    <TableRow key={call.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${call.caller.charAt(0)}`} />
                            <AvatarFallback>
                              {call.caller
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{call.caller}</div>
                            <div className="text-sm text-muted-foreground">{call.company}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={call.type === "Inbound" ? "default" : "secondary"}
                          className={call.type === "Inbound" ? "bg-blue-500" : "bg-purple-500"}
                        >
                          {call.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>{call.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span>{call.time}</span>
                        </div>
                      </TableCell>
                      <TableCell>{call.duration}</TableCell>
                      <TableCell>
                        <Badge
                          variant={call.status === "Completed" ? "success" : "destructive"}
                          className={call.status === "Completed" ? "bg-green-500" : "bg-red-500"}
                        >
                          {call.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{call.agent}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" asChild>
                          <a href={`/calls/detail?id=${call.id}`}>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
} 