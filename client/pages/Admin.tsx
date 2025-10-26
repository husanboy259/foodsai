import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function Admin() {
  const products = [
    {
      id: 1,
      name: "Fresh Organic Apples",
      price: 5.99,
      category: "Fruits",
      stock: 45,
    },
    {
      id: 2,
      name: "Farm Fresh Carrots",
      price: 3.49,
      category: "Vegetables",
      stock: 78,
    },
    {
      id: 3,
      name: "Natural Honey",
      price: 12.99,
      category: "Pantry",
      stock: 23,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your products, orders, and inventory
              </p>
            </div>
            <Button size="lg" className="gap-2">
              <Plus className="w-5 h-5" />
              Add Product
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">
                Total Products
              </p>
              <p className="text-3xl font-bold text-foreground">156</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">Total Orders</p>
              <p className="text-3xl font-bold text-primary">42</p>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-2">
                Revenue (This Month)
              </p>
              <p className="text-3xl font-bold text-secondary">$4,230</p>
            </Card>
          </div>
        </div>

        {/* Products Table */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Products</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Product
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Category
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Price
                  </th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">
                    Stock
                  </th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-b border-border hover:bg-muted/30 transition"
                  >
                    <td className="py-3 px-4 text-foreground font-medium">
                      {product.name}
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">
                      {product.category}
                    </td>
                    <td className="py-3 px-4 text-foreground font-semibold">
                      ${product.price}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          product.stock > 30
                            ? "bg-secondary/20 text-secondary"
                            : "bg-destructive/20 text-destructive"
                        }`}
                      >
                        {product.stock} units
                      </span>
                    </td>
                    <td className="py-3 px-4 flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
