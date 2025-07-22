import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { 
  Star, 
  ThumbsUp, 
  Flag, 
  MessageSquare, 
  TrendingUp, 
  Calendar,
  Filter,
  Search,
  Users,
  Pin
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

// Mock data - replace with real data
const mockFeedback = [
  {
    id: 1,
    customerName: "Anonymous Customer",
    rating: 5,
    title: "Excellent Service and Food",
    comment: "The staff was incredibly helpful and the food was amazing. The ambiance was perfect for our date night. Will definitely come back!",
    category: "Service",
    timestamp: "2024-01-15T10:30:00Z",
    upvotes: 12,
    pinned: true,
    businessResponse: "Thank you so much for your wonderful review! We're thrilled you enjoyed your date night with us. Looking forward to welcoming you back soon!"
  },
  {
    id: 2,
    customerName: "Anonymous Customer",
    rating: 4,
    title: "Great atmosphere, good food",
    comment: "Love the ambiance and the music. Food was good too, though could be a bit warmer when served.",
    category: "Atmosphere",
    timestamp: "2024-01-14T14:20:00Z",
    upvotes: 8,
    pinned: false,
    businessResponse: null
  },
  {
    id: 3,
    customerName: "Anonymous Customer",
    rating: 5,
    title: "Best pizza in town!",
    comment: "Absolutely delicious pizza with fresh ingredients. The crust was perfect and the service was quick.",
    category: "Food",
    timestamp: "2024-01-13T19:45:00Z",
    upvotes: 15,
    pinned: false,
    businessResponse: "We're so happy you enjoyed our pizza! Fresh ingredients are our priority. Thank you for choosing us!"
  },
  {
    id: 4,
    customerName: "Anonymous Customer",
    rating: 3,
    title: "Decent experience",
    comment: "The food was okay, service was friendly but a bit slow. Good value for money though.",
    category: "Service",
    timestamp: "2024-01-12T16:10:00Z",
    upvotes: 3,
    pinned: false,
    businessResponse: "Thank you for your feedback. We're working on improving our service speed while maintaining quality. We appreciate your patience!"
  },
  {
    id: 5,
    customerName: "Anonymous Customer",
    rating: 5,
    title: "Perfect for families",
    comment: "Great place to bring kids! They have a wonderful kids menu and the staff is very accommodating.",
    category: "Service",
    timestamp: "2024-01-11T12:30:00Z",
    upvotes: 6,
    pinned: false,
    businessResponse: null
  }
];

const PublicFeedback = () => {
  const { businessId } = useParams();
  const [sortBy, setSortBy] = useState("recent");
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock business data
  const businessName = "Demo Restaurant";
  const averageRating = 4.4;
  const totalReviews = 127;

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
      year: "numeric"
    });
  };

  const filteredFeedback = mockFeedback.filter(feedback => {
    const matchesCategory = filterCategory === "all" || feedback.category.toLowerCase() === filterCategory;
    const matchesSearch = searchTerm === "" || 
      feedback.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.comment.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedFeedback = [...filteredFeedback].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      case "rating-high":
        return b.rating - a.rating;
      case "rating-low":
        return a.rating - b.rating;
      case "helpful":
        return b.upvotes - a.upvotes;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">FeedbackFlow</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{businessName}</h1>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <div className="flex">{renderStars(Math.round(averageRating))}</div>
              <span className="text-2xl font-bold">{averageRating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-5 w-5" />
              <span>{totalReviews} reviews</span>
            </div>
          </div>
          <Link to={`/feedback/${businessId}`}>
            <Button variant="hero" size="lg">
              Share Your Experience
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Filters and Search */}
        <Card className="shadow-soft mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <CardTitle className="flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filter & Sort Reviews
              </CardTitle>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search reviews..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full sm:w-64"
                  />
                </div>
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                    <SelectItem value="atmosphere">Atmosphere</SelectItem>
                    <SelectItem value="cleanliness">Cleanliness</SelectItem>
                    <SelectItem value="pricing">Pricing</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="rating-high">Highest Rating</SelectItem>
                    <SelectItem value="rating-low">Lowest Rating</SelectItem>
                    <SelectItem value="helpful">Most Helpful</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Reviews List */}
        <div className="space-y-6">
          {sortedFeedback.map((feedback) => (
            <Card key={feedback.id} className={`shadow-medium hover:shadow-large transition-all duration-300 ${feedback.pinned ? 'ring-2 ring-primary/20' : ''}`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">{renderStars(feedback.rating)}</div>
                      <Badge variant="secondary">{feedback.category}</Badge>
                      {feedback.pinned && (
                        <Badge variant="outline" className="border-primary text-primary">
                          <Pin className="h-3 w-3 mr-1" />
                          Pinned
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{feedback.title}</CardTitle>
                    <CardDescription className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(feedback.timestamp)} • {feedback.customerName}
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {feedback.upvotes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4 leading-relaxed">{feedback.comment}</p>
                
                {feedback.businessResponse && (
                  <div className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                    <div className="flex items-center mb-2">
                      <MessageSquare className="h-4 w-4 text-primary mr-2" />
                      <span className="font-medium text-sm text-primary">Response from {businessName}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feedback.businessResponse}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedFeedback.length === 0 && (
          <Card className="shadow-medium">
            <CardContent className="text-center py-12">
              <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No reviews found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setFilterCategory("all");
                setSortBy("recent");
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="shadow-medium bg-gradient-secondary">
            <CardContent className="py-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Visited {businessName}?
              </h3>
              <p className="text-muted-foreground mb-6">
                Share your experience and help others make informed decisions.
              </p>
              <Link to={`/feedback/${businessId}`}>
                <Button variant="gradient" size="lg">
                  <Star className="h-5 w-5 mr-2" />
                  Write a Review
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PublicFeedback;