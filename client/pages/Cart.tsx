import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Fresh Organic Apples",
      price: 5.99,
      quantity: 2,
      image: "🍎",
    },
    {
      id: 2,
      name: "Farm Fresh Carrots",
      price: 3.49,
      quantity: 1,
      image: "🥕",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Card
                  key={item.id}
                  className="p-4 flex items-center gap-4"
                >
                  <div className="text-4xl">{item.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground">${item.price}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 border border-border rounded-lg p-1">
                    <button className="p-1 hover:bg-muted rounded">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-3 text-foreground font-medium">
                      {item.quantity}
                    </span>
                    <button className="p-1 hover:bg-muted rounded">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-lg font-bold text-foreground min-w-20 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button className="p-2 hover:bg-destructive/10 rounded-lg text-destructive">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </Card>
              ))
            ) : (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  Your cart is empty
                </p>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>

              <Button className="w-full mb-2">Proceed to Checkout</Button>
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
