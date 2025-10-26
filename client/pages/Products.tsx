import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const products = [
    {
      id: 1,
      name: "Fresh Organic Apples",
      price: 5.99,
      image: "🍎",
      category: "Fruits",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Farm Fresh Carrots",
      price: 3.49,
      image: "🥕",
      category: "Vegetables",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Ripe Bananas",
      price: 2.99,
      image: "🍌",
      category: "Fruits",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Fresh Spinach Bundle",
      price: 4.49,
      image: "🥬",
      category: "Vegetables",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Natural Honey",
      price: 12.99,
      image: "🍯",
      category: "Pantry",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Fresh Tomatoes",
      price: 4.99,
      image: "🍅",
      category: "Vegetables",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Orange Juice",
      price: 5.49,
      image: "🧡",
      category: "Drinks",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Whole Grain Bread",
      price: 3.99,
      image: "🍞",
      category: "Bakery",
      rating: 4.7,
    },
  ];

  const categories = ["Fruits", "Vegetables", "Drinks", "Pantry", "Bakery"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            All Products
          </h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-6 py-3"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category ? "default" : "outline"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative bg-muted/30 h-48 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                {product.image}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-muted-foreground/30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
