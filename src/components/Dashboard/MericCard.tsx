import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const MetricCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor,
}) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border w-85 mb-10">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${iconColor}`}>
          <Icon size={20} className="text-white" />
        </div>
        <span className="text-gray-600 text-sm">{title}</span>
      </div>
    </div>
    <div className="flex items-center gap-2 mb-1">
      <span className="text-2xl font-bold text-gray-900">{value}</span>
      <span className="text-sm text-gray-500">This week</span>
    </div>
    <div className="flex items-center gap-1">
      <span
        className={`text-sm font-medium ${
          changeType === "up" ? "text-green-600" : "text-red-600"
        }`}
      >
        {change}
      </span>
      {changeType === "up" ? (
        <TrendingUp size={14} className="text-green-600" />
      ) : (
        <TrendingDown size={14} className="text-red-600" />
      )}
    </div>
  </div>
);

export default MetricCard;
