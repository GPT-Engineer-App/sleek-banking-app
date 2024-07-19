import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AccountOverview = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Account Overview</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Checking Account</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$5,234.56</p>
            <p className="text-sm text-muted-foreground">Account Number: ****1234</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Savings Account</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$15,000.00</p>
            <p className="text-sm text-muted-foreground">Account Number: ****5678</p>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Transactions</h2>
      <Card>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Grocery Store</span>
              <span className="font-semibold">-$52.30</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Salary Deposit</span>
              <span className="font-semibold text-green-600">+$3,000.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Online Shopping</span>
              <span className="font-semibold">-$128.99</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Restaurant</span>
              <span className="font-semibold">-$45.00</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountOverview;