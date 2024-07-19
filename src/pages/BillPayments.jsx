import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BillPayments = () => {
  const [payee, setPayee] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
    // Implement payment logic here
    console.log("Payment:", { payee, amount, date });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Bill Payments</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Pay a Bill</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <Label htmlFor="payee">Payee</Label>
              <Select onValueChange={setPayee} value={payee}>
                <SelectTrigger id="payee">
                  <SelectValue placeholder="Select payee" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electricity">Electricity Company</SelectItem>
                  <SelectItem value="water">Water Utility</SelectItem>
                  <SelectItem value="internet">Internet Provider</SelectItem>
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
            
            <div>
              <Label htmlFor="date">Payment Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            
            <Button type="submit" className="w-full">Pay Bill</Button>
          </form>
        </CardContent>
      </Card>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Upcoming Bills</h2>
      <Card>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Electricity Company</span>
              <span className="font-semibold">$120.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Water Utility</span>
              <span className="font-semibold">$45.00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Internet Provider</span>
              <span className="font-semibold">$79.99</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillPayments;