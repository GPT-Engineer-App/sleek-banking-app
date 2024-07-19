import { Home, CreditCard, ArrowRightLeft, Receipt, PieChart, Bell } from "lucide-react";
import Index from "./pages/Index.jsx";
import AccountOverview from "./pages/AccountOverview.jsx";
import TransferFunds from "./pages/TransferFunds.jsx";
import BillPayments from "./pages/BillPayments.jsx";
import BudgetingTools from "./pages/BudgetingTools.jsx";
import Notifications from "./pages/Notifications.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Account Overview",
    to: "/account-overview",
    icon: <CreditCard className="h-4 w-4" />,
    page: <AccountOverview />,
  },
  {
    title: "Transfer Funds",
    to: "/transfer-funds",
    icon: <ArrowRightLeft className="h-4 w-4" />,
    page: <TransferFunds />,
  },
  {
    title: "Bill Payments",
    to: "/bill-payments",
    icon: <Receipt className="h-4 w-4" />,
    page: <BillPayments />,
  },
  {
    title: "Budgeting Tools",
    to: "/budgeting-tools",
    icon: <PieChart className="h-4 w-4" />,
    page: <BudgetingTools />,
  },
  {
    title: "Notifications",
    to: "/notifications",
    icon: <Bell className="h-4 w-4" />,
    page: <Notifications />,
  },
];