import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TransferFunds = () => {
  const [amount, setAmount] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();
    // Implement transfer logic here
    console.log("Transfer:", { amount, fromAccount, toAccount });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Transfer Funds</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Make a Transfer</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTransfer} className="space-y-4">
            <div>
              <Label htmlFor="fromAccount">From Account</Label>
              <Select onValueChange={setFromAccount} value={fromAccount}>
                <SelectTrigger id="fromAccount">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="checking">Checking Account (****1234)</SelectItem>
                  <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="toAccount">To Account</Label>
              <Select onValueChange={setToAccount} value={toAccount}>
                <SelectTrigger id="toAccount">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="external">External Account</SelectItem>
                  <SelectItem value="savings">Savings Account (****5678)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            
            <Button type="submit" className="w-full">Transfer Funds</Button>
          </form>
        </CardContent>
      </Card>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Transfers</h2>
      <Card>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>To: John Doe</span>
              <span className="font-semibold">$500.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>To: Savings Account</span>
              <span className="font-semibold">$1,000.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>From: Payroll</span>
              <span className="font-semibold text-green-600">$3,000.00</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransferFunds;