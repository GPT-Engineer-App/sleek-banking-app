import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const BudgetingTools = () => {
  const categories = [
    { name: "Housing", spent: 1200, budget: 1500 },
    { name: "Transportation", spent: 300, budget: 400 },
    { name: "Food", spent: 450, budget: 500 },
    { name: "Utilities", spent: 200, budget: 250 },
    { name: "Entertainment", spent: 150, budget: 200 },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Budgeting Tools</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.name}>
                  <div className="flex justify-between mb-1">
                    <span>{category.name}</span>
                    <span>{`$${category.spent} / $${category.budget}`}</span>
                  </div>
                  <Progress value={(category.spent / category.budget) * 100} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Savings Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Emergency Fund</span>
                  <span>$5,000 / $10,000</span>
                </div>
                <Progress value={50} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Vacation</span>
                  <span>$1,500 / $3,000</span>
                </div>
                <Progress value={50} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Financial Health</h2>
      <Card>
        <CardContent className="p-6">
          <p className="mb-4">Your financial health score: <strong>75/100</strong></p>
          <ul className="list-disc list-inside space-y-2">
            <li>You're doing great with budgeting! Keep it up.</li>
            <li>Consider increasing your emergency fund savings.</li>
            <li>Look for ways to reduce your transportation expenses.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default BudgetingTools;