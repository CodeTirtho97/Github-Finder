import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="flex items-center justify-center mb-4 space-x-3 p-4 bg-red-100 border border-red-400 rounded-lg shadow-lg text-red-800">
        {alert.type === "error" && (
          <svg
            className="w-6 h-6 flex-none"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="12" fill="#F87171"></circle>
            <path
              d="M8 8l8 8M16 8l-8 8"
              stroke="#B91C1C"
              strokeWidth="2"
            ></path>
          </svg>
        )}
        <span className="text-lg font-semibold">
          {alert.msg}
        </span>
      </div>
    )
  );
}

export default Alert;
