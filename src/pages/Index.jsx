import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightLeft, CreditCard, Receipt, PieChart, Bell } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActionButton = ({ to, icon, children }) => (
  <Button asChild variant="outline" className="w-full justify-start">
    <Link to={to}>
      {icon}
      <span className="ml-2">{children}</span>
    </Link>
  </Button>
);

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Banking Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Account Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$10,234.56</p>
            <p className="text-sm text-muted-foreground">Last updated: 2 minutes ago</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Grocery Store - $52.30</li>
              <li>Online Shopping - $128.99</li>
              <li>Restaurant - $45.00</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <QuickActionButton to="/transfer-funds" icon={<ArrowRightLeft className="h-4 w-4" />}>
              Transfer Funds
            </QuickActionButton>
            <QuickActionButton to="/bill-payments" icon={<Receipt className="h-4 w-4" />}>
              Pay Bills
            </QuickActionButton>
            <QuickActionButton to="/budgeting-tools" icon={<PieChart className="h-4 w-4" />}>
              View Budget
            </QuickActionButton>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Notifications</h2>
        <Card>
          <CardContent className="p-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <Bell className="h-4 w-4 mr-2 text-blue-600" />
                <span>New security update available</span>
              </li>
              <li className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-blue-600" />
                <span>Your credit card statement is ready</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;