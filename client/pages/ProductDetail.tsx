import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = {
    id: 1,
    name: "Fresh Organic Apples",
    price: 5.99,
    image: "🍎",
    rating: 4.8,
    reviews: 124,
    category: "Fruits",
    description:
      "Crispy, sweet, and refreshingly delicious organic apples. Picked at peak ripeness and delivered fresh to your door. Perfect for snacking, baking, or juicing.",
    details: {
      origin: "Local Farms, California",
      harvest: "Harvested Today",
      weight: "2.5 lbs (1.13 kg)",
      storage: "Refrigerate for up to 2 weeks",
    },
    reviews_list: [
      {
        author: "Sarah M.",
        rating: 5,
        text: "Amazing quality! So fresh and delicious.",
      },
      {
        author: "John D.",
        rating: 5,
        text: "Best apples I've ever bought online. Highly recommended!",
      },
      {
        author: "Emily R.",
        rating: 4,
        text: "Great taste and quick delivery.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="bg-muted/30 rounded-lg h-96 flex items-center justify-center text-9xl">
            {product.image}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-primary font-semibold">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-foreground mt-2">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <span className="text-foreground font-medium">
                {product.rating}
              </span>
              <span className="text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-primary">
              ${product.price}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Details */}
            <Card className="p-4">
              <dl className="space-y-3">
                {Object.entries(product.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <dt className="text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </dt>
                    <dd className="font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </Card>

            {/* Add to Cart Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-medium text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted"
                  >
                    +
                  </button>
                </div>
                <Button
                  size="lg"
                  className="flex-1 gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Fast Delivery</p>
                  <p className="font-semibold text-foreground text-sm">
                    Same Day
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Guaranteed</p>
                  <p className="font-semibold text-foreground text-sm">Fresh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Easy Return</p>
                  <p className="font-semibold text-foreground text-sm">
                    30 Days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Customer Reviews
          </h2>

          <div className="grid gap-6">
            {product.reviews_list.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {review.author}
                    </h3>
                    <div className="flex gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{review.text}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
