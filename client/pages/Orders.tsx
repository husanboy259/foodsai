import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, Truck } from "lucide-react";

export default function Orders() {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      items: 3,
      total: 25.47,
      status: "delivered",
      delivery: "2024-01-17",
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      items: 2,
      total: 15.98,
      status: "in_transit",
      delivery: "2024-01-12",
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      items: 5,
      total: 42.15,
      status: "pending",
      delivery: "2024-01-06",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-5 h-5 text-secondary" />;
      case "in_transit":
        return <Truck className="w-5 h-5 text-primary" />;
      case "pending":
        return <Clock className="w-5 h-5 text-muted-foreground" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "in_transit":
        return "In Transit";
      case "pending":
        return "Pending";
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">Your Orders</h1>

        <div className="space-y-4">
          {orders.length > 0 ? (
            orders.map((order) => (
              <Card
                key={order.id}
                className="p-6 hover:shadow-md transition-shadow"
              >
                <div className="grid md:grid-cols-5 gap-4 items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Order ID</p>
                    <p className="font-semibold text-foreground text-lg">
                      {order.id}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium text-foreground">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Items</p>
                    <p className="font-medium text-foreground">{order.items}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="font-semibold text-primary text-lg">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    <Badge
                      variant={
                        order.status === "delivered"
                          ? "default"
                          : order.status === "in_transit"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {getStatusLabel(order.status)}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground text-lg">
                You haven't placed any orders yet
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
