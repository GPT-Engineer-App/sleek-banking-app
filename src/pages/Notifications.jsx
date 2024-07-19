import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CreditCard, ShieldAlert, Wallet } from "lucide-react";

const NotificationItem = ({ icon, title, description, date }) => (
  <div className="flex items-start space-x-4 p-4 border-b last:border-b-0">
    <div className="bg-blue-100 p-2 rounded-full">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="text-xs text-gray-400 mt-1">{date}</p>
    </div>
  </div>
);

const Notifications = () => {
  const notifications = [
    {
      icon: <ShieldAlert className="h-5 w-5 text-blue-600" />,
      title: "Security Alert",
      description: "New device logged into your account. Please verify if this was you.",
      date: "2 hours ago"
    },
    {
      icon: <CreditCard className="h-5 w-5 text-blue-600" />,
      title: "Credit Card Statement",
      description: "Your monthly credit card statement is now available.",
      date: "1 day ago"
    },
    {
      icon: <Wallet className="h-5 w-5 text-blue-600" />,
      title: "Low Balance Alert",
      description: "Your checking account balance is below $500. Consider transferring funds.",
      date: "2 days ago"
    },
    {
      icon: <Bell className="h-5 w-5 text-blue-600" />,
      title: "Bill Payment Reminder",
      description: "Your electricity bill is due in 3 days. Set up a payment to avoid late fees.",
      date: "3 days ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          {notifications.map((notification, index) => (
            <NotificationItem key={index} {...notification} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;