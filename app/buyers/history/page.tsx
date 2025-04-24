"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Calendar, MessageSquare, Phone, Mail, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Sample interaction history data
const interactionData = [
  {
    id: 1,
    buyer: "John Smith",
    company: "Acme Inc",
    type: "Email",
    date: "2023-04-15 14:30",
    subject: "Order Confirmation",
    content: "Thank you for your order. Your order #ORD-001 has been confirmed and is being processed.",
  },
  {
    id: 2,
    buyer: "Jane Doe",
    company: "XYZ Corp",
    type: "Call",
    date: "2023-04-14 10:15",
    subject: "Product Inquiry",
    content:
      "Customer called to inquire about product availability. Informed that items will be back in stock next week.",
  },
  {
    id: 3,
    buyer: "Robert Johnson",
    company: "Johnson & Co",
    type: "Meeting",
    date: "2023-04-13 09:00",
    subject: "Quarterly Review",
    content:
      "Met with client to discuss quarterly performance and upcoming orders. Client expressed satisfaction with service.",
  },
  {
    id: 4,
    buyer: "Emily Wilson",
    company: "Wilson Enterprises",
    type: "Email",
    date: "2023-04-12 16:45",
    subject: "Invoice Payment",
    content: "Received payment for invoice #INV-2023-042. Sent receipt and thank you note.",
  },
  {
    id: 5,
    buyer: "Michael Brown",
    company: "Brown Industries",
    type: "Call",
    date: "2023-04-11 11:30",
    subject: "Support Request",
    content: "Customer called with issue regarding recent delivery. Escalated to shipping department for resolution.",
  },
  {
    id: 6,
    buyer: "Sarah Davis",
    company: "Davis & Sons",
    type: "Email",
    date: "2023-04-10 13:20",
    subject: "New Product Announcement",
    content:
      "Sent email about new product line launching next month. Client responded with interest in placing pre-order.",
  },
  {
    id: 7,
    buyer: "David Miller",
    company: "Miller Group",
    type: "Meeting",
    date: "2023-04-09 14:00",
    subject: "Contract Negotiation",
    content: "Met to discuss terms of new annual contract. Agreed on 5% volume discount for guaranteed minimum order.",
  },
  {
    id: 8,
    buyer: "Lisa Anderson",
    company: "Anderson LLC",
    type: "Call",
    date: "2023-04-08 09:45",
    subject: "Order Status",
    content:
      "Customer called to check on order status. Confirmed shipment will go out tomorrow with tracking information.",
  },
]

export default function InteractionHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [typeFilter, setTypeFilter] = useState("all")
  const [selectedInteraction, setSelectedInteraction] = useState<(typeof interactionData)[0] | null>(null)

  // Filter interaction data based on search term and filters
  const filteredInteractions = interactionData.filter((interaction) => {
    const matchesSearch =
      interaction.buyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interaction.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      interaction.subject.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = typeFilter === "all" || interaction.type === typeFilter

    return matchesSearch && matchesType
  })

  // Get unique interaction types for filter
  const types = ["all", "Email", "Call", "Meeting"]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Interaction History Viewer</h1>
          <p className="text-muted-foreground">View and analyze buyer interaction history</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Interaction History</CardTitle>
                <CardDescription>View all buyer interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search by buyer, company or subject..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="flex gap-2">
                    <Select value={typeFilter} onValueChange={setTypeFilter}>
                      <SelectTrigger className="w-[180px]">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {types.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type === "all" ? "All Types" : type}
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
                        <TableHead className="w-[250px]">Buyer</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Subject</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredInteractions.map((interaction) => (
                        <TableRow
                          key={interaction.id}
                          className="cursor-pointer hover:bg-muted/50"
                          onClick={() => setSelectedInteraction(interaction)}
                        >
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage
                                  src={`/placeholder.svg?height=32&width=32&text=${interaction.buyer.charAt(0)}`}
                                />
                                <AvatarFallback>
                                  {interaction.buyer
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{interaction.buyer}</div>
                                <div className="text-sm text-muted-foreground">{interaction.company}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                interaction.type === "Email"
                                  ? "default"
                                  : interaction.type === "Call"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {interaction.type === "Email" && <Mail className="mr-1 h-3 w-3" />}
                              {interaction.type === "Call" && <Phone className="mr-1 h-3 w-3" />}
                              {interaction.type === "Meeting" && <Calendar className="mr-1 h-3 w-3" />}
                              {interaction.type}
                            </Badge>
                          </TableCell>
                          <TableCell>{interaction.date}</TableCell>
                          <TableCell>{interaction.subject}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Interaction Details</CardTitle>
                <CardDescription>View details of selected interaction</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedInteraction ? (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`/placeholder.svg?height=48&width=48&text=${selectedInteraction.buyer.charAt(0)}`}
                        />
                        <AvatarFallback>
                          {selectedInteraction.buyer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-lg">{selectedInteraction.buyer}</div>
                        <div className="text-sm text-muted-foreground">{selectedInteraction.company}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Type:</div>
                      <div>
                        <Badge
                          variant={
                            selectedInteraction.type === "Email"
                              ? "default"
                              : selectedInteraction.type === "Call"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {selectedInteraction.type === "Email" && <Mail className="mr-1 h-3 w-3" />}
                          {selectedInteraction.type === "Call" && <Phone className="mr-1 h-3 w-3" />}
                          {selectedInteraction.type === "Meeting" && <Calendar className="mr-1 h-3 w-3" />}
                          {selectedInteraction.type}
                        </Badge>
                      </div>
                      <div className="text-muted-foreground">Date:</div>
                      <div>{selectedInteraction.date}</div>
                      <div className="text-muted-foreground">Subject:</div>
                      <div className="font-medium">{selectedInteraction.subject}</div>
                    </div>

                    <div className="pt-2 border-t">
                      <div className="text-sm text-muted-foreground mb-2">Content:</div>
                      <div className="text-sm">{selectedInteraction.content}</div>
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Reply
                      </Button>
                      <Button size="sm">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[300px] text-center text-muted-foreground">
                    <MessageSquare className="h-12 w-12 mb-4 opacity-20" />
                    <p>Select an interaction to view details</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 