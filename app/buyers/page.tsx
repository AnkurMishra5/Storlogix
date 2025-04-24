"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowUpDown, Download, Eye, Edit, Trash, UserPlus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample buyers data
const buyersData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    company: "Acme Inc",
    status: "Active",
    orders: 12,
    lastOrder: "2023-04-15",
    totalSpent: 1249.99,
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    company: "XYZ Corp",
    status: "Active",
    orders: 8,
    lastOrder: "2023-04-10",
    totalSpent: 879.5,
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    company: "Johnson & Co",
    status: "Inactive",
    orders: 3,
    lastOrder: "2023-03-22",
    totalSpent: 349.99,
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    company: "Wilson Enterprises",
    status: "Active",
    orders: 15,
    lastOrder: "2023-04-17",
    totalSpent: 1599.95,
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    company: "Brown Industries",
    status: "Inactive",
    orders: 5,
    lastOrder: "2023-02-28",
    totalSpent: 499.99,
  },
  {
    id: 6,
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
    company: "Davis & Sons",
    status: "Active",
    orders: 9,
    lastOrder: "2023-04-05",
    totalSpent: 899.99,
  },
  {
    id: 7,
    name: "David Miller",
    email: "david.miller@example.com",
    company: "Miller Group",
    status: "Active",
    orders: 7,
    lastOrder: "2023-04-12",
    totalSpent: 749.95,
  },
  {
    id: 8,
    name: "Lisa Anderson",
    email: "lisa.anderson@example.com",
    company: "Anderson LLC",
    status: "Active",
    orders: 11,
    lastOrder: "2023-04-08",
    totalSpent: 1149.99,
  },
]

export default function BuyersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter buyers data based on search term and filters
  const filteredBuyers = buyersData.filter((buyer) => {
    const matchesSearch =
      buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buyer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      buyer.company.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || buyer.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Get unique statuses for filter
  const statuses = ["all", "Active", "Inactive"]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Buyer Data Management</h1>
            <p className="text-muted-foreground">View and manage your buyers and clients</p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add New Buyer
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Buyers</CardTitle>
            <CardDescription>View and manage all buyers and clients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name, email or company..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
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
                        Buyer
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Orders</TableHead>
                    <TableHead>Last Order</TableHead>
                    <TableHead className="text-right">Total Spent</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBuyers.map((buyer) => (
                    <TableRow key={buyer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${buyer.name.charAt(0)}`} />
                            <AvatarFallback>
                              {buyer.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{buyer.name}</div>
                            <div className="text-sm text-muted-foreground">{buyer.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{buyer.company}</TableCell>
                      <TableCell>
                        <Badge variant={buyer.status === "Active" ? "success" : "secondary"}>{buyer.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{buyer.orders}</TableCell>
                      <TableCell>{buyer.lastOrder}</TableCell>
                      <TableCell className="text-right">${buyer.totalSpent.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1" />
                                <circle cx="12" cy="5" r="1" />
                                <circle cx="12" cy="19" r="1" />
                              </svg>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              <span>View Details</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit Buyer</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
                              <span>Delete Buyer</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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