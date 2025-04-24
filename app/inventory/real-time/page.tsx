"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowUpDown, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample inventory data
const inventoryData = [
  {
    id: 1,
    sku: "PROD-001",
    name: "Office Chair",
    category: "Furniture",
    quantity: 24,
    status: "In Stock",
    lastUpdated: "2023-04-15",
  },
  {
    id: 2,
    sku: "PROD-002",
    name: "Wireless Mouse",
    category: "Electronics",
    quantity: 45,
    status: "In Stock",
    lastUpdated: "2023-04-16",
  },
  {
    id: 3,
    sku: "PROD-003",
    name: "Desk Lamp",
    category: "Lighting",
    quantity: 12,
    status: "Low Stock",
    lastUpdated: "2023-04-14",
  },
  {
    id: 4,
    sku: "PROD-004",
    name: "Notebook",
    category: "Stationery",
    quantity: 100,
    status: "In Stock",
    lastUpdated: "2023-04-17",
  },
  {
    id: 5,
    sku: "PROD-005",
    name: "Headphones",
    category: "Electronics",
    quantity: 0,
    status: "Out of Stock",
    lastUpdated: "2023-04-13",
  },
  {
    id: 6,
    sku: "PROD-006",
    name: "Desk",
    category: "Furniture",
    quantity: 8,
    status: "Low Stock",
    lastUpdated: "2023-04-12",
  },
  {
    id: 7,
    sku: "PROD-007",
    name: "Monitor",
    category: "Electronics",
    quantity: 15,
    status: "In Stock",
    lastUpdated: "2023-04-11",
  },
  {
    id: 8,
    sku: "PROD-008",
    name: "Keyboard",
    category: "Electronics",
    quantity: 30,
    status: "In Stock",
    lastUpdated: "2023-04-10",
  },
  {
    id: 9,
    sku: "PROD-009",
    name: "Pen Set",
    category: "Stationery",
    quantity: 50,
    status: "In Stock",
    lastUpdated: "2023-04-09",
  },
  {
    id: 10,
    sku: "PROD-010",
    name: "Desk Organizer",
    category: "Office Supplies",
    quantity: 5,
    status: "Low Stock",
    lastUpdated: "2023-04-08",
  },
]

export default function RealTimeInventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  // Filter inventory data based on search term and filters
  const filteredInventory = inventoryData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    const matchesStatus = statusFilter === "all" || item.status === statusFilter

    return matchesSearch && matchesCategory && matchesStatus
  })

  // Get unique categories for filter
  const categories = ["all", ...new Set(inventoryData.map((item) => item.category))]
  const statuses = ["all", "In Stock", "Low Stock", "Out of Stock"]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Real-Time Inventory</h1>
          <p className="text-muted-foreground">Monitor and manage your inventory in real-time</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Inventory Overview</CardTitle>
            <CardDescription>View and filter your current inventory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by name or SKU..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
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
                    <TableHead className="w-[100px]">SKU</TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Product Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.sku}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="text-right">{item.quantity}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            item.status === "In Stock"
                              ? "success"
                              : item.status === "Low Stock"
                                ? "warning"
                                : "destructive"
                          }
                        >
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.lastUpdated}</TableCell>
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