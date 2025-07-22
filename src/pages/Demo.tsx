import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, QrCode, Smartphone, Star, BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">FeedbackFlow Demo</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">See How It Works</h1>
          <p className="text-xl text-primary-foreground/90 mb-6">
            Experience the complete feedback journey from customer to business owner
          </p>
          <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-lg px-4 py-2">
            Interactive Demo
          </Badge>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Demo Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Customer Experience */}
          <Card className="shadow-large">
            <CardHeader className="text-center">
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Customer Experience</CardTitle>
              <CardDescription>
                See how customers interact with your feedback system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Scan QR Code</p>
                    <p className="text-sm text-muted-foreground">Customer scans QR at your location</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Rate & Review</p>
                    <p className="text-sm text-muted-foreground">Simple star rating and optional comment</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">View Public Feed</p>
                    <p className="text-sm text-muted-foreground">Browse other customer experiences</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Link to="/feedback/demo-restaurant">
                  <Button variant="gradient" className="w-full">
                    Try Customer Experience
                  </Button>
                </Link>
                <Link to="/feedback/demo-restaurant/public">
                  <Button variant="outline" className="w-full">
                    View Public Feedback
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Business Experience */}
          <Card className="shadow-large">
            <CardHeader className="text-center">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl">Business Dashboard</CardTitle>
              <CardDescription>
                Explore the powerful analytics and management tools
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <div className="bg-success text-success-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Monitor Feedback</p>
                    <p className="text-sm text-muted-foreground">Real-time feedback dashboard</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <div className="bg-success text-success-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Respond & Engage</p>
                    <p className="text-sm text-muted-foreground">Reply directly to customer feedback</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                  <div className="bg-success text-success-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Analyze Trends</p>
                    <p className="text-sm text-muted-foreground">Track ratings and performance metrics</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Link to="/business/dashboard">
                  <Button variant="gradient" className="w-full">
                    View Business Dashboard
                  </Button>
                </Link>
                <Link to="/business/register">
                  <Button variant="outline" className="w-full">
                    Create Business Account
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Key Features Demonstrated</h2>
          <p className="text-lg text-muted-foreground">
            See how FeedbackFlow transforms customer feedback into actionable insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-medium text-center">
            <CardHeader>
              <QrCode className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>QR Code System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Seamless feedback collection through QR codes placed at your business location.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium text-center">
            <CardHeader>
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Smart Rating System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                5-star ratings with categorized feedback for detailed customer sentiment analysis.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium text-center">
            <CardHeader>
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>AI Moderation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Automatic spam and troll detection to maintain high-quality feedback.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="shadow-large bg-gradient-secondary text-center">
          <CardContent className="py-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses already using FeedbackFlow to improve their customer experience and build stronger relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/business/register">
                <Button size="xl" variant="gradient">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/">
                <Button size="xl" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Demo;