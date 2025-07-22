import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart3, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  Users, 
  QrCode,
  Reply,
  Pin,
  Filter,
  Calendar,
  AlertTriangle
} from "lucide-react";

// Mock data - replace with real data
const mockFeedback = [
  {
    id: 1,
    customerName: "Anonymous",
    rating: 5,
    title: "Excellent Service",
    comment: "The staff was incredibly helpful and the food was amazing. Will definitely come back!",
    category: "Service",
    timestamp: "2024-01-15T10:30:00Z",
    responded: false,
    pinned: false,
    flagged: false
  },
  {
    id: 2,
    customerName: "Anonymous",
    rating: 2,
    title: "Long wait time",
    comment: "Had to wait 45 minutes for our food. The quality was good but the wait was too long.",
    category: "Service",
    timestamp: "2024-01-14T19:15:00Z",
    responded: true,
    pinned: false,
    flagged: false
  },
  {
    id: 3,
    customerName: "Anonymous",
    rating: 4,
    title: "Great atmosphere",
    comment: "Love the ambiance and the music. Food was good too, though could be a bit warmer.",
    category: "Atmosphere",
    timestamp: "2024-01-14T14:20:00Z",
    responded: false,
    pinned: true,
    flagged: false
  }
];

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  const averageRating = 4.2;
  const totalFeedback = 247;
  const responseRate = 89;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-warning text-warning" : "text-muted-foreground"
        }`}
      />
    ));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-foreground">Business Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <QrCode className="h-4 w-4 mr-2" />
                Generate QR Code
              </Button>
              <Button variant="ghost" size="sm">Settings</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-foreground">{averageRating}</span>
                <div className="flex">{renderStars(Math.round(averageRating))}</div>
              </div>
              <p className="text-sm text-success mt-1">+0.3 from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-foreground">{totalFeedback}</span>
                <TrendingUp className="h-5 w-5 text-success" />
              </div>
              <p className="text-sm text-success mt-1">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Response Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-foreground">{responseRate}%</span>
                <Reply className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mt-1">Target: 90%</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-foreground">42</span>
                <Users className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-success mt-1">+8 new reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="feedback" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-96">
            <TabsTrigger value="feedback">Recent Feedback</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="qr-code">QR Code</TabsTrigger>
          </TabsList>

          <TabsContent value="feedback" className="space-y-6">
            {/* Filters */}
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <CardTitle className="flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filter Feedback
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="food">Food</SelectItem>
                        <SelectItem value="atmosphere">Atmosphere</SelectItem>
                        <SelectItem value="pricing">Pricing</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                      <SelectTrigger className="w-full sm:w-48">
                        <SelectValue placeholder="Time Period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="quarter">This Quarter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Feedback List */}
            <div className="space-y-4">
              {mockFeedback.map((feedback) => (
                <Card key={feedback.id} className="shadow-medium hover:shadow-large transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">{renderStars(feedback.rating)}</div>
                          <Badge variant="secondary">{feedback.category}</Badge>
                          {feedback.pinned && <Pin className="h-4 w-4 text-primary" />}
                          {feedback.flagged && <AlertTriangle className="h-4 w-4 text-warning" />}
                        </div>
                        <CardTitle className="text-lg">{feedback.title}</CardTitle>
                        <CardDescription className="flex items-center text-sm text-muted-foreground mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(feedback.timestamp)} • {feedback.customerName}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <Pin className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Reply className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4">{feedback.comment}</p>
                    {feedback.responded ? (
                      <Badge variant="secondary" className="bg-success/10 text-success">
                        Responded
                      </Badge>
                    ) : (
                      <Button variant="outline" size="sm">
                        <Reply className="h-4 w-4 mr-2" />
                        Respond
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  Analytics Dashboard
                </CardTitle>
                <CardDescription>
                  Detailed insights and trends for your feedback data
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center py-12">
                <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Coming Soon</h3>
                <p className="text-muted-foreground">
                  Advanced analytics features including rating trends, category breakdowns, and AI insights are in development.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="qr-code">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <QrCode className="h-5 w-5 mr-2" />
                  QR Code Generator
                </CardTitle>
                <CardDescription>
                  Generate and customize QR codes for your feedback collection
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center py-12">
                <QrCode className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">QR Code Generation</h3>
                <p className="text-muted-foreground mb-6">
                  Create custom QR codes that link directly to your feedback collection page.
                </p>
                <Button variant="gradient" size="lg">
                  <QrCode className="h-5 w-5 mr-2" />
                  Generate QR Code
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;