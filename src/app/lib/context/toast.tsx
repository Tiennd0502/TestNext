"use client";

import React, { createContext, useState } from "react";
import Toast from "../../ui/components/common/Toast";
import { TOAST_TYPE } from "../constants";

interface ToastProps {
  type?: TOAST_TYPE;
  message?: string;
}

type ToastState = ToastProps & { isOpen: boolean };

interface ToastContextValue {
  openToast: (toastProps: ToastProps) => void;
  closeToast: () => void;
}

const buildToastRenderer = ({ type, message }: ToastProps) => {
  switch (type) {
    case TOAST_TYPE.WARNING:
      return {
        message: message ?? "Warning!",
        color: "bg-yellow-400",
      };

    case TOAST_TYPE.ERROR:
      return {
        message: message ?? "Error!",
        color: "bg-red-400",
      };

    case TOAST_TYPE.SUCCESS:
    default:
      return {
        message: message ?? "Success!",
        color: "bg-green-400",
      };
  }
};

const ToastContext = createContext<ToastContextValue>({
  openToast: () => {},
  closeToast: () => {},
});

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<ToastState>({
    isOpen: false,
    type: TOAST_TYPE.SUCCESS,
  });

  const closeToast = () => {
    setToast({
      ...toast,
      isOpen: false,
    });
  };

  const openToast = ({ type = TOAST_TYPE.SUCCESS, message }: ToastProps) => {
    setToast({ isOpen: true, type, message });

    setTimeout(() => {
      closeToast();
    }, 3000);
  };

  const toastRenderer = buildToastRenderer(toast);

  return (
    <ToastContext.Provider
      value={{
        openToast,
        closeToast,
      }}>
      {children}
      {toast.isOpen && (
        <Toast
          message={toastRenderer.message}
          color={toastRenderer.color}
          onClose={closeToast}
        />
      )}
    </ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };
