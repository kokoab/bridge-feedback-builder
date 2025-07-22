import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, BarChart3, QrCode, Shield, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-foreground">FeedbackFlow</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/business/login">
                <Button variant="ghost">Business Login</Button>
              </Link>
              <Link to="/business/register">
                <Button variant="gradient">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Transform Customer Feedback
              <span className="block">Into Business Growth</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              A modern feedback platform that helps businesses collect, analyze, and respond to customer feedback through QR codes and AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/business/register">
                <Button size="xl" variant="hero">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need for Better Feedback
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From collection to analysis, our platform provides all the tools you need to understand and improve your customer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <QrCode className="h-12 w-12 text-primary mb-4" />
                <CardTitle>QR Code Collection</CardTitle>
                <CardDescription>
                  Generate unique QR codes for each location. Customers scan and leave feedback instantly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Smart Analytics</CardTitle>
                <CardDescription>
                  Track ratings, trends, and patterns with beautiful dashboards and actionable insights.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>AI Spam Detection</CardTitle>
                <CardDescription>
                  Automatically filter out spam, trolls, and low-quality feedback with AI-powered moderation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <Star className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Rating System</CardTitle>
                <CardDescription>
                  5-star rating system with categorized feedback for detailed customer sentiment analysis.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Direct Responses</CardTitle>
                <CardDescription>
                  Respond to customer feedback directly through the platform and show you care.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-medium hover:shadow-large transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Public Visibility</CardTitle>
                <CardDescription>
                  Build trust with transparent public feedback that customers can see and interact with.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Customer Feedback?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of businesses already using FeedbackFlow to improve their customer experience.
          </p>
          <Link to="/business/register">
            <Button size="xl" variant="gradient">
              Start Your Free Trial Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-primary mr-2" />
              <span className="text-lg font-semibold text-foreground">FeedbackFlow</span>
            </div>
            <p className="text-muted-foreground">
              © 2024 FeedbackFlow. All rights reserved. Empowering businesses through better feedback.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;