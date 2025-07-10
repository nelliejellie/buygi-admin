import React from "react";
import Header from "../Header/Header";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Heart,
  Bookmark,
  BarChart3,
  Eye,
  MousePointer,
  Link,
} from "lucide-react";
import MetricCard from "./MericCard";
import ChartLine from "./ChartLine";
import CountryBar from "./CountryBar";
import ProgressStep from "./ProgressStep";
import WorldMap from "./WorldMap";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Header />
      <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Account Reach"
            value="404K"
            change="3.47%"
            changeType="up"
            icon={BarChart3}
            iconColor="bg-blue-500"
          />
          <MetricCard
            title="Followers"
            value="300K"
            change="2.14%"
            changeType="down"
            icon={Users}
            iconColor="bg-purple-500"
          />
          <MetricCard
            title="Likes"
            value="340K"
            change="1.42%"
            changeType="down"
            icon={Heart}
            iconColor="bg-pink-500"
          />
          <MetricCard
            title="Saved"
            value="140K"
            change="6.70%"
            changeType="up"
            icon={Bookmark}
            iconColor="bg-orange-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
