"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowUpDown, Download, Eye, Edit, Trash } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample orders data
const ordersData = [
  {
    id: "ORD-001",
    customer: "John Smith",
    date: "2023-04-15",
    total: 249.99,
    status: "Completed",
    items: 3,
  },
  {
    id: "ORD-002",
    customer: "Jane Doe",
    date: "2023-04-16",
    total: 124.5,
    status: "Processing",
    items: 2,
  },
  {
    id: "ORD-003",
    customer: "Robert Johnson",
    date: "2023-04-14",
    total: 599.99,
    status: "Shipped",
    items: 1,
  },
  {
    id: "ORD-004",
    customer: "Emily Wilson",
    date: "2023-04-17",
    total: 74.95,
    status: "Processing",
    items: 4,
  },
  {
    id: "ORD-005",
    customer: "Michael Brown",
    date: "2023-04-13",
    total: 349.99,
    status: "Cancelled",
    items: 2,
  },
  {
    id: "ORD-006",
    customer: "Sarah Davis",
    date: "2023-04-12",
    total: 199.99,
    status: "Completed",
    items: 1,
  },
  {
    id: "ORD-007",
    customer: "David Miller",
    date: "2023-04-11",
    total: 89.95,
    status: "Shipped",
    items: 3,
  },
  {
    id: "ORD-008",
    customer: "Lisa Anderson",
    date: "2023-04-10",
    total: 149.99,
    status: "Processing",
    items: 2,
  },
  {
    id: "ORD-009",
    customer: "James Wilson",
    date: "2023-04-09",
    total: 299.99,
    status: "Completed",
    items: 5,
  },
  {
    id: "ORD-010",
    customer: "Patricia Moore",
    date: "2023-04-08",
    total: 79.99,
    status: "Cancelled",
    items: 1,
  },
]

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter orders data based on search term and filters
  const filteredOrders = ordersData.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Get unique statuses for filter
  const statuses = ["all", "Processing", "Shipped", "Completed", "Cancelled"]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Order Management</h1>
          <p className="text-muted-foreground">View and manage customer orders</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>View and manage all customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by order ID or customer..."
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
                    <TableHead className="w-[100px]">Order ID</TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Customer
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            order.status === "Completed"
                              ? "success"
                              : order.status === "Processing"
                                ? "default"
                                : order.status === "Shipped"
                                  ? "warning"
                                  : "destructive"
                          }
                        >
                          {order.status}
                        </Badge>
                      </TableCell>
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
                              <span>Edit Order</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash className="mr-2 h-4 w-4" />
                              <span>Cancel Order</span>
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