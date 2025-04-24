"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Package, Truck, Calendar, CreditCard, FileText, MessageSquare } from "lucide-react"

export default function OrderDetailPage() {
  const [activeTab, setActiveTab] = useState("details")

  // Sample order data
  const order = {
    id: "ORD-001",
    customer: "John Smith",
    email: "john.smith@example.com",
    date: "2023-04-15",
    total: 249.99,
    status: "Processing",
    items: [
      { id: 1, name: "Office Chair", sku: "PROD-001", price: 129.99, quantity: 1 },
      { id: 2, name: "Desk Lamp", sku: "PROD-003", price: 39.99, quantity: 2 },
      { id: 3, name: "Wireless Mouse", sku: "PROD-002", price: 24.99, quantity: 1 },
      { id: 4, name: "Notebook", sku: "PROD-004", price: 4.99, quantity: 3 },
    ],
    shipping: {
      address: "123 Main St, Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
      method: "Express Shipping",
      tracking: "TRK123456789",
    },
    payment: {
      method: "Credit Card",
      cardLast4: "4242",
      status: "Paid",
    },
    timeline: [
      { date: "2023-04-15 09:30 AM", status: "Order Placed", description: "Order #ORD-001 was placed" },
      { date: "2023-04-15 10:15 AM", status: "Payment Confirmed", description: "Payment of $249.99 was confirmed" },
      { date: "2023-04-15 02:30 PM", status: "Processing", description: "Order is being processed" },
    ],
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Order Details</h1>
            <p className="text-muted-foreground">View and manage order #{order.id}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Generate Invoice
            </Button>
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Customer
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-blue-100 p-3 mb-4">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium">Order Status</h3>
                <Badge className="mt-2" variant={order.status === "Completed" ? "success" : "default"}>
                  {order.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium">Payment Status</h3>
                <Badge className="mt-2" variant="success">
                  {order.payment.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-purple-100 p-3 mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium">Order Date</h3>
                <p className="mt-2 text-sm">{order.date}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-orange-100 p-3 mb-4">
                  <Truck className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-medium">Shipping Method</h3>
                <p className="mt-2 text-sm">{order.shipping.method}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Order Details</TabsTrigger>
            <TabsTrigger value="customer">Customer Info</TabsTrigger>
            <TabsTrigger value="timeline">Order Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
                <CardDescription>Items included in this order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-gray-100 rounded flex items-center justify-center">
                          <Package className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                    </div>
                  ))}

                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <p className="text-muted-foreground">Subtotal</p>
                      <p className="font-medium">${order.total.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-muted-foreground">Shipping</p>
                      <p className="font-medium">$0.00</p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="text-muted-foreground">Tax</p>
                      <p className="font-medium">$0.00</p>
                    </div>
                    <div className="flex justify-between mt-4 text-lg">
                      <p className="font-bold">Total</p>
                      <p className="font-bold">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
                <CardDescription>Delivery address and tracking details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Shipping Address</h3>
                    <div className="space-y-1 text-sm">
                      <p>{order.customer}</p>
                      <p>{order.shipping.address}</p>
                      <p>
                        {order.shipping.city}, {order.shipping.state} {order.shipping.zip}
                      </p>
                      <p>{order.shipping.country}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Tracking Information</h3>
                    <div className="space-y-1 text-sm">
                      <p>Carrier: FedEx</p>
                      <p>Tracking Number: {order.shipping.tracking}</p>
                      <Button variant="outline" size="sm" className="mt-2">
                        Track Package
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customer" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Customer Information</CardTitle>
                <CardDescription>Details about the customer who placed this order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={`/placeholder.svg?height=64&width=64&text=${order.customer.charAt(0)}`} />
                    <AvatarFallback>
                      {order.customer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{order.customer}</h3>
                    <p className="text-sm text-muted-foreground">{order.email}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-2">Contact Information</h3>
                    <div className="space-y-1 text-sm">
                      <p>Email: {order.email}</p>
                      <p>Phone: +1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Billing Information</h3>
                    <div className="space-y-1 text-sm">
                      <p>Payment Method: {order.payment.method}</p>
                      <p>Card: **** **** **** {order.payment.cardLast4}</p>
                      <p>Billing Address: Same as shipping</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Order History</h3>
                  <div className="text-sm">
                    <p>Total Orders: 5</p>
                    <p>Total Spent: $1,249.95</p>
                    <p>Member Since: January 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Timeline</CardTitle>
                <CardDescription>Track the progress of this order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative border-l-2 border-gray-200 ml-4 pl-6 space-y-8">
                  {order.timeline.map((event, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-blue-500"></div>
                      <div>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                        <h4 className="font-medium">{event.status}</h4>
                        <p className="text-sm">{event.description}</p>
                      </div>
                    </div>
                  ))}

                  <div className="relative opacity-50">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <h4 className="font-medium">Shipped</h4>
                      <p className="text-sm">Order will be shipped soon</p>
                    </div>
                  </div>

                  <div className="relative opacity-50">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <h4 className="font-medium">Delivered</h4>
                      <p className="text-sm">Order will be delivered to customer</p>
                    </div>
                  </div>

                  <div className="relative opacity-50">
                    <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-gray-300"></div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <h4 className="font-medium">Completed</h4>
                      <p className="text-sm">Order will be marked as completed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
} 