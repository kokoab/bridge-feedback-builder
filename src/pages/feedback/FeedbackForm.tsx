import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, Send, CheckCircle, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useParams, Link } from "react-router-dom";

const FeedbackForm = () => {
  const { businessId } = useParams();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock business data - replace with real data
  const businessName = "Demo Restaurant";

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  const handleStarHover = (starRating: number) => {
    setHoverRating(starRating);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for your valuable feedback.",
      });
    }, 1500);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const starValue = i + 1;
      const isFilled = starValue <= (hoverRating || rating);
      
      return (
        <button
          key={i}
          type="button"
          onClick={() => handleStarClick(starValue)}
          onMouseEnter={() => handleStarHover(starValue)}
          onMouseLeave={() => setHoverRating(0)}
          className="transition-transform hover:scale-110 focus:outline-none"
        >
          <Star
            className={`h-8 w-8 transition-colors ${
              isFilled ? "fill-warning text-warning" : "text-muted-foreground hover:text-warning"
            }`}
          />
        </button>
      );
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-large">
          <CardContent className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your feedback has been submitted successfully. We appreciate you taking the time to share your experience.
            </p>
            <div className="space-y-3">
              <Link to={`/feedback/${businessId}/public`}>
                <Button variant="outline" className="w-full">
                  View Public Feedback
                </Button>
              </Link>
              <Button 
                variant="gradient" 
                className="w-full"
                onClick={() => {
                  setIsSubmitted(false);
                  setRating(0);
                  setTitle("");
                  setComment("");
                  setCategory("");
                }}
              >
                Submit Another Review
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground py-8">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">FeedbackFlow</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Share Your Experience</h1>
          <p className="text-primary-foreground/90">
            Help {businessName} improve by sharing your honest feedback
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <Card className="shadow-large">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Rate Your Experience</CardTitle>
            <CardDescription className="text-center">
              Your feedback helps {businessName} provide better service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Star Rating */}
              <div className="text-center">
                <Label className="text-base font-medium">How would you rate your experience?</Label>
                <div className="flex justify-center space-x-2 mt-3 mb-2">
                  {renderStars()}
                </div>
                {rating > 0 && (
                  <Badge variant="secondary" className="mt-2">
                    {rating} star{rating !== 1 ? 's' : ''}
                  </Badge>
                )}
              </div>

              {/* Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="What aspect would you like to rate?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="food">Food Quality</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                    <SelectItem value="atmosphere">Atmosphere</SelectItem>
                    <SelectItem value="cleanliness">Cleanliness</SelectItem>
                    <SelectItem value="pricing">Pricing</SelectItem>
                    <SelectItem value="location">Location & Accessibility</SelectItem>
                    <SelectItem value="overall">Overall Experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <Label htmlFor="title">Title (Optional)</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your review a title..."
                  maxLength={100}
                />
              </div>

              {/* Comment */}
              <div className="space-y-2">
                <Label htmlFor="comment">Your Feedback (Optional)</Label>
                <Textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us about your experience. What went well? What could be improved?"
                  rows={4}
                  maxLength={500}
                />
                <p className="text-sm text-muted-foreground text-right">
                  {comment.length}/500 characters
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full"
                disabled={isSubmitting || rating === 0}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Submit Feedback
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Your feedback is anonymous and helps improve the quality of service.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link to={`/feedback/${businessId}/public`}>
            <Button variant="outline">
              View Public Feedback
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;