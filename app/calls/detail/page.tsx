"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Phone, Calendar, Clock, User, Download, FileText, Play, Pause } from "lucide-react"

export default function CallDetailPage() {
  const searchParams = useSearchParams()
  const callId = searchParams.get("id") || "1"
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeTab, setActiveTab] = useState("details")

  // Sample call data
  const call = {
    id: Number.parseInt(callId),
    caller: "John Smith",
    company: "Acme Inc",
    phone: "+1 (555) 123-4567",
    type: "Inbound",
    date: "2023-04-15",
    time: "14:30",
    duration: "12:45",
    status: "Completed",
    agent: "Sarah Davis",
    notes:
      "Customer called regarding their recent order #ORD-001. They wanted to confirm the shipping details and expected delivery date. I provided the tracking information and assured them that the package is on its way and should arrive by April 18th. Customer was satisfied with the response.",
    transcript: [
      { speaker: "System", time: "14:30:00", text: "Call connected" },
      {
        speaker: "Agent",
        time: "14:30:05",
        text: "Thank you for calling Storlogix. This is Sarah. How may I help you today?",
      },
      {
        speaker: "Customer",
        time: "14:30:12",
        text: "Hi Sarah, this is John Smith from Acme Inc. I'm calling about my recent order.",
      },
      {
        speaker: "Agent",
        time: "14:30:20",
        text: "Of course, John. I'd be happy to help you with that. Could you please provide your order number?",
      },
      { speaker: "Customer", time: "14:30:28", text: "Yes, it's ORD-001." },
      { speaker: "Agent", time: "14:30:35", text: "Thank you. Let me pull up that information for you..." },
      {
        speaker: "Agent",
        time: "14:30:45",
        text: "I can see your order was processed on April 12th and has been shipped. Would you like the tracking information?",
      },
      { speaker: "Customer", time: "14:30:55", text: "Yes, please. And when can I expect it to arrive?" },
      {
        speaker: "Agent",
        time: "14:31:05",
        text: "The tracking number is TRK123456789. According to the shipping information, your package should arrive by April 18th.",
      },
      { speaker: "Customer", time: "14:31:20", text: "Great, thank you for the information." },
      { speaker: "Agent", time: "14:31:25", text: "Is there anything else I can help you with today?" },
      { speaker: "Customer", time: "14:31:30", text: "No, that's all I needed. Thank you for your help." },
      {
        speaker: "Agent",
        time: "14:31:35",
        text: "You're welcome. Thank you for choosing Storlogix. Have a great day!",
      },
      { speaker: "Customer", time: "14:31:42", text: "You too. Goodbye." },
      { speaker: "System", time: "14:31:45", text: "Call disconnected" },
    ],
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Call Details</h1>
            <p className="text-muted-foreground">
              Call #{call.id} with {call.caller}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Export Notes
            </Button>
            <Button>
              <Phone className="mr-2 h-4 w-4" />
              Call Back
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-blue-100 p-3 mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium">Call Type</h3>
                <Badge className="mt-2" variant={call.type === "Inbound" ? "default" : "secondary"}>
                  {call.type}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium">Duration</h3>
                <p className="mt-2 text-sm">{call.duration}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-purple-100 p-3 mb-4">
                  <Calendar className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-medium">Date & Time</h3>
                <p className="mt-2 text-sm">
                  {call.date} {call.time}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="rounded-full bg-orange-100 p-3 mb-4">
                  <User className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-medium">Agent</h3>
                <p className="mt-2 text-sm">{call.agent}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Call Details</TabsTrigger>
            <TabsTrigger value="transcript">Call Transcript</TabsTrigger>
            <TabsTrigger value="recording">Call Recording</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Caller Information</CardTitle>
                <CardDescription>Details about the caller</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={`/placeholder.svg?height=64&width=64&text=${call.caller.charAt(0)}`} />
                    <AvatarFallback>
                      {call.caller
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-medium">{call.caller}</h3>
                    <p className="text-sm text-muted-foreground">{call.company}</p>
                    <p className="text-sm text-muted-foreground">{call.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Call Notes</CardTitle>
                <CardDescription>Notes taken during the call</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{call.notes}</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transcript" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Call Transcript</CardTitle>
                <CardDescription>Transcript of the conversation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {call.transcript.map((line, index) => (
                    <div
                      key={index}
                      className={`flex gap-4 ${line.speaker === "System" ? "justify-center text-sm text-muted-foreground italic" : ""}`}
                    >
                      {line.speaker !== "System" && (
                        <div className="w-24 flex-shrink-0 text-sm text-muted-foreground">{line.time}</div>
                      )}

                      {line.speaker !== "System" && (
                        <div className="w-24 flex-shrink-0">
                          <Badge
                            variant={line.speaker === "Agent" ? "default" : "secondary"}
                            className={line.speaker === "Agent" ? "bg-blue-500" : "bg-gray-500"}
                          >
                            {line.speaker}
                          </Badge>
                        </div>
                      )}

                      <div className={`flex-1 ${line.speaker === "System" ? "" : "text-sm"}`}>{line.text}</div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end mt-4">
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Transcript
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recording" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Call Recording</CardTitle>
                <CardDescription>Audio recording of the call</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center justify-center">
                  <div className="w-full max-w-md bg-white rounded-full h-2 mb-4">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "35%" }}></div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-full" onClick={togglePlayback}>
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </Button>

                    <div className="text-sm">
                      <span>04:15</span>
                      <span className="mx-2">/</span>
                      <span>12:45</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download Recording
                    </Button>
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