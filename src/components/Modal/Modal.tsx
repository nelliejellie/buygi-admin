import React, { useState } from "react";
import { X, AlertTriangle, CheckCircle, Info } from "lucide-react";
import Header from "../Header/Header";

const ModalDemo = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  position = "center",
  showAnimation = true,
  isScrollable = false,
}) => {
  if (!isOpen) return null;

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "max-w-sm w-full";
      case "lg":
        return "max-w-2xl w-full";
      case "xl":
        return "max-w-4xl w-full";
      case "md":
      default:
        return "max-w-md w-full";
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "items-start pt-16";
      case "bottom":
        return "items-end pb-16";
      case "center":
      default:
        return "items-center";
    }
  };

  const getAnimationClasses = () => {
    if (!showAnimation) return "";
    return "animate-fade-in";
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal container */}
        <div className={`flex min-h-screen ${getPositionClasses()}`}>
          <div
            className={`relative bg-white rounded-lg shadow-xl transform transition-all sm:my-8 mx-auto ${getSizeClasses()} ${getAnimationClasses()}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div
              className={`p-6 ${
                isScrollable ? "max-h-96 overflow-y-auto" : ""
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const BasicModalContent = () => (
    <div className="space-y-4">
      <p className="text-gray-600">
        This is a basic modal dialog. It contains some example content to
        demonstrate the modal functionality. You can add any content here
        including forms, images, or other components.
      </p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );

  const VerticallyCenteredContent = () => (
    <div className="space-y-4 text-center">
      <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
        <Info className="w-6 h-6 text-blue-600" />
      </div>
      <p className="text-gray-600">
        This modal is vertically centered in the viewport. It maintains its
        position regardless of the content length.
      </p>
      <div className="flex justify-center space-x-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Close
        </button>
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Confirm
        </button>
      </div>
    </div>
  );

  const VerticallyBottomContent = () => (
    <div className="space-y-4">
      <div className="mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
        <AlertTriangle className="w-6 h-6 text-orange-600" />
      </div>
      <p className="text-gray-600">
        This modal appears at the bottom of the screen. It's useful for
        mobile-friendly interfaces or when you want to draw attention to the
        bottom of the page.
      </p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Dismiss
        </button>
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 transition-colors"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );

  const StaticModalContent = () => (
    <div className="space-y-4">
      <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-6 h-6 text-gray-600" />
      </div>
      <p className="text-gray-600">
        This is a static modal that cannot be closed by clicking outside. You
        must use the close button or action buttons to dismiss it.
      </p>
      <div className="bg-gray-50 p-4 rounded-md">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> Click outside this modal - it won't close! This
          is useful for critical actions or forms that shouldn't be accidentally
          dismissed.
        </p>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700 transition-colors"
        >
          Close Modal
        </button>
      </div>
    </div>
  );

  const RemovedAnimationContent = () => (
    <div className="space-y-4">
      <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-6 h-6 text-green-600" />
      </div>
      <p className="text-gray-600">
        This modal appears without animation effects. It opens and closes
        instantly for a snappier user experience.
      </p>
      <div className="flex justify-end space-x-3">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const ScrollableModalContent = () => (
    <div className="space-y-4">
      <p className="text-gray-600">
        This modal has scrollable content. When the content exceeds the modal
        height, you can scroll within the modal body.
      </p>
      {Array.from({ length: 20 }, (_, i) => (
        <div key={i} className="p-4 bg-gray-50 rounded-md">
          <h4 className="font-medium text-gray-900">Section {i + 1}</h4>
          <p className="text-sm text-gray-600 mt-1">
            This is some example content to demonstrate scrollable behavior.
            Each section contains different information to show how the modal
            handles overflow content gracefully.
          </p>
        </div>
      ))}
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
        >
          Close
        </button>
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full h-full">
      <Header />
      <div className=" bg-gray-50 p-4 md:p-6">
        <div className=" mx-auto">
          {/* Modal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Modal */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Basic Modal
              </h3>
              <button
                onClick={() => openModal("basic")}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Launch Modal
              </button>
            </div>

            {/* Vertically Centered */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="mb-4">
                <span className="px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded">
                  Vertically Centered
                </span>
              </div>
              <button
                onClick={() => openModal("centered")}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
              >
                Launch Modal
              </button>
            </div>

            {/* Vertically Bottom */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Vertically Bottom
              </h3>
              <button
                onClick={() => openModal("bottom")}
                className="px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
              >
                Launch Modal
              </button>
            </div>

            {/* Static Modal */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Static Modal
              </h3>
              <button
                onClick={() => openModal("static")}
                className="px-4 py-2 text-sm font-medium text-purple-600 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
              >
                Launch Modal
              </button>
            </div>

            {/* Removed Animation */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Removed Animation
              </h3>
              <button
                onClick={() => openModal("no-animation")}
                className="px-4 py-2 text-sm font-medium text-teal-600 bg-teal-50 rounded-md hover:bg-teal-100 transition-colors"
              >
                Launch Modal
              </button>
            </div>

            {/* Scrollable Modal */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Scrollable Modal
              </h3>
              <button
                onClick={() => openModal("scrollable")}
                className="px-4 py-2 text-sm font-medium text-teal-600 bg-teal-50 rounded-md hover:bg-teal-100 transition-colors"
              >
                Launch Modal
              </button>
            </div>
          </div>

          {/* Modal Sizes */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Modal Sizes
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openModal("small")}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Small Modal
              </button>
              <button
                onClick={() => openModal("large")}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Large Modal
              </button>
              <button
                onClick={() => openModal("extra-large")}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                Extra Large Modal
              </button>
            </div>
          </div>

          {/* Modals */}
          <ModalDemo
            isOpen={activeModal === "basic"}
            onClose={closeModal}
            title="Basic Modal"
            size="md"
          >
            <BasicModalContent />
          </ModalDemo>

          <ModalDemo
            isOpen={activeModal === "centered"}
            onClose={closeModal}
            title="Vertically Centered Modal"
            size="md"
            position="center"
          >
            <VerticallyCenteredContent />
          </ModalDemo>

          <ModalDemo
            isOpen={activeModal === "bottom"}
            onClose={closeModal}
            title="Bottom Positioned Modal"
            size="md"
            position="bottom"
          >
            <VerticallyBottomContent />
          </ModalDemo>

          <ModalDemo
            isOpen={activeModal === "static"}
            onClose={closeModal}
            title="Static Modal"
            size="md"
          >
            <StaticModalContent />
          </ModalDemo>

          <ModalDemo
            isOpen={activeModal === "no-animation"}
            onClose={closeModal}
            title="No Animation Modal"
            size="md"
            showAnimation={false}
          >
            <RemovedAnimationContent />
          </ModalDemo>

          <ModalDemo
            isOpen={activeModal === "scrollable"}
            onClose={closeModal}
            title="Scrollable Modal"
            size="md"
            isScrollable={true}
          >
            <ScrollableModalContent />
          </ModalDemo>

          {/* Size Modals */}
          <ModalDemo
            isOpen={activeModal === "small"}
            onClose={closeModal}
            title="Small Modal"
            size="sm"
          >
            <div className="space-y-4">
              <p className="text-gray-600">This is a small modal dialog.</p>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </ModalDemo>

          <ModalDemo
            isOpen={activeModal === "large"}
            onClose={closeModal}
            title="Large Modal"
            size="lg"
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                This is a large modal dialog with more space for content. You
                can include forms, tables, or other complex components here.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-md">
                  <h4 className="font-medium text-gray-900">Left Column</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Content for the left side
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-md">
                  <h4 className="font-medium text-gray-900">Right Column</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Content for the right side
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </ModalDemo>

          <ModalDemo
            isOpen={activeModal === "extra-large"}
            onClose={closeModal}
            title="Extra Large Modal"
            size="xl"
          >
            <div className="space-y-4">
              <p className="text-gray-600">
                This is an extra large modal dialog with maximum space for
                complex content.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-md">
                    <h4 className="font-medium text-gray-900">
                      Section {i + 1}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Content for section {i + 1}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </ModalDemo>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.2s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Modal;
