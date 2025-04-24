"use client"

import type React from "react"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, FileText, Database, Download } from "lucide-react"

export default function ExtractionToolPage() {
  const [file, setFile] = useState<File | null>(null)
  const [url, setUrl] = useState("")
  const [extractedData, setExtractedData] = useState<string>("")
  const [isExtracting, setIsExtracting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
    }
  }

  const handleExtractFromFile = async () => {
    if (!file) return

    setIsExtracting(true)

    // Simulate API call
    setTimeout(() => {
      setIsExtracting(false)
      setExtractedData(
        JSON.stringify(
          {
            buyers: [
              {
                name: "John Smith",
                email: "john.smith@example.com",
                company: "Acme Inc",
                phone: "+1 (555) 123-4567",
                address: "123 Main St, Anytown, USA",
              },
              {
                name: "Jane Doe",
                email: "jane.doe@example.com",
                company: "XYZ Corp",
                phone: "+1 (555) 987-6543",
                address: "456 Oak Ave, Somewhere, USA",
              },
              {
                name: "Robert Johnson",
                email: "robert.johnson@example.com",
                company: "Johnson & Co",
                phone: "+1 (555) 456-7890",
                address: "789 Pine Rd, Nowhere, USA",
              },
            ],
          },
          null,
          2,
        ),
      )
    }, 2000)
  }

  const handleExtractFromUrl = async () => {
    if (!url) return

    setIsExtracting(true)

    // Simulate API call
    setTimeout(() => {
      setIsExtracting(false)
      setExtractedData(
        JSON.stringify(
          {
            buyers: [
              {
                name: "Emily Wilson",
                email: "emily.wilson@example.com",
                company: "Wilson Enterprises",
                phone: "+1 (555) 234-5678",
                address: "321 Elm St, Anytown, USA",
              },
              {
                name: "Michael Brown",
                email: "michael.brown@example.com",
                company: "Brown Industries",
                phone: "+1 (555) 876-5432",
                address: "654 Maple Ave, Somewhere, USA",
              },
            ],
          },
          null,
          2,
        ),
      )
    }, 2000)
  }

  const handleSaveData = () => {
    // In a real app, this would save the data to the database
    alert("Data saved successfully!")
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Buyer Data Extraction Tool</h1>
          <p className="text-muted-foreground">Extract buyer data from files or websites</p>
        </div>

        <Tabs defaultValue="file" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="file">Extract from File</TabsTrigger>
            <TabsTrigger value="url">Extract from URL</TabsTrigger>
          </TabsList>

          <TabsContent value="file" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Extract Buyer Data from File</CardTitle>
                <CardDescription>Upload a file to extract buyer data (CSV, Excel, PDF)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="data-file">File</Label>
                  <div className="flex items-center gap-2">
                    <Input id="data-file" type="file" accept=".csv,.xlsx,.xls,.pdf" onChange={handleFileChange} />
                    <Button onClick={handleExtractFromFile} disabled={!file || isExtracting}>
                      {isExtracting ? (
                        <>Extracting...</>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          Extract
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {file && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    <span>{file.name}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="url" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Extract Buyer Data from URL</CardTitle>
                <CardDescription>Enter a website URL to extract buyer data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="data-url">URL</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="data-url"
                      type="url"
                      placeholder="https://example.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                    <Button onClick={handleExtractFromUrl} disabled={!url || isExtracting}>
                      {isExtracting ? (
                        <>Extracting...</>
                      ) : (
                        <>
                          <Database className="mr-2 h-4 w-4" />
                          Extract
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {extractedData && (
          <Card>
            <CardHeader>
              <CardTitle>Extracted Data</CardTitle>
              <CardDescription>Review and save the extracted buyer data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                className="font-mono h-80"
                value={extractedData}
                onChange={(e) => setExtractedData(e.target.value)}
              />

              <div className="flex justify-end gap-2">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download JSON
                </Button>
                <Button onClick={handleSaveData}>
                  <Database className="mr-2 h-4 w-4" />
                  Save to Database
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
} 