import React from "react";
import Header from "../Header/Header";
import Table from "../Table/Table";
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
import WorldMap from "./WorldMap";
import BarChart from "./BarChart";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  const productData = [12, 8, 15, 10, 18, 14, 22];
  const visitorData = [
    [5, 8, 12, 15, 18, 20, 25, 22, 28, 30, 35, 32],
    [3, 6, 9, 12, 15, 18, 21, 24, 20, 18, 22, 25],
  ];
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Header />
      <div className="min-h-screen  p-6 w-full">
        <div className="mx-auto">
          {/* Header Metrics */}
          <div className="flex flex-col md:flex-row justify-between">
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Product Analysis */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Product Analysis
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-blue-500 rounded-full" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">325</div>
                    <div className="text-sm text-gray-500">/146525</div>
                    <div className="text-xs text-gray-400">Products Input</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-1 h-12 bg-purple-500 rounded-full" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">325</div>
                    <div className="text-sm text-gray-500">/146525</div>
                    <div className="text-xs text-gray-400">Products Input</div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <ChartLine data={productData} color="#3b82f6" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>

            {/* Visitors Overview */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Visitors Overview
                </h3>
                <select className="text-sm border rounded px-2 py-1">
                  <option>Aug 25 - Sep 25</option>
                </select>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Campaign</span>
                    <span className="text-lg font-semibold">80%</span>
                  </div>
                  <BarChart
                    data={visitorData[0]}
                    labels={["", "", "", "", "", "", "", "", "", "", "", ""]}
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Direct</span>
                    <span className="text-lg font-semibold">20%</span>
                  </div>
                  <BarChart
                    data={visitorData[1]}
                    labels={["", "", "", "", "", "", "", "", "", "", "", ""]}
                  />
                </div>
              </div>
            </div>

            {/* Visitor Actions */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Visitors Overview
              </h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Eye size={20} className="text-blue-500" />
                    <span className="text-sm text-gray-600">Photo Clicks</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">70%</div>
                    <div className="text-xs text-gray-400">...</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Link size={20} className="text-purple-500" />
                    <span className="text-sm text-gray-600">Link Clicks</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">30%</div>
                    <div className="text-xs text-gray-400">...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* World Sale */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                World Sale
              </h3>
              <WorldMap />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <CountryBar
                    country="India"
                    percentage={85}
                    color="bg-orange-400"
                  />
                  <CountryBar
                    country="Russia"
                    percentage={60}
                    color="bg-blue-400"
                  />
                </div>
                <div>
                  <CountryBar
                    country="China"
                    percentage={90}
                    color="bg-purple-500"
                  />
                  <CountryBar
                    country="USA"
                    percentage={45}
                    color="bg-yellow-400"
                  />
                </div>
              </div>
            </div>

            {/* Account Summary */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Account Summary
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Eye size={24} className="text-blue-600" />
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    Video Lectures
                  </div>
                  <div className="text-lg font-bold text-gray-900">12/15</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users size={24} className="text-purple-600" />
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    Youtube Subscribe
                  </div>
                  <div className="text-lg font-bold text-gray-900">12/15</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart size={24} className="text-orange-600" />
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    Instagram Followers
                  </div>
                  <div className="text-lg font-bold text-gray-900">12/15</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Table />
        </div>
        <div className="mt-8 my-4">
          <Footer />
        </div>
        <div className="mt-4 my-4">
          <h1 className="text-white">fkfi</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
