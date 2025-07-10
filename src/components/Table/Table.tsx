import React, { useState } from "react";
import { ChevronDown, Eye, Music, Image, Video, Box } from "lucide-react";

const StatusBadge = ({ status }) => {
  const isPrivate = status === "Private";
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        isPrivate ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
      }`}
    >
      {status}
    </span>
  );
};

const CategoryIcon = ({ category }) => {
  const iconClass = "w-4 h-4 text-gray-600";

  switch (category) {
    case "3D Elements":
      return <Box className={iconClass} />;
    case "Images":
      return <Image className={iconClass} />;
    case "Music":
      return <Music className={iconClass} />;
    case "Video":
      return <Video className={iconClass} />;
    default:
      return <Box className={iconClass} />;
  }
};

const TableHeader = ({ children, sortable = false }) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    <div className="flex items-center gap-1">
      {children}
      {sortable && <ChevronDown className="w-4 h-4" />}
    </div>
  </th>
);

const Table = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const assets = [
    {
      id: 1,
      website: "Google",
      assetName: "Abstract Element",
      status: "Private",
      category: "3D Elements",
      tags: "13,423",
      date: "31 Jan 2022",
      country: "India",
      avatar: "🎨",
    },
    {
      id: 2,
      website: "Amazon",
      assetName: "Abstract Minimalist Cha...",
      status: "Public",
      category: "Images",
      tags: "15,576",
      date: "2 Feb 2022",
      country: "UK",
      avatar: "👤",
    },
    {
      id: 3,
      website: "Facebook",
      assetName: "Assets Name",
      status: "Private",
      category: "Music",
      tags: "24,981",
      date: "5 April 2022",
      country: "Canada",
      avatar: "🎵",
    },
    {
      id: 4,
      website: "Instagram",
      assetName: "Tuhinulla",
      status: "Public",
      category: "Video",
      tags: "15,576",
      date: "2 March 2022",
      country: "USA",
      avatar: "🎬",
    },
  ];

  const toggleSelectAll = () => {
    if (selectedRows.length === assets.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(assets.map((asset) => asset.id));
    }
  };

  const toggleSelectRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-400">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          Your Uploaded Assets
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  checked={selectedRows.length === assets.length}
                  onChange={toggleSelectAll}
                />
              </th>
              <TableHeader sortable>Website</TableHeader>
              <TableHeader sortable>Asset Name</TableHeader>
              <TableHeader sortable>Status</TableHeader>
              <TableHeader sortable>Categories</TableHeader>
              <TableHeader sortable>Tags</TableHeader>
              <TableHeader sortable>Date</TableHeader>
              <TableHeader sortable>Country</TableHeader>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {assets.map((asset) => (
              <tr key={asset.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={selectedRows.includes(asset.id)}
                    onChange={() => toggleSelectRow(asset.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {asset.website}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm">
                      {asset.avatar}
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {asset.assetName}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={asset.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <CategoryIcon category={asset.category} />
                    <span className="text-sm text-gray-900">
                      {asset.category}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-900">{asset.tags}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{asset.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{asset.country}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
