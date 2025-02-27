import { cn } from "@/src/utils/utils";
import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string | Record<string, string | number | boolean>;
  type?: "success" | "error" | "info";
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 p-4 rounded shadow-lg transition-opacity",
        {
          "bg-green-500 text-white": type === "success",
          "bg-red-500 text-white": type === "error",
          "bg-blue-500 text-white": type === "info",
        }
      )}
    >
      {typeof message === "string" ? (
        message
      ) : (
        <ul>
          {Object.entries(message).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {String(value)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Toast;
