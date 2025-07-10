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
import React from "react";

const ChartLine = ({ data, color }) => {
  const maxValue = Math.max(...data);
  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 280;
      const y = 80 - (value / maxValue) * 60;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width="280" height="80" className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        className="drop-shadow-sm"
      />
    </svg>
  );
};

export default ChartLine;
