import React, { useState } from "react";
import {
  ChevronDown,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Copy,
  Share,
} from "lucide-react";
import Header from "../Header/Header";

const StatusBadge = ({ status, type = "default" }) => {
  const getStatusStyles = () => {
    switch (status.toLowerCase()) {
      case "paid":
        return "bg-green-100 text-green-700 border-green-200";
      case "unpaid":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "done":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "private":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "public":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusStyles()}`}
    >
      {status}
    </span>
  );
};

const ActionDropdown = ({ onAction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { id: "view", label: "View Details", icon: Eye },
    { id: "edit", label: "Edit", icon: Edit },
    { id: "copy", label: "Copy", icon: Copy },
    { id: "share", label: "Share", icon: Share },
    { id: "delete", label: "Delete", icon: Trash2, danger: true },
  ];

  const handleAction = (actionId) => {
    onAction(actionId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <MoreHorizontal className="w-4 h-4 text-gray-600" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-1">
              {actions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleAction(action.id)}
                  className={`w-full flex items-center space-x-2 px-4 py-2 text-lg hover:bg-gray-50 transition-colors ${
                    action.danger
                      ? "text-red-600 hover:text-red-700"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  <action.icon className="w-4 h-4" />
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const TableFullWidth = () => {
  const data = [
    {
      id: 1,
      idCustomer: "#6545",
      product: {
        name: "Speed Force : Knit",
        category: "Women",
        image: "👟",
        bgColor: "bg-red-100",
      },
      customer: "Ronald Richards",
      location: "Celina, Delaware 10299",
      quantity: 2,
      status: "Paid",
      amount: "$215",
    },
    {
      id: 2,
      idCustomer: "#5412",
      product: {
        name: "Assorted Cross Bag",
        category: "Men",
        image: "🎒",
        bgColor: "bg-blue-100",
      },
      customer: "Marvin McKinney",
      location: "Cir. Syracuse, Connecticut 35624",
      quantity: 3,
      status: "Unpaid",
      amount: "$542",
    },
    {
      id: 3,
      idCustomer: "#6622",
      product: {
        name: "Galaxy Hi-Tech Exclusive",
        category: "Children",
        image: "🎮",
        bgColor: "bg-yellow-100",
      },
      customer: "Jane Cooper",
      location: "New Jersey 45463",
      quantity: 5,
      status: "Done",
      amount: "$980",
    },
    {
      id: 4,
      idCustomer: "#6425",
      product: {
        name: "Happy Days Wax Candle",
        category: "Women",
        image: "🕯️",
        bgColor: "bg-pink-100",
      },
      customer: "Cameron Williamson",
      location: "Pennsylvania 57867",
      quantity: 1,
      status: "Paid",
      amount: "$1450",
    },
  ];

  const handleAction = (actionId, item) => {
    console.log(`Action: ${actionId} on item:`, item);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Table Full Width
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                ID Customer
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Customers
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  {item.id}.
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  {item.idCustomer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full ${item.product.bgColor} flex items-center justify-center text-lg`}
                    >
                      {item.product.image}
                    </div>
                    <div>
                      <div className="text-lg font-medium text-gray-900">
                        {item.product.name}
                      </div>
                      <div className="text-lg text-gray-500">
                        {item.product.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  {item.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  {item.location}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
                  {item.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ActionDropdown
                    onAction={(actionId) => handleAction(actionId, item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableWithCheckbox = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const data = [
    {
      id: 1,
      website: "Google",
      assetName: "Abstract Element",
      assetImage: "🔮",
      assetBgColor: "bg-purple-100",
      status: "Private",
      categories: "3D Elements",
      tags: "13,423",
      date: "31 Jan 2022",
      country: "India",
    },
    {
      id: 2,
      website: "Amazon",
      assetName: "Abstract Minimalist Characters",
      assetImage: "👤",
      assetBgColor: "bg-blue-100",
      status: "Public",
      categories: "Images",
      tags: "15,576",
      date: "2 Feb 2022",
      country: "UK",
    },
  ];

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleAction = (actionId, item) => {
    console.log(`Action: ${actionId} on item:`, item);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Table With Checkbox
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Website <ChevronDown className="w-4 h-4 inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Asset Name <ChevronDown className="w-4 h-4 inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status <ChevronDown className="w-4 h-4 inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Categories <ChevronDown className="w-4 h-4 inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Tags <ChevronDown className="w-4 h-4 inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Date <ChevronDown className="w-4 h-4 inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Country <ChevronDown className="w-4 h-4 inline ml-1" />
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  {item.website}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full ${item.assetBgColor} flex items-center justify-center text-lg`}
                    >
                      {item.assetImage}
                    </div>
                    <div className="text-lg font-medium text-gray-900">
                      {item.assetName}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={item.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <span className="text-lg text-gray-900">
                      {item.categories}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <span className="text-lg text-gray-900">{item.tags}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  {item.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900">
                  {item.country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ActionDropdown
                    onAction={(actionId) => handleAction(actionId, item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full p-4 md:p-8 h-full">
        <div className=" mx-auto space-y-6">
          {/* Breadcrumb */}

          {/* Table Full Width */}
          <TableFullWidth />

          {/* Table With Checkbox */}
          <TableWithCheckbox />
        </div>
      </div>
    </div>
  );
};

export default Table;
